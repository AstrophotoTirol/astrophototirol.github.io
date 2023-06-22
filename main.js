/* Übersichtskarte Astrospots Tirol */

// Tirol
let tirol = {
    lat: 47.016373041058536,
    lng: 11.128455394230476
};

// Karte initialisieren
let map = L.map("map", {
    fullscreenControl: true,
    maxZoom: 20
}).setView([tirol.lat, tirol.lng], 8);

// thematische Layer
let themaLayer = {
    lichverschmutzung: L.featureGroup(),
}

// Hintergrundlayer
let layerControl = L.control.layers({
    
    "Openstreetmap": L.tileLayer.provider("OpenStreetMap.Mapnik").addTo(map),
    "Esri WorldTopoMap": L.tileLayer.provider("Esri.WorldTopoMap"),
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
        }),
    }, 

).addTo(map);
layerControl.expand();

//Marker Mutterbergersee
var mutterbergersee_icon = L.icon({
    iconUrl: 'icons/photospot.png',
    iconAnchor: [16, 37],
    popupAnchor: [0, -37],

});

L.marker([47.0166667, 11.129], {icon: mutterbergersee_icon}).addTo(map).bindPopup(`
    <h4>Mutterbergersee</h4>
    <img src = "images/mutterberger_250px.png" alt = "Mutterbergersee")>
    `).openPopup()
    

//Marker Lichtsee

L.marker([47.031409, 11.405618], {icon: mutterbergersee_icon}).addTo(map).bindPopup("Lichtsee").openPopup();

//Marker Sattelberg

L.marker([47.010163, 11.477516], {icon: mutterbergersee_icon}).addTo(map).bindPopup("Sattelberg").openPopup();

//Marker Steinplatte/Winklmoosalm

L.marker([47.657560, 12.579869], {icon: mutterbergersee_icon}).addTo(map).bindPopup("Winklmoos/Steinplatte").openPopup();

// Maßstab
L.control.scale({
    imperial: false,
}).addTo(map);



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
