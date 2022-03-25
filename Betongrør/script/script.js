var form = document.getElementById("form");
form.addEventListener("submit", function(event) {
var data = form.elements;
var YtreInput = data.Ytre.value;
var IndreInput = data.Indre.value;
var LengdeInput = data.Lengde.value;
var AntallB25 = data.AntallB25;
var TotalPris = data.Pris;
var Utskrift = data.Utskrift;

var BetongSekkVekt = 25;
var BetongSekkFerdigBlandet = 12.5;
var BetongSekkPris = 89;

var pi = Math.PI;
var YtreVolum = (pi*((YtreInput/2)**2)*LengdeInput);
var IndreVolum = (pi*((IndreInput/2)**2)*LengdeInput);

var BetongVolum = (YtreVolum-IndreVolum);
var BetongLiter = BetongVolum/1000
var BetongSekk = Math.ceil(BetongLiter/BetongSekkFerdigBlandet)
var BetongVektUblandet = BetongSekk * BetongSekkVekt
var BetongPris = BetongSekk * BetongSekkPris

AntallB25.innerHTML = [
    "Antall Sekk: " + BetongSekk
];

TotalPris.innerHTML = [
    "Pris: " + BetongPris + "kr"
];

Utskrift.innerHTML = [
"Ytre: " + YtreInput + "cm" + "\n" +
"Indre: " + IndreInput + "cm" + "\n" +
"Lengde: " + LengdeInput + "cm" + "\n" + "\n" +
"IndreVolum: " + roundup(IndreVolum) + "cm³" + "\n" +
"BetongVolum: " + roundup(BetongVolum) + "cm³" +  "\n" +
"BetongVolum: " + roundup(BetongLiter) + " Liter" +  "\n" +
"Vekt Ublandet: " + BetongVektUblandet + "kg" + "\n" + "\n"
];

console.log("Ytre Volum: ",YtreVolum)
console.log("Indre Volum: ",IndreVolum)
console.log("Betong Volum: ",BetongVolum)
event.preventDefault();
})

function roundup(num) {
    var x = Math.round((num + Number.EPSILON) * 1000)/1000
    return x
}