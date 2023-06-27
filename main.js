/* Übersichtskarte Astrospots Tirol */

// Tirol
let tirol = {
    lat: 47.016373041058536,
    lng: 11.128455394230476
};

// Karte initialisieren
let map = L.map("map", {
    fullscreenControl: true,
    maxZoom: 20,
    worldMiniMapControl: true
}).setView([tirol.lat, tirol.lng], 8);


let themaLayer = {
    forecast: L.featureGroup(),
    wind: L.featureGroup()
}

// Hintergrundlayer
let layerControl = L.control.layers({
    "Esri WorldTopoMap": L.tileLayer.provider("Esri.WorldTopoMap").addTo(map),
    "Esri WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
    "Lichtverschmutzung 2016": L.tileLayer(
        'https://djlorenz.github.io/astronomy/lp2016/overlay/tiles/tile_{z}_{x}_{y}.png', {
        minZoom: 2,
        maxNativeZoom: 8,
        maxZoom: 19,
        tileSize: 1024,
        zoomOffset: -2,
        opacity: 0.5
    }),

    "Lichtverschmutzung 2020": L.tileLayer(
        'https://djlorenz.github.io/astronomy/lp2020/overlay/tiles/tile_{z}_{x}_{y}.png', {
        minZoom: 2,
        maxNativeZoom: 8,
        maxZoom: 19,
        tileSize: 1024,
        zoomOffset: -2,
        opacity: 0.5
    }),},
    {
    "Wettervorhersage MET Norway": themaLayer.forecast.addTo(map),
    "ECMWF Windlayer": themaLayer.wind.addTo(map)},{
    

},

).addTo(map);
layerControl.expand();



//Marker Mutterbergersee
var mutterbergersee_icon = L.icon({
    iconUrl: 'icons/photospot.png',
    iconAnchor: [16, 37],
    popupAnchor: [0, -37],

});
//Marker Steinplatte/Winklmoosalm

L.marker([47.657560, 12.579869], { icon: mutterbergersee_icon }).addTo(map).bindPopup(`<h4>Winklmoos/Steinplatte</h4>
    <img src = "images/winklmoos_250px.png" alt = "Winkmoos")>
    <p></p>
    <a href = "https://astrophototirol.github.io/Winklmoos/" > Hier gehts zum Spot -> </a>`).openPopup();

//Marker Lichtsee

L.marker([47.031409, 11.405618], { icon: mutterbergersee_icon }).addTo(map).bindPopup(`<h4>Lichtsee</h4>
    <img src = "images/lichtsee_250px.png" alt = "Lichtsee")>
    <p></p>
    <a href = "https://astrophototirol.github.io/Lichtsee/" > Hier gehts zum Spot -> </a>
    `).openPopup();

//Marker Sattelberg

L.marker([47.010163, 11.477516], { icon: mutterbergersee_icon }).addTo(map).bindPopup(`<h4>Sattelberg</h4>
    <img src = "images/sattelberg_250px.png" alt = "Sattelberg")>
    <p></p>
    <a href = "https://astrophototirol.github.io/Sattelberg/" > Hier gehts zum Spot -> </a>`).openPopup();
//Marker Mutterbergersee

L.marker([47.0166667, 11.129], { icon: mutterbergersee_icon }).addTo(map).bindPopup(`
    <h4>Mutterbergersee</h4>
    <img src = "images/mutterberger_250px.png" alt = "Mutterbergersee")>
    <p></p>
    <a href = "https://astrophototirol.github.io/Mutterbergersee/" > Hier gehts zum Spot -> </a>
    `).openPopup();


// Maßstab
L.control.scale({
    imperial: false,
}).addTo(map);

// Create the image overlay
let imageBounds = [[0, 0], [window.innerHeight, window.innerWidth]];
let imageUrl = 'images/Unbenanntes_Panorama-1.jpg'; // Replace with the path to your actual large image file
let imageOverlay = L.imageOverlay(imageUrl, imageBounds);

// Create the image frame map
let imageFrameMap = L.map('superzoom', {
  crs: L.CRS.Simple,
  zoomControl: false
});

// Set the max bounds of the image frame map to match the image bounds
imageFrameMap.setMaxBounds(imageBounds);

// Adjust image bounds on window resize
window.addEventListener('resize', () => {
  imageBounds = [[0, 0], [window.innerHeight, window.innerWidth]];
  imageOverlay.setBounds(imageBounds);
  imageFrameMap.setMaxBounds(imageBounds);
});

// Fit the image overlay to the map bounds initially
imageFrameMap.fitBounds(imageBounds);

// Add the image overlay to the image frame map
imageOverlay.addTo(imageFrameMap);


  
L.control.rainviewer({
    position: 'bottomleft',
    nextButtonText: '>',
    playStopButtonText: 'Play/Stop',
    prevButtonText: '<',
    positionSliderLabelText: "Hour:",
    opacitySliderLabelText: "Opacity:",
    animationInterval: 500,
    opacity: 0.5
}).addTo(map);
loadStations("https://static.avalanche.report/weather_stations/stations.geojson");


