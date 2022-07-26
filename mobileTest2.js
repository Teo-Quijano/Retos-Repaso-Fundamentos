// Retos Repaso Fundamentos

"use strict";
exports.__esModule = true;
var mobile2_1 = require("./mobile2");
var nokia3210 = new mobile2_1.Mobile2(
  "Motorola",
  "G41",
  "Motorola",
  "128MB",
  "Azul",
  false,
  0,
  50
);
var iphone3g = new mobile2_1.Mobile2(
  "Iphone 13",
  "i13",
  "Apple",
  "128GB",
  "Negro",
  false,
  0,
  150
);
var galaxy10 = new mobile2_1.Mobile2(
  "Xiaomi",
  "X2022",
  "Xiaomi",
  "64GB",
  "Negro",
  false,
  0,
  250
);
console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);
nokia3210.is5G = true; // muestra un error porque se le han cambiado los atributos
nokia3210.cameraNumber = 4; // para poderlo hacer deberiamos llamar un metodo setter y getter
console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);
var arr = [nokia3210, iphone3g, galaxy10];
for (var i = 0; i < arr.length; i++) {
  arr[i].print();
}
