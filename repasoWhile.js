// Retos Repaso Fundamentos

    function siContienePares(entrada) {
      var encontrado = false;
      var i = 0;
      while (i < entrada.length && !encontrado) {
        if (entrada[i] % 2 == 0) {
          encontrado = true;
        }
        i++;
      }
      return encontrado;
    }
    function todosComienzanConM(entrada) {
      var encontrado = false;
      var i = 0;
      while (i < entrada.length && !encontrado) {
        if (entrada[i].charAt(0).toLowerCase() == "m") {
          encontrado = true;
        }
        i++;
      }
      return encontrado;
    }