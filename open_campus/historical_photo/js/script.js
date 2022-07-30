var map = L.map('map', {
  center: [36.50818573916065, 136.59714342542],
  zoom: 16,
  zoomControl: true
});

var ggl_present = new L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  attribution: "Maptiles by Google"
}).addTo(map);

var gsi_1960th = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png', {
  attribution: "国土地理院"
}).addTo(map);

L.control.sideBySide(ggl_present, gsi_1960th).addTo(map);