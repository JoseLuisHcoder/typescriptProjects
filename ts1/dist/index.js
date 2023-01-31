"use strict";
let mensaje = "hello world";
mensaje = "pruena";
mensaje = "chao ";
console.log(mensaje);
function prueba(param) {
    return param;
}
let animales = ["oca", "vaca", "perro"];
let nums = [];
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extragrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const variable1 = Talla.Grande;
console.log(variable1);
const objeto = {
    id: 1,
    nombre: "pepito",
    talla: Talla.Grande,
    direccion: {
        numero: 12,
        calle: "",
        pais: "Bolivia"
    }
};
const arr = [];
//# sourceMappingURL=index.js.map