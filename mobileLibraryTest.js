// Retos Repaso Mobile Library Test

"use strict";
exports.__esModule = true;
var mobile2_1 = require("./mobile2");
var mobileLibrary_1 = require("./mobileLibrary");
var nokia3210 = new mobile2_1.Mobile2(
  "Nokia3210",
  "3210",
  "Nokia",
  "128MB",
  "Negro",
  false,
  0,
  50
);
var iphone3g = new mobile2_1.Mobile2(
  "Iphone3g",
  "i3g",
  "Apple",
  "16GB",
  "Blanco",
  false,
  0,
  150
);
var galaxy10 = new mobile2_1.Mobile2(
  "Galaxy 10",
  "GT-I900",
  "Samsung",
  "16GB",
  "Rosa",
  false,
  0,
  250
);
var galaxyS21 = new mobile2_1.Mobile2(
  "GALAXY S21",
  "Ultra 5G",
  "Samsung",
  "512MB",
  "Rosa",
  true,
  5,
  1.2
);
var todos = [iphone3g, galaxyS21, nokia3210, galaxy10];
var miLibrary = new mobileLibrary_1.MobileLibrary(
  "Mis Moviles",
  "En mi casa",
  todos
);
console.log(miLibrary.getName());
console.log(miLibrary.geLocation());
console.log(miLibrary.getMobiles());
console.log(miLibrary.getTotalPrice());
console.log("------------------------------");
miLibrary.printLibrary();
