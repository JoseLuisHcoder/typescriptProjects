let mensaje: string = "hello world";
mensaje = "pruena";

mensaje = "chao ";

console.log(mensaje);





function prueba (param:any) {
    return param
}

let animales: string[] = ["oca", "vaca", "perro"]

let nums: number[] = []

const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

//*PascalCase
enum Talla {Chica = "s", Mediana = "m", Grande = "l", ExtraGrande = "xl"}

const variable1 = Talla.Grande
console.log(variable1);

type Direccion = {
    numero: number,
    calle:string,
    pais:string
 }

type Persona = {
    readonly id: number,
     nombre: string,
     talla: Talla,
     direccion: Direccion
 }

const objeto: Persona = {
    id: 1,
    nombre: "pepito",
    talla: Talla.Grande,
    direccion: {
        numero: 12 ,
        calle: "latina",
        pais: "Bolivia"
    }
}

const arr: Persona[] = []
