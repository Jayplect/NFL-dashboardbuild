
// ------- TEAMS DATA ------- //
// Get the data
const teams = "../static/teams.json";
let teamsCount;


// INITIALIZE THE DASHBOARD
// Create a function to initialize the details
function init() {

    // Use D3 to select the dropdown menu  
    let dropdownMenu = d3.select("#selTeam");

    // Get the team names and populate the dropdown options
    d3.json(teams).then((teams_data) => {

        teams_data.sort(function(a, b) {
            return a.shortDisplayName.localeCompare(b.shortDisplayName);
         });
        
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
            'OverTime Wins': filteredTeam[0]['OTWins'], 
            'OverTime Losses': filteredTeam[0]['OTLosses'], 
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
const stats = "../static/stats.json";
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
                text: 'Scores - Home Team vs. Away Team'
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
                name: 'Home Team',
                data: filteredTeam.map(row => row.score_home)
                }, 
                {
                type: 'area',
                name: 'Away Team',
                data: filteredTeam.map(row => row.score_away)
                }
            ],
        };


        // ATTEMPTS & DRIVES CHART
        // Create the chart options object
        const options2 = {
            chart: {
            type: 'line',
            zoomType: 'x'
            },
            title: {
                text: 'Attempts & Drives - Home Team vs. Away Team'
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
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: true
                }
            },
            series: [{
                name: 'Rushing Attempts - Home Team',
                data: filteredTeam.map(row => row.rushing_attempts_home)
                }, 
                {
                name: 'Rushing Attempts - Away Team',
                data: filteredTeam.map(row => row.rushing_attempts_away)
                },
                {
                name: 'Drives - Home Team',
                data: filteredTeam.map(row => row.drives_home)
                }, 
                {
                name: 'Drives - Away Team',
                data: filteredTeam.map(row => row.drives_away)
                }
            ],
        };


        // YARDS CHART
        // Create the chart options object
        const options3 = {
            chart: {
            type: 'area',
            zoomType: 'x'
            },
            title: {
                text: 'Passing & Rushing Yards - Home Team vs. Away Team'
            },
            subtitle: {
                text: "2002 - 2023"
            },
            accessibility: {
                point: {
                    valueDescriptionFormat: '{index}. {point.category}, {point.y}, {point.percentage:.1f}%.'
                }
            },
            yAxis: {
                labels: {
                    format: '{value}%'
                },
                title: {
                    enabled: false
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y})<br/>',
                split: true
            },
            plotOptions: {
                area: {
                    stacking: 'percent',
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Passing Yards - Home Team',
                data: filteredTeam.map(row => row.passing_yards_home)
                }, 
                {
                name: 'Passing Yards - Away Team',
                data: filteredTeam.map(row => row.passing_yards_away)
                },
                {
                name: 'Rushing Yards - Home Team',
                data: filteredTeam.map(row => row.rushing_yards_home)
                }, 
                {
                name: 'Rushing Yards - Away Team',
                data: filteredTeam.map(row => row.rushing_yards_away)
                }
            ],
        };


        
    // Create the charts
    Highcharts.chart('team-chart3', options1);
    Highcharts.chart('team-chart4', options2);
    Highcharts.chart('team-chart5', options3);

    });       
};


// Call the initialization function
init();

