// Add console.log to check to see if our code is working.
console.log("working222");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([40.7, -94.5], 4.5);


  // Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790], //SFO
  [47.4435, -122.3016], //SEATTLE
  [39.8493, -104.6738], // DEN
  [41.9786, -87.9047], // ORD
  [40.6417, -73.7809] //JFK
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "red",
  dashArray: '3,6'
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
