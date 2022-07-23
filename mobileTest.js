// Retos Repaso Mobile Test

"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var nokia3210 = new Mobile_1.Mobile(
  "Nokia3210",
  "3210",
  "Nokia",
  "128MB",
  "Negro",
  false,
  0,
  50
);
var iphone3g = new Mobile_1.Mobile(
  "Iphone3g",
  "i3g",
  "Apple",
  "16GB",
  "Blanco",
  false,
  0,
  150
);
var galaxy10 = new Mobile_1.Mobile(
  "Galaxy 10",
  "GT-I900",
  "Samsung",
  "16GB",
  "Rosa",
  false,
  0,
  250
);
console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);
nokia3210.is5G = true;
nokia3210.cameraNumber = 4;
console.log(nokia3210);
console.log(iphone3g);
console.log(galaxy10);
