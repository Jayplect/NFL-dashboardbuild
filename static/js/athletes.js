// ------- ATHLETES DATA ------- //

// Get the data
const athletes = "../static/data/Outputs_JSON/athletes.json";


// INITIALIZE THE DASHBOARD
// Create a function to initialize the details
function init() {

    // Use D3 to select the dropdown menu  
    let dropdownMenu = d3.select("#selPlayer");

    // Get the athlete names and populate the dropdown options
    d3.json(athletes).then((athletes_data) => {
        
        // Add athlete names to the dropdown menu
        athletes_data.forEach((athlete) => {
            dropdownMenu.append("option").text(athlete['name']).property("value", athlete['name']);
        });

        // Get the full data
        let athletesData = athletes_data;

        // Get the first athlete
        let firstAthlete = athletes_data[0]['name'];

        // Create the initial plots and demographic info
        playersChart(athletesData);
        playerDemoInfo(firstAthlete);
    });
};


// UPDATE THE CHARTS AND DEMOGRAPHIC INFO 
// Change the charts and demographic info box based on dropdown selection
function playerOptionChanged(newAthlete) {
    playerDemoInfo(newAthlete);
};


// ATHLETE INFORMATION
// Create a function to get Athlete's Information
function playerDemoInfo(athleteName) {
    let player_info;

        // Use D3 to retrieve all data
        d3.json(athletes).then((athletes_data) => {

            // Filter athlete data by name
            let filteredAthlete = athletes_data.filter(athlete => athlete['name'] == athleteName);
                // console.log(filteredTeam);
        
            // Get the first athlete
            let athlete = filteredAthlete[0];

            // Retrieve all required information
            let athlete_info = {
                'Name': athlete['name'],
                'Team: ': athlete['teamName'],
                'Player Type': athlete['type'],
                'Position': athlete['position'], 
                'Status': athlete['status'], 
                'Weight (lbs)': athlete['weight'],
                'Height (inches)': athlete['height'], 
                'Age': athlete['age'],
                'Birth City': athlete['birthCity'],
                'Birth Country': athlete['birthCountry'], 
                'Experience (in years)': athlete['xp']
            };     
            
            // Fetch Athlete Headshots
            d3.select("#player-logo").html("");
            d3.select("#player-logo").append('img').attr('src', athlete['headshot']).attr('alt', athlete['name']).attr('height', 250)
  

            d3.select("#player-chart1").html("");
            let entries = Object.entries(athlete_info);
            entries.forEach(([key,value]) => {
            d3.select("#player-chart1").append("h6").text(`${key}: ${value}`);
          });

          
          // console.log(player_info)
    })
};


// Create a function to prepare Charts
function playersChart(athletesData) {

    // Use D3 to retrieve all data
    d3.json(athletes).then((data) => {

        // Get the full data
        let athletesData = data;
        // console.log(athletesData);


        // HEIGHT VS. WEIGHT CHART
        // Set the chart options
        Highcharts.setOptions({
            colors: ['rgba(5,141,199,0.5)', 'rgba(80,180,50,0.5)', 'rgba(237,86,27,0.5)']
        });

        // Create data series
        const series = [{
            name: 'Offense',
            id: 'offense',
            marker: {
                symbol: 'circle'
            }},
            {
            name: 'Defense',
            id: 'defense',
            marker: {
                symbol: 'triangle'
            }},
            {
            name: 'Special',
            id: 'specialTeam',
            marker: {
                symbol: 'square'
            }}
        ];

        // Get Height & Weight Data based on Athlete Type
        const getData = athleteType => {
            const temp = [];
            data.forEach(athlete => {
                if (athlete.type === athleteType && athlete.height > 0 && athlete.weight > 0) {
                    temp.push([athlete.height, athlete.weight])
                }
            });
            return temp;
        };

        // Add the Height and Weight Data to the full data series
        series.forEach(s => {
            s.data = getData(s.id);
        });
    
        console.log(series);

        // Set Chart details
        const options1 = {
            chart: {
                type: 'scatter',
                zoomType: 'xy'
            },
            title: {
                text: 'Athletes by height and weight',
                align: 'left'
            },
            xAxis: {
                title: { text: 'Height (inches)' },
                labels: { format: '{value}' },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: { text: 'Weight (lbs)' },
                labels: { format: '{value}' }
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 4,
                        symbol: 'circle',
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: { enabled: false }
                        }
                    }
                }
            },
            tooltip: {
                pointFormat: 'Name: {series.name} <br/> Height: {point.x} inches <br/> Weight: {point.y} lbs'
            },
            series
        };


        // AGE VS. EXPERIENCE CHART
        // Set the chart options

        let data2 = [];
        data.forEach(athlete => {
            data2.push([athlete.age, athlete.xp, athlete.age, athlete.name, athlete.teamName])
        });
        console.log(data2);
        // Set Chart details
        const options2 = {
            chart: {
                type: 'bubble',
                plotBorderWidth: 1,
                zoomType: 'xy'
            },
            legend: {
                enabled: false
            },
            title: {
                text: 'Age Vs. Experience'
            },
            xAxis: {
                gridLineWidth: 1,
                title: {
                    text: 'Age'
                },
                labels: {
                    format: '{value} years'
                },
                plotLines: [{
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 65,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: 'italic'
                        },
                    },
                    zIndex: 3
                }],
            },
            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: 'Experience'
                },
                labels: {
                    format: '{value} years'
                },
                maxPadding: 0.2,
                plotLines: [{
                    color: 'black',
                    dashStyle: 'dot',
                    width: 2,
                    value: 50,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                    },
                    zIndex: 3
                }],
            },
            tooltip: {
                useHTML: true,
                pointFormat: 'Name: {point.c} <br/> Age: {point.x} years <br/> Experience: {point.y} years',
                followPointer: true
            },
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
                data: data2,
                colorByPoint: true
            }]
        };

        console.log(data2);
        // Create the charts
        Highcharts.chart('player-chart3', options1);
        Highcharts.chart('player-chart4', options2);
});

};


// Call the initialization function
init();


    

