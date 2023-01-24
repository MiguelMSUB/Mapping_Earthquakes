// Add console.log to check to see if our code is working.
console.log("working222");

// Create the map object with a center and zoom level.
var map = L.map("mapid", {
    center: [30, 30],
    zoom: 2
  });

// Get data from cities.js
let airportData = airports;

// Loop through the cities array and create one marker for each city.
airportData.forEach(function(airports) {
  console.log(airports)
  L.circleMarker(airports.location, {
  radius: airports.visitas*.2,
  color: "yellow"
  })
  .bindPopup("<h2>" + airports.name + ", " + airports.iata + "</h2> <hr> <h3>Visitas " + airports.visitas.toLocaleString() + ", Aterrizajes " + airports.aterrizajes.toLocaleString() + ", Despegues  " + airports.despegues.toLocaleString() +"</h3>")
  .addTo(map);
});



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/navigation-night-v1",
  accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

