"use strict";
// Retos Repaso Fundamentos

    exports.__esModule = true;
    var Mobile_1 = require("./Mobile");
    var motorola = new Mobile_1.Mobile(
      "Motorola",
      "G41",
      "Motorola",
      "128MB",
      "Azul",
      false,
      0,
      50
    );
    var iphone = new Mobile_1.Mobile(
      "Iphone 13",
      "i13",
      "Apple",
      "128GB",
      "Negro",
      false,
      0,
      150
    );
    var xiaomi = new Mobile_1.Mobile(
      "Xiaomi",
      "X2022",
      "Xiaomi",
      "64GB",
      "Negro",
      false,
      0,
      250
    );
    console.log(motorola);
    console.log(iphone);
    console.log(xiaomi);
    motorola.is5G = true;
    iphone.cameraNumber = 4;
    console.log(motorola);
    console.log(iphone);
    console.log(xiaomi);
