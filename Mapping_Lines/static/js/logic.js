// Add console.log to check to see if our code is working.
console.log("working");
// // Add GeoJSON data.
// let sanFranAirport =
// {
// 	"type": "FeatureCollection", "features": [{
// 		"type": "Feature",
// 		"properties": {
// 			"id": "3469",
// 			"name": "San Francisco International Airport",
// 			"city": "San Francisco",
// 			"country": "United States",
// 			"faa": "SFO",
// 			"icao": "KSFO",
// 			"alt": "13",
// 			"tz-offset": "-8",
// 			"dst": "A",
// 			"tz": "America/Los_Angeles"
// 		},
// 		"geometry": {
// 			"type": "Point",
// 			"coordinates": [-122.375, 37.61899948120117]
// 		}
// 	}
// 	]
// };
// // Create the map object with a center and zoom level.
// // let map = L.map('mapid').setView([36.1733, -120.1794], 7);
// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);
// Add a marker to the map for Los Angeles, California.
// var circle = L.circle([34.0522, -118.2437], {
// 	radius: 100
// }).addTo(map);
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);
// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
// 	  return L.marker(latlng)
// 	  .bindPopup("<h2>" + feature.properties.city + "</h2>");
	// }
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);


// L.geoJson(sanFranAirport, {
// 	onEachFeature: function (feature, layer) {
// 		console.log(layer);
// 		layer.bindPopup("<h2>" + feature.properties.city + "</h2>");
// 	}
// }).addTo(map);
// L.circleMarker([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: '#ffffa1',
//     radius: 300
// }).addTo(map);
// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
// let line = [
// 	[33.9416, -118.4085],
// 	[37.6213, -122.3790],
// 	[40.7899, -111.9791],
// 	[47.4502, -122.3088]
// ];
// // // Create a polyline using the line coordinates and make the line red.
// // L.polyline(line, {
// // 	color: "red"
// //   }).addTo(map);
// // Create a polyline using the line coordinates and make the line black.
// L.polyline(line, {
// 	color: "yellow"
// }).addTo(map);
// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function (city) {
// 	console.log(city)
// 	L.circleMarker(city.location, {
// 		radius: city.population / 200000,
// 		color: 'orange'
// 	})
// 		.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// 		.addTo(map);
// });
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	accessToken: API_KEY
})

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://github.com/keyoumao/Mapping_Earthquakes/blob/master/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});