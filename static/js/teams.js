
// ------- TEAMS DATA ------- //
// Get the data
const teams = "../static/data/Outputs_JSON/teams.json";
let teamsCount;


// INITIALIZE THE DASHBOARD
// Create a function to initialize the details
function init() {

    // Use D3 to select the dropdown menu  
    let dropdownMenu = d3.select("#selTeam");

    // Get the team names and populate the dropdown options
    d3.json(teams).then((teams_data) => {
        
        // Add team names to the dropdown menu
        teams_data.forEach((team) => {
            dropdownMenu.append("option").text(team['shortDisplayName']).property("value", team['shortDisplayName']);
        });

        // Get the first team
        let firstTeam = teams_data[0]['shortDisplayName'];

        // Create the initial plots and demographic info
        teamCharts(firstTeam);
        statCharts(firstTeam);
    });
};


// UPDATE THE CHARTS AND TEAM DETAILS 
// Change the charts and team details box based on dropdown selection
function teamOptionChanged(newTeam) {
    teamCharts(newTeam);
    statCharts(newTeam);
};

// BUILD THE CHARTS
// Create a function to build the charts
function teamCharts(teamName) {

    // Use D3 to retrieve all data
    d3.json(teams).then((teams_data) => {

    // Filter team data by name
    let filteredTeam = teams_data.filter(team => team['shortDisplayName'] == teamName);
        // console.log(filteredTeam);

    // Get the first team
    let team = filteredTeam[0];

    // Create the chart options object
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Result Metrics - 2022',
            align: 'center',
            verticalAlign: 'middle',
            y: -100
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -35,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            },
            enableMouseTracking: true
        },
        series: [{
            type: 'pie',
            name: 'Result percentage',
            innerSize: '40%',
            data: [
                ['Win', team.wins],
                ['Loss', team.losses],
                ['Ties', team.ties],
                {
                    dataLabels: {
                        enabled: true
                    }
                }
            ]
        }]
    };
    
    // Create the chart
    Highcharts.chart('team-chart2', options);

        // Retrieve all required information
        let team_info = {
            'Team Name': filteredTeam[0]['displayName'], 
            'Location': filteredTeam[0]['location'],
            'Games Played': filteredTeam[0]['gamesPlayed'],
            'Win Percent': filteredTeam[0]['winPercent'], 
            'Points': filteredTeam[0]['points']
        };

        // let obj = filteredTeam[0]

         // Fetch Team Logos
        d3.select("#team-logo").html("");
        d3.select("#team-logo").append('img').attr('src', filteredTeam[0]['logos']).attr('alt', filteredTeam[0]['shortDisplayName']).attr('height', 300)


        // console.log(filteredTeam[0])

        d3.select("#team-metadata").html("");
         let entries = Object.entries(team_info);
         entries.forEach(([key,value]) => {
            d3.select("#team-metadata").append("h5").text(`${key}: ${value}`);
        })
        
    });
};





// ------- STATISTICS DATA ------- //
// Get the data
const stats = "../data/Outputs_JSON/stats.json";
function statCharts(teamName) {

    // Use D3 to retrieve all data
    d3.json(stats).then((stats_data) => {

    // Filter team data by name
    let filteredTeam = stats_data.filter(team => team['home'] == teamName);

        // console.log(filteredTeam);

    // Get the first team
    let firstTeam = filteredTeam[0];

        console.log(firstTeam);

        // SCORES CHART
        // Create the chart options object
        const options1 = {
            chart: {
            type: 'line',
            zoomType: 'x'
            },
            title: {
                text: 'Scores Away vs. Scores Home'
            },
            subtitle: {
                text: "2002 - 2023"
            },
            xAxis: {
                categories: filteredTeam.map(row => row.date)
            },
            yAxis: {
                title: {
                    text: 'Score'
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            series: [{
                name: 'Scores Away',
                data: filteredTeam.map(row => row.score_away)
            }, {
                name: 'Scores Home',
                data: filteredTeam.map(row => row.score_home)
            }],
            turboThreshold: 10000000
        };


        // YARDS
        // Create the chart options object
        const options2 = {
            chart: {
            type: 'line',
            zoomType: 'x'
            },
            title: {
                text: 'Passing Yards vs. Rushing Yards'
            },
            subtitle: {
                text: "2002 - 2023"
            },
            xAxis: {
                categories: filteredTeam.map(row => row.date)
            },
            yAxis: {
                title: {
                    text: 'Yards'
                }
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    enableMouseTracking: true,
                    threshold: null
                }
            },
            series: [{
                type: 'area',
                name: 'Passing Yards Away',
                data: filteredTeam.map(row => row.passing_yards_away)
                }, 
                {
                type: 'area',
                name: 'Passing Yards Home',
                data: filteredTeam.map(row => row.passing_yards_home)
                },
                {
                type: 'area',
                name: 'Rushing Yards Away',
                data: filteredTeam.map(row => row.rushing_yards_away)
                }, 
                {
                type: 'area',
                name: 'Rushing Yards Home',
                data: filteredTeam.map(row => row.rushing_yards_home)
                }
            ],
        };


    // Create the charts
    Highcharts.chart('team-chart3', options1);
    Highcharts.chart('team-chart4', options2);

    });       
};


// Call the initialization function
init();

