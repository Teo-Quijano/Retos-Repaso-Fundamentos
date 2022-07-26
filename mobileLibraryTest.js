// Retos Repaso Fundamentos

    "use strict";
    exports.__esModule = true;
    var mobile2_1 = require("./mobile2");
    var mobileLibrary_1 = require("./mobileLibrary");
    var motorola = new mobile2_1.Mobile2(
      "Motorola",
      "G41",
      "Motorola",
      "128MB",
      "Azul",
      false,
      0,
      50
    );
    var iphone = new mobile2_1.Mobile2(
      "Iphone 13",
      "i13",
      "Apple",
      "128GB",
      "Negro",
      false,
      0,
      150
    );
    var xiaomi = new mobile2_1.Mobile2(
      "Xiaomi",
      "X2022",
      "Xiaomi",
      "64GB",
      "Negro",
      false,
      0,
      250
    );
    var redmi = new mobile2_1.Mobile2(
      "Redmi",
      "R500",
      "Redmi",
      "64GB",
      "Rojo",
      true,
      5,
      1.2
    );
    var todos = [motorola, iphone, xiaomi, redmi];
    var miLibrary = new mobileLibrary_1.MobileLibrary(
      "Los Moviles",
      "De mi Familia",
      todos
    );
    console.log(miLibrary.getName());
    console.log(miLibrary.geLocation());
    console.log(miLibrary.getMobiles());
    console.log(miLibrary.getTotalPrice());
    console.log("------------------------------");
    miLibrary.printLibrary();
