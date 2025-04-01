// bucles 
// while rectifica el código
/*for (let i = 0; i <= 10; i++) {
    console.log("con for " + i);
}
console.log("HOLA MUNDO!!!");

let contador = 1
while (contador <= 10) {
    console.log("con while " + contador);
    contador++;
}

let contador = 10
do {
    console.log("con while se va a imprimir una vez este bien o mal " + contador);
    contador++;
}
while (contador <= 10);
*/

/*let productos = ["leche", "huevo", "jugo", "refresco", "cereal", "detergente"];

        let lista = document.getElementById("lista");

        for (let i = 0; i <= productos.length; i++) {
            let item = document.createElement("li");
            item.textContent = productos[i];
            lista.appendChild(item);
        }*/

//Mostrar la tabla de multiplicar del 1 al 10
console.log("Tabla de multiplicar del 1");
for (let i = 1; i <= 10; i++) {
    console.log("1 x " + i + " = " + i);
}   

function calcular() {
    let op = prompt("Elige una operación: suma, resta, multiplicacion, division").toLowerCase();
    let num1 = parseFloat(prompt("Ingresa un número:"));
    let num2 = parseFloat(prompt("Ingresa otro número:"));
    let res;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }

    switch (op) {
        case "suma":
            res = num1 + num2;
            break;
        case "resta":
            res = num1 - num2;
            break;
        case "multiplicacion":
            res = num1 * num2;
            break;
        case "division":
            if (num2 === 0) {
                alert("No se puede dividir entre 0.");
                return;
            }
            res = num1 / num2;
            break;
        default:
            alert("Error.");
            return;
    }

    alert(`El resultado de la ${op} es: ${res}`);
}

calcular();

