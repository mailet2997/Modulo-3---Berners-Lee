
// 25. Encuentra el máximo valor en un array utilizando el método Math.max() con el operador de propagación (...).
const array = [3, 7, 2, 10];
const maximo = Math.max(...array);
console.log("Máximo valor:", maximo);

// 26. Verifica si una cadena comienza con una letra específica utilizando el método startsWith().
const cadena = "Hola mundo";
const letraEspecifica = "H";
const comienzaConLetraEspecifica = cadena.startsWith(letraEspecifica);
console.log("Comienza con la letra específica:", comienzaConLetraEspecifica);

// 27. Cuenta cuántas veces aparece una palabra específica en una cadena utilizando el método match() con una expresión regular.
const frase = "La vida es bella y la vida es corta";
const palabraEspecifica = "vida";
const conteoPalabraEspecifica = frase.match(new RegExp(palabraEspecifica, "gi")).length;
console.log("Número de veces que aparece la palabra específica:", conteoPalabraEspecifica);

// 28. Verifica si un número es un número entero utilizando el operador de igualdad estricta (===) con el método Number.isInteger().
const numero = 5.5;
const esEntero = Number.isInteger(numero);
console.log("Es un número entero:", esEntero);

// 29. Genera un número aleatorio entre 1 y 100 utilizando el método Math.random() y redondeo.
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log("Número aleatorio entre 1 y 100:", numeroAleatorio);

// 30. Cuenta cuántas palabras tienen al menos 5 caracteres en una cadena utilizando el método split() y un bucle for.
const cadenaPalabras = "Hola mundo, este es un ejemplo";
const palabras = cadenaPalabras.split(" ");
let conteoPalabras = 0;
for (const palabra of palabras) {
    if (palabra.length >= 5) {
        conteoPalabras++;
    }
}
console.log("Número de palabras con al menos 5 caracteres:", conteoPalabras);

// 31. Calcula el área de un círculo utilizando la fórmula A = πr² y el valor de π como una constante.
const radio = 5;
const areaCirculo = Math.PI * radio ** 2;
console.log("Área del círculo:", areaCirculo);

// 32. Concatena dos cadenas utilizando el operador + y muestra la longitud de la cadena resultante.
const cadena1 = "Hola";
const cadena2 = "mundo";
const cadenaConcatenada = cadena1 + " " + cadena2;
console.log("Cadena concatenada:", cadenaConcatenada);
console.log("Longitud de la cadena concatenada:", cadenaConcatenada.length);

// 33. Reemplaza todos los espacios en blanco en una cadena con guiones bajos utilizando el método replace() con una expresión regular.
const cadenaEspacios = "Hola mundo";
const cadenaConGuiones = cadenaEspacios.replace(/\s/g, "_");
console.log("Cadena con guiones en lugar de espacios:", cadenaConGuiones);

// 34. Calcula la raíz cuadrada de un número utilizando el método Math.sqrt().
const numeroRaiz = 25;
const raizCuadrada = Math.sqrt(numeroRaiz);
console.log("Raíz cuadrada:", raizCuadrada);

// 35. Encuentra el carácter en la posición media de una cadena utilizando la propiedad length y el operador de división entera (//).
const cadenaMedia = "Hola mundo";
const posicionMedia = Math.floor(cadenaMedia.length / 2);
const caracterMedia = cadenaMedia[posicionMedia];
console.log("Carácter en la posición media:", caracterMedia);

// 36. Verifica si un número es divisible por otro utilizando el operador de módulo (%) dentro de una declaración if.
const numeroDividendo = 10;
const numeroDivisor = 5;
if (numeroDividendo % numeroDivisor === 0) {
    console.log(numeroDividendo + " es divisible por " + numeroDivisor);
} else {
    console.log(numeroDividendo + " no es divisible por " + numeroDivisor);
}

// 37. Encuentra el número más grande en un array de números utilizando una declaración switch y el método Math.max() con el operador de propagación (...).
// const arrayNumeros = [3, 7, 2, 10];
// maximoArray; 
// switch (true) {
//     case arrayNumeros.length === 0:
//         maximoArray = undefined;
//         break;
//     default:
//         maximoArray = Math.max(...arrayNumeros);
//         break;
// }
// console.log("Número más grande:", maximoArray);
const arrayNumeros = [3, 7, 2, 10];
maximoArray;

if (arrayNumeros.length === 0) {
    maximoArray = undefined;
} else {
    maximoArray = Math.max(...arrayNumeros);
}

console.log("Número más grande:", maximoArray);


// 38. Calcula el resto de la división de dos números utilizando el operador de módulo (%).
const dividendo = 10;
const divisor = 3;
const restoDivision = dividendo % divisor;
console.log("Resto de la división:", restoDivision);

