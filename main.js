/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

let distancia;
let tarifa;
boton.addEventListener("click", () => {
if (registrada = true) {
  if (distancia <= 3) {
    tarifa = 715,24

  } else if (distancia > 3 && distancia <= 6) {
     tarifa = 794,74

  } else if (distancia > 6 && distancia <= 12) {
    tarifa = 855,97

 } else if (distancia > 12 && distancia <= 27) {
  tarifa = 917,24
6
} else if (registrada = false && distancia <= 3) {
  tarifa = 1137,23

} else if (registrada = false && distancia > 3 && distancia <= 6) {
  tarifa = 1263,64

} else if (registrada = false && distancia > 6 && distancia <= 12) {
 tarifa = 1360,99

} else if (registrada = false && distancia > 12 && distancia <= 27) {
tarifa = 1458,41
  
  
}

  // COMPLETAR
});
