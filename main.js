/*
ACTUALIZADO A ABRIL DEL 2026

Distancia   | Con SUBE registrada | Con SUBE sin registrar
0-3 km      | $715.24             | $1137.23
3-6 km      | $794.74             | $1263.64
6-12 km     | $855.97             | $1360.99
12-27 km    | $917.24             | $1458.41
*/

const boton = document.getElementById("boton");
const resultado = document.getElementById("tarifa");

boton.addEventListener("click", () => {

  const distancia =
    Number(document.getElementById("distancia").value);

  const registrada =
    document.getElementById("registrada").value;

  const zona =
    document.getElementById("Zona").value;

  let tarifa = 0;

  if (zona === "caba") {

    if (registrada === "si") {

      if (distancia <= 3) {
        tarifa = 753.74;

      } else if (distancia <= 6) {
        tarifa = 837.52;

      } else if (distancia <= 12) {
        tarifa = 902.04;

      } else {
        tarifa = 966.61;
      }

    } else if (registrada === "social") {

      if (distancia <= 3) {
        tarifa = 339.18;

      } else if (distancia <= 6) {
        tarifa = 376.88;

      } else if (distancia <= 12) {
        tarifa = 405.91;

      } else {
        tarifa = 434.97;
      }

    } else if (registrada === "no") {

      if (distancia <= 3) {
        tarifa = 1198.45;

      } else if (distancia <= 6) {
        tarifa = 1331.66;

      } else if (distancia <= 12) {
        tarifa = 1434.24;

      } else {
        tarifa = 1536.91;
      }

    }

  } else if (zona === "provincia") {

    if (registrada === "si") {

      if (distancia <= 3) {
        tarifa = 968.57;

      } else if (distancia <= 6) {
        tarifa = 1089.64;

      } else if (distancia <= 12) {
        tarifa = 1210.71;

      } else if (distancia <= 27) {
        tarifa = 1452.85;

      } else {
        tarifa = 1708.07;
      }

    } else if (registrada === "social") {

      if (distancia <= 3) {
        tarifa = 435.85;

      } else if (distancia <= 6) {
        tarifa = 490.33;

      } else if (distancia <= 12) {
        tarifa = 544.81;

      } else if (distancia <= 27) {
        tarifa = 653.78;

      } else {
        tarifa = 768.63;
      }

    } else if (registrada === "no") {

      if (distancia <= 3) {
        tarifa = 1937.14;

      } else if (distancia <= 6) {
        tarifa = 2179.28;

      } else if (distancia <= 12) {
        tarifa = 2421.42;

      } else if (distancia <= 27) {
        tarifa = 2905.70;

      } else {
        tarifa = 3416.14;
      }

    }

  } else if (zona === "nacional") {

    if (registrada === "si") {

      if (distancia <= 3) {
        tarifa = 700.00;

      } else if (distancia <= 6) {
        tarifa = 779.78;

      } else if (distancia <= 12) {
        tarifa = 839.86;

      } else if (distancia <= 27) {
        tarifa = 899.99;

      } else {
        tarifa = 959.71;
      }

    } else if (registrada === "social") {

      if (distancia <= 3) {
        tarifa = 315.00;

      } else if (distancia <= 6) {
        tarifa = 350.90;

      } else if (distancia <= 12) {
        tarifa = 377.93;

      } else if (distancia <= 27) {
        tarifa = 404.99;

      } else {
        tarifa = 431.86;
      }

    } else if (registrada === "no") {

      if (distancia <= 3) {
        tarifa = 1113.00;

      } else if (distancia <= 6) {
        tarifa = 1239.85;

      } else if (distancia <= 12) {
        tarifa = 1335.38;

      } else if (distancia <= 27) {
        tarifa = 1430.98;

      } else {
        tarifa = 1525.94;
      }

    }

  }

  resultado.textContent =
    `Tarifa: $${tarifa.toFixed(2)}`;

});