// 39. Cuenta cuántas veces aparece una letra específica en un array de palabras utilizando un bucle for anidado.
const letrasArray = ["a", "b", "c", "a", "d"];
const letraEspecificaArray = "a";
let conteoLetraEspecificaArray = 0;
for (const palabra of letrasArray) {
    for (const letra of palabra) {
        if (letra === letraEspecificaArray) {
            conteoLetraEspecificaArray++;
        }
    }
}
console.log("Número de veces que aparece la letra específica en el array de palabras:", conteoLetraEspecificaArray);

// 40. Encuentra el primer número par en un array de números utilizando un bucle for y una declaración if.
const arrayNumerosPares = [1, 3, 5, 6, 7, 8];
let primerNumeroPar;
for (const numero of arrayNumerosPares) {
    if (numero % 2 === 0) {
        primerNumeroPar = numero;
        break;
    }
}
console.log("Primer número par:", primerNumeroPar);

// 41. Verifica si un año ingresado por el usuario es un año bisiesto utilizando una declaración if-else y operadores de comparación.
const anio = 2024;
let esBisiesto;
if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    esBisiesto = true;
} else {
    esBisiesto = false;
}
console.log("El año " + anio + (esBisiesto ? " es" : " no es") + " bisiesto");

// 42. Genera una cadena de caracteres aleatorios de longitud especificada utilizando un bucle for y el método Math.random().
const longitudCadena = 10;
let cadenaAleatoria = "";
for (let i = 0; i < longitudCadena; i++) {
    const caracterAleatorio = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    cadenaAleatoria += caracterAleatorio;
}
console.log("Cadena aleatoria:", cadenaAleatoria);

// 43. Verifica si una cadena contiene solo números utilizando una expresión regular y el método test().
const cadenaNumeros = "12345";
const contieneSoloNumeros = /^\d+$/.test(cadenaNumeros);
console.log("La cadena contiene solo números:", contieneSoloNumeros);

// 44. Calcula el área de un rectángulo utilizando el método parseFloat() para obtener las dimensiones del usuario.
const largoRectangulo = parseFloat(prompt("Ingrese el largo del rectángulo:"));
const anchoRectangulo = parseFloat(prompt("Ingrese el ancho del rectángulo:"));
const areaRectangulo = largoRectangulo * anchoRectangulo;
console.log("Área del rectángulo:", areaRectangulo);

// 45. Cuenta cuántas veces aparece un número específico en un array utilizando el método filter() y la propiedad length.
const arrayNumerosEspecífico = [1, 2, 3, 4, 5, 3, 6, 7, 3];
const numeroEspecifico = 3;
const conteoNumeroEspecifico = arrayNumerosEspecífico.filter(num => num === numeroEspecifico).length;
console.log("Número de veces que aparece el número específico en el array:", conteoNumeroEspecifico);

// 46. Ordena un array de palabras en orden alfabético inverso utilizando el método sort() con una función de comparación personalizada.
const arrayPalabras = ["manzana", "banana", "pera", "uva"];
arrayPalabras.sort((a, b) => b.localeCompare(a));
console.log("Array de palabras en orden alfabético inverso:", arrayPalabras);

// 47. Calcula el número de días entre dos fechas utilizando el objeto Date.
const fecha1 = new Date("2024-04-01");
const fecha2 = new Date("2024-04-10");
const milisegundosPorDia = 1000 * 60 * 60 * 24;
const diferenciaDias = Math.abs(fecha2 - fecha1) / milisegundosPorDia;
console.log("Número de días entre las fechas:", diferenciaDias);

// 48. Encuentra el número más pequeño y el número más grande en un array de números utilizando una declaración if-else y un bucle for.
const arrayNumerosMinMax = [3, 7, 2, 10];
let minimoArray, maximoArray;
for (const numero of arrayNumerosMinMax) {
    if (minimoArray === undefined || numero < minimoArray) {
        minimoArray = numero;
    }
    if (maximoArray === undefined || numero > maximoArray) {
        maximoArray = numero;
    }
}
console.log("Número más pequeño:", minimoArray);
console.log("Número más grande:", maximoArray);

// 49. Genera una cadena de texto con un patrón específico utilizando una plantilla de cadena y un bucle for.
const repeticionesPatron = 5;
let cadenaPatron = "";
for (let i = 0; i < repeticionesPatron; i++) {
    cadenaPatron = `Patrón-${i + 1} `;
}
console.log("Cadena con patrón específico:", cadenaPatron);

// 50. Verifica si un número ingresado por el usuario es un número primo utilizando un bucle for y una declaración if con operadores de módulo.
const numeroPrimo = parseInt(prompt("Ingrese un número para verificar si es primo:"));
let esPrimo = true;
if (numeroPrimo <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
        if (numeroPrimo % i === 0) {
            esPrimo = false;
            break;
        }
    }
}
console.log(numeroPrimo + (esPrimo ? " es" : " no es") + " primo");

