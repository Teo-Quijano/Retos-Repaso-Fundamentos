// Retos Repaso Fundamentos

    "use strict";
    exports.__esModule = true;
    var Punto_1 = require("./Punto");
    var punto = new Punto_1.Punto(7, 5);
    var punto2 = new Punto_1.Punto(8, 1);
    var punto3 = new Punto_1.Punto(3, 5);
    var punto4 = new Punto_1.Punto(-8, 2);
    var punto5 = new Punto_1.Punto(-1, -7);
    var punto6 = new Punto_1.Punto(5, -8);
    console.log(punto.distanciaAlOrigen());
    console.log(punto.calcularDistancia(punto2));
    console.log(punto.calcularCuadrante());
    console.log(
      punto6.calcularMasCercano([punto, punto2, punto3, punto4, punto5])
    );
