// Retos Repaso Fundamentos

import { Mobile2 } from "./mobile2";

let motorola: Mobile2 = new Mobile2(
  "Nokia3210",
  "3210",
  "Nokia",
  "128MB",
  "Negro",
  false,
  0,
  50
);

let iphone: Mobile2 = new Mobile2(
  "Iphone3g",
  "i3g",
  "Apple",
  "16GB",
  "Blanco",
  false,
  0,
  150
);

let redmi: Mobile2 = new Mobile2(
  "Redmi",
  "R500",
  "Redmi",
  "64GB",
  "Rojo",
  true,
  5,
  1.2
);

console.log(motorola);
console.log(iphone);
console.log(redmi);

motorola.is5G = true; // muestra un error porque se le han cambiado los atributos
iphone.cameraNumber = 4; // para poderlo hacer deberiamos llamar un metodo setter y getter

console.log(motorola);
console.log(iphone);
console.log(redmi);

let arr: Mobile2[] = [motorola, iphone, redmi];

for (let i = 0; i < arr.length; i++) {
  arr[i].print();
}