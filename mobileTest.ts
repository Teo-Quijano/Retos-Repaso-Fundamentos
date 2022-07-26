// Retos Repaso Fundamentos

    import { Mobile } from "./Mobile";

    let motorola: Mobile = new Mobile(
      "Motorola",
      "G41",
      "Motorola",
      "128MB",
      "Azul",
      false,
      0,
      50
    );

    let iphone: Mobile = new Mobile(
      "Iphone 13",
      "i13",
      "Apple",
      "128GB",
      "Negro",
      false,
      0,
      150
    );

    let xiaomi: Mobile = new Mobile(
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
      