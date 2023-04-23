// ------- TEAMS DATA ------- //
// Get the data
const teams = "./data-json/teams.json";

// Fetch the JSON data and console log it
d3.json(teams).then(function(teams_data) {
    // console.log(teams_data[0]);
  });

  // INITIALIZE THE DASHBOARD
// Create a function to initialize the details
function init() {

        teamCharts(firstTeam);
        teamDemoInfo(firstTeam);
};
// INIT ENDS HERE

// BUILD THE CHARTS
// Create a function to build the charts
function chart() {

    // Use D3 to retrieve all data
    d3.json(teams).then((teams_data) => {

    // Filter team data by name
    let filteredTeam = teams_data.filter(team => team['shortDisplayName'] == teamName);

        // console.log(filteredTeam);

    // Get the first team
    let firstTeam = filteredTeam[0];

        console.log(firstTeam);

    // Create a win-loss chart
    let winLossData = [{ x: ['Wins', 'Losses'], 
                        y: [firstTeam['wins'], firstTeam['losses']], 
                        type: 'bar',
                        marker: {
                            color: '#003366',
                            line: {
                                color: '#CC0000',
                                width: 1.5
                              },
                            opacity: 0.9,
                          }}];

    // Create an average points chart
    let avgPointsData = [
    {
        x: [firstTeam.avgPointsAgainst],
        y: [firstTeam.avgPointsFor],
        mode: 'markers',
        type: 'scatter',
        name: 'Avg Points'
    }
    ];

    let avgPointsLayout = {
    xaxis: { title: 'Average Points Against' },
    yaxis: { title: 'Average Points For' }
    };

    // Create a games played chart
    let gamesPlayedData = [
    { x: ['Losses', 'Ties', 'Wins'], 
        y: [firstTeam.losses, firstTeam.ties, firstTeam.wins], 
        type: 'bar',
        marker: {
            color: '#003366',
            line: {
                color: '#CC0000',
                width: 1.5
              },
            opacity: 0.9,
          } }
    ];

        // Render the plot to the div tag with the relevant ids
        // Plotly.newPlot('team-chart1', winLossData);
        Plotly.newPlot('team-chart2', avgPointsData, avgPointsLayout);
        Plotly.newPlot('team-chart1', gamesPlayedData);
        
    });
    };


// TEAM INFORMATION
// Create a function to get team's Information
function teamDemoInfo(teamName) {

    // Use D3 to retrieve all data
    d3.json(teams).then((teams_data) => {

    // Filter team data by name
        let filteredTeam = teams_data.filter(teams_data => teams_data.shortDisplayName == teamName);
        
        // Retrieve all required information
        let team_info = {
            'Team Name': filteredTeam[0]['displayName'], 
            'Location': filteredTeam[0]['location'],
            'Win Percent': filteredTeam[0]['divisionWinPercent'], 
            'Points': filteredTeam[0]['points']
        };

        // let obj = filteredTeam[0]

         // Fecht Team Logos
        d3.select("#team-logo").html("");
        d3.select("#team-logo").append('img').attr('src', filteredTeam[0]['logos']).attr('alt', filteredTeam[0]['shortDisplayName']).attr('height', 150)


        console.log(filteredTeam[0]['logos'])

        d3.select("#team-metadata").html("");
         let entries = Object.entries(team_info);
         entries.forEach(([key,value]) => {
            d3.select("#team-metadata").append("h5").text(`${key}: ${value}`);
        });
  });
};

// Call the initialization function
init();










