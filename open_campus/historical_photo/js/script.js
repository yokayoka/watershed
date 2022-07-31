/*
サイトのアドレスの後に緯度経度の座標をパラメータとして与えることで任意の地点を表示できます。下記は東京ディズニーランドの例です
index.html?y=35.62925811236794&x=139.88667561474404
*/
var ini_x;
var ini_y;
var ini_z;

//ホームポジションを県立大学に設定
ini_y = 36.519354505336885;
ini_x = 136.60919341594447;
            
//ズームレベルの初期値を13に設定
ini_z = 13;

$(document).ready(function(){
var map = L.map('map', {
  center: [ini_y, ini_x],
  zoom: ini_z,
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

const url = new URL(location.href);
// console.log(url);
const params = new URLSearchParams(url.search);
x = parseFloat(params.get('x'));
y = parseFloat(params.get('y'));  

// x, y が数値で有効な範囲の時にURLパラメータからの数値を初期値に設定する
if((Number.isFinite(x))&&(x<=180)&&(x>=-180)&&(Number.isFinite(y))&&(y<=90)&&(y>=-90)){
  ini_x=x;
  ini_y=y;
    map.setView([ini_y, ini_x], ini_z);
}
else{
  map.setView([ini_y, ini_x], ini_z); 
  }

L.control.sideBySide(ggl_present, gsi_1970th).addTo(map);



});