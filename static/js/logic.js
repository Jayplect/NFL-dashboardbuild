// type this in terminal to get data: python -m http.server 8080 --bind 127.0.0.1

d3.json("../static/data/Outputs_JSON/team_venuej3.json").then((importedData) => {
  var data = importedData;
  
  console.log(data);
  

// An array that will store the created venueMarkers
  var venueMarkers = [];
  

  for (var i = 0; i < data.length; i++) {

    var iconOptions = {
      iconUrl: data[i].Team_logo,
      iconSize: [40, 40]
    }
    
    // Creating a custom icon
    var customIcon = L.icon(iconOptions);
    
    // Options for the marker
    var markerOptions = {
      title: "MyLocation",
      clickable: true,
      icon: customIcon
    }

    venueMarkers.push(
      L.marker((data[i].Location),markerOptions).bindPopup(`<h2>${data[i].Team_Name} </h2> <hr> <h3>Venue: ${data[i].Team_Venue}</h3> <h4>Capacity: ${data[i].Venue_Capacity}</h4>`)
     );
  
    };


  var venueLayer = L.layerGroup(venueMarkers);

    

// Define variables for our tile layers.

  
  var street =L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
  });


  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  var cloudLayer = L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid={APIKEY}', {
  attribution: 'Cloud data &copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>',
  maxZoom: 18,
  opacity: 1,
  APIKEY: 'd476bee909aa4afbd9e735c6b94b8326'
  })

// Only one base layer can be shown at a time.
  var baseMaps = {
   Street: street,
   Topography: topo,
   Weather: cloudLayer
  };

// Overlays that can be toggled on or off
  var overlayMaps = {
   Venues: venueLayer
  
  };

// Create a map object, and set the default layers.
  var myMap = L.map("all-teams-chart", {
   center: [37.09, -95.71],
   zoom: 4,
   layers: [street, cloudLayer, venueLayer]
  });

// Pass our map layers into our layer control.
// Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps).addTo(myMap)
  });

