/* Übersichtskarte Astrospots Tirol */

// Tirol
let tirol = {
    lat: 47.267222,
    lng: 11.392778
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
    "Esri WorldImagery": L.tileLayer.provider("Esri.WorldImagery")
}, 
).addTo(map);
layerControl.expand();

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
