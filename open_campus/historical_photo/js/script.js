var map = L.map('map', {
  center: [36.519354505336885, 136.60919341594447],
  zoom: 16,
  zoomControl: true
});

var ggl_present = new L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
  attribution: "Maptiles by Google"
}).addTo(map);

/* var gsi_1960th = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/ort_old10/{z}/{x}/{y}.png', {
  attribution: "国土地理院"
}).addTo(map); */

var gsi_1970th = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/gazo1/{z}/{x}/{y}.jpg', {
  attribution: "国土地理院"
}).addTo(map);


L.control.sideBySide(ggl_present, gsi_1970th).addTo(map);