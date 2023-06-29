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
    lp2016: L.featureGroup(),
    lp2020: L.featureGroup()
}

// Hintergrundlayer
let layerControl = L.control.layers({
    "Esri WorldTopoMap": L.tileLayer.provider("Esri.WorldTopoMap").addTo(map),
    "Esri WorldImagery": L.tileLayer.provider("Esri.WorldImagery"),
    },
    {
        "Lichtverschmutzung 2016": themaLayer.lp2016,
        "Lichtverschmutzung 2020": themaLayer.lp2020}).addTo(map);
//layerControl.expand();

var lichtverschmutzung16 = L.tileLayer(
    'https://djlorenz.github.io/astronomy/lp2016/overlay/tiles/tile_{z}_{x}_{y}.png', {
    minZoom: 2,
    maxNativeZoom: 8,
    maxZoom: 19,
    tileSize: 1024,
    zoomOffset: -2,
    opacity: 0.5
}).addTo(themaLayer.lp2016)

var lichtverschmutzung20 = L.tileLayer(
    'https://djlorenz.github.io/astronomy/lp2020/overlay/tiles/tile_{z}_{x}_{y}.png', {
    minZoom: 2,
    maxNativeZoom: 8,
    maxZoom: 19,
    tileSize: 1024,
    zoomOffset: -2,
    opacity: 0.5
}).addTo(themaLayer.lp2020)

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

 map.eachLayer(function (layer) {
      layer.closePopup();
 });
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

L.control.Legend({
    position: "bottomright",
    title: "Artificial Sky Brightness",
    column: "1",
    legends: [{
        label: "<0.01",
        type: "image",
        url: "icons/1.png",
    },
    {
        label: "0.01 - 0.06",
        type: "image",
        url: "icons/2.png",
    },
    {
        label: "0.06 - 0.11",
        type: "image",
        url: "icons/3.png",
    },
    {
        label: "0.11 - 0.19",
        type: "image",
        url: "icons/4.png",
    },
    {
        label: "0.19 - 0.33",
        type: "image",
        url: "icons/5.png",
    },
    {
        label: "0.33 - 0.58",
        type: "image",
        url: "icons/6.png",
    },
    {
        label: "0.58-1.00",
        type: "image",
        url: "icons/7.png",
    },
    {
        label: "1.00 - 1.73",
        type: "image",
        url: "icons/8.png",
    },
    {
        label: "1.73 - 3.00",
        type: "image",
        url: "icons/9.png",
    },
    {
        label: "3.00 - 5.20",
        type: "image",
        url: "icons/10.png",
    },
    {
        label: "5.20 - 9.00",
        type: "image",
        url: "icons/11.png",
    },
    {
        label: "9.00 - 15.59",
        type: "image",
        url: "icons/12.png",
    },
    {
        label: "15.59 - 27.00",
        type: "image",
        url: "icons/13.png",
    },
    {
        label: "27 - 46.77",
        type: "image",
        url: "icons/14.png",
    },
    {
        label: ">46.77",
        type: "image",
        url: "icons/15.png",
    }],
    symbolWidth: "150",
    symbolHeigh: "100",
    collapsed: "True"
}).addTo(map);

L.control.rainviewer({
    position: 'bottomleft',
    nextButtonText: '>',
    playStopButtonText: 'Play/Stop',
    prevButtonText: '<',
    positionSliderLabelText: "Hour:",
    opacitySliderLabelText: "Opacity:",
    animationInterval: 500,
    opacity: 0.5,
    
}).addTo(map);



