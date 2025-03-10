"use strict"; //modo estricto para elegir las variables
const prompt = require('prompt-sync')();
let nombre = "Ana López"; //variable
const pi = 3.1416; //constante
var ciudad = "CDMX";  //variable

//console.log(nombre, pi, ciudad);

let texto = "los gatos son los mejores";
let numero = 12;
let numero2 = 1;
let bool = true;

//console.log(typeof texto, typeof numero, typeof bool);

//let nombre2 = prompt("¿Cómo te llamas? ");

//alert("Bienvenida(o)  " + nombre2)
//console.log("Bienvenida(o)  " + nombre2);


/*
let num = prompt("Ingresa tu calificacion: ");
if (num>= 90) {
    console.log("ya pasaste facil");
} else if (num>=60 || num>=60) {
    console.log("pasaste")
} else {
    console.log("reprobaste")
}


let usuario = prompt ("Ingresa un usuario: ");
let clave = prompt ("Ingresa la contraseña: ");

if (usuario === "admin" && clave ==="12345") {
    console.log("Acceso permitido");
} else {
    console.log("nel prro");
}


let dia = prompt ("ingrese un dia: ");

switch (dia.toLowerCase()) {
    case "lunes":
        console.log("inicio de semana");
        break;
    case"martes":
        console.log("mhe martes");
        break;
    case"miercoles":
        console.log("mitad de semana");
        break;
    case"jueves":
        console.log("dias que no me interesan");
         break;
    case"viernes":
        console.log("al fin viernes");
        break;
    case"sabado":
        console.log("ahora si viene lo chido");
        break;
    default:
        console.log("parametro no permitido");
        break;
}
*/

// Un número es PAR cuando al hacer una operación AND a nivel de bits con 1, regresa 0
// Un número es IMPAR cuando al hacer una operación AND a nivel de bits con 1, regresa 1
let num = prompt("Ingresa un número: ");
if (num & 1) {
    console.log("El número es Impar");
} else {  
    console.log("El número es Par");
}