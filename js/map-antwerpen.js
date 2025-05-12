let mapAnt = L.map('locatie').setView([51.2211, 4.3997], 11)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapAnt);

let circle = L.circle([51.2211,4.3997], {
    color: '#red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 2000
}).addTo(mapAnt);

