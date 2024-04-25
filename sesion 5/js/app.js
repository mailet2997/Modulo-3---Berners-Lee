
// 1. Verifica si un número es positivo, negativo o cero utilizando una declaración if.
let numero = 10;
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// 2. Calcula el área de un triángulo con la fórmula A = (base * altura) / 2.
let base = 5;
let altura = 8;
let areaTriangulo = (base * altura) / 2;
console.log("El área del triángulo es: " + areaTriangulo);

// 3. Comprueba si un número es par o impar utilizando una declaración if.
let num = 7;
if (num % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}

// 4. Convierte una cadena en minúsculas utilizando el método `toLowerCase()` y luego verifica si contiene la letra 'a'.
let cadena = "Hola Mundo";
let cadenaMinusculas = cadena.toLowerCase();
if (cadenaMinusculas.includes('a')) {
    console.log("La cadena contiene la letra 'a'.");
} else {
    console.log("La cadena no contiene la letra 'a'.");
}

// 5. Encuentra el máximo de tres números utilizando una declaración if-else.
let num1 = 10, num2 = 20, num3 = 15;
let maximo = num1;
if (num2 > maximo) {
    maximo = num2;
}
if (num3 > maximo) {
    maximo = num3;
}
console.log("El máximo de los tres números es: " + maximo);


// 6. Verifica si un año es bisiesto o no (si es divisible por 4 y no por 100, o si es divisible por 400).
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("El año es bisiesto.");
} else {
    console.log("El año no es bisiesto.");
}

// 7. Comprueba si una cadena contiene al menos 5 caracteres utilizando una declaración if.
let texto = "Hola Mundo";
if (texto.length >= 5) {
    console.log("La cadena tiene al menos 5 caracteres.");
} else {
    console.log("La cadena no tiene al menos 5 caracteres.");
}

// 8. Calcula la suma de los números del 1 al 100 utilizando un bucle for.
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log("La suma de los números del 1 al 100 es: " + suma);

// 9. Encuentra el mínimo común múltiplo (mcm) de dos números utilizando un bucle while.
let numA = 6, numB = 8;
let mcm = (numA * numB) / mcd(numA, numB); // Utiliza la función mcd definida más abajo
console.log("El mínimo común múltiplo de " + numA + " y " + numB + " es: " + mcm);

function mcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 10. Reemplaza todas las ocurrencias de una letra en una cadena utilizando el método `replace()`.
let cadenaReemplazo = "banana";
let letra = "a";
let cadenaReemplazada = cadenaReemplazo.replace(new RegExp(letra, 'g'), 'x');
console.log("La cadena reemplazada es: " + cadenaReemplazada);

// 11. Comprueba si una cadena es un palíndromo (se lee igual de adelante hacia atrás que de atrás hacia adelante).
let palabra = "reconocer";
let esPalindromo = true;
for (let i = 0; i < palabra.length / 2; i++) {
    if (palabra[i] !== palabra[palabra.length - 1 - i]) {
        esPalindromo = false;
        break;
    }
}
if (esPalindromo) {
    console.log("La palabra es un palíndromo.");
} else {
    console.log("La palabra no es un palíndromo.");
}

// 12. Encuentra el factorial de un número utilizando un bucle for.
let numeroFactorial = 5;
let factorial = 1;
for (let i = 1; i <= numeroFactorial; i++) {
    factorial *= i;
}
console.log("El factorial de " + numeroFactorial + " es: " + factorial);

// 13. Convierte un número decimal en binario utilizando un bucle while y el operador `%`.
let decimal = 43.26;
let binario = "";
while (decimal > 0) {
    binario = (decimal % 2) + binario;
    decimal = Math.floor(decimal / 2);
}
console.log("El número binario es: " + binario);

// 14. Separa una cadena en palabras utilizando el método `split()` y cuenta cuántas palabras contiene.
let frase = "Esto es una frase de ejemplo";
let palabras = frase.split(" ");
console.log("La frase tiene " + palabras.length + " palabras.");

// 15. Encuentra la longitud de la hipotenusa de un triángulo rectángulo utilizando el teorema de Pitágoras.
let cateto1 = 3, cateto2 = 4;
let hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2);
console.log("La longitud de la hipotenusa es: " + hipotenusa);

// 16. Comprueba si un número es primo o no utilizando un bucle for y operadores de módulo.
let numPrimo = 13;
let esPrimo = true;
for (let i = 2; i < numPrimo; i++) {
    if (numPrimo % i === 0) {
        esPrimo = false;
        break;
    }
}
if (esPrimo) {
    console.log("El número es primo.");
} else {
    console.log("El número no es primo.");
}

// 17. Cuenta cuántas veces aparece una letra específica en una cadena utilizando un bucle for.
let textoLetra = "reconocer";
let letraContar = "r";
let contador = 0;
for (let i = 0; i < textoLetra.length; i++) {
    if (textoLetra[i] === letraContar) {
        contador++;
    }
}
console.log("La letra '" + letraContar + "' aparece " + contador + " veces.");

// 18. Calcula la suma de los dígitos de un número utilizando un bucle while y operadores de división y módulo.
let numeroSumaDigitos = 1234;
let sumaDigitos = 0;
while (numeroSumaDigitos > 0) {
    sumaDigitos +=  numeroSumaDigitos % 10;
    numeroSumaDigitos = Math.floor(numeroSumaDigitos / 10);
}
console.log("La suma de los dígitos del número es: " + sumaDigitos);
console.log("maiu maiu", sumaDigitos+= numeroSumaDigitos)

// 19. Convierte una cadena en un array de caracteres utilizando el método `split('')`.
let cadenaArray = "Hola Mundo";
let arrayCaracteres = cadenaArray.split('');
console.log("El array de caracteres es: " + arrayCaracteres);

// 20. Verifica si una cadena contiene solo caracteres alfabéticos utilizando una expresión regular y el método `test()`.
let cadenaAlfabetica = "HolaMundo";
let esAlfabetica = /^[a-zA-Z]+$/.test(cadenaAlfabetica);
console.log("La cadena contiene solo caracteres alfabéticos: " + esAlfabetica);

// 21. Encuentra el cuadrado de un número utilizando el operador de exponenciación (`**`).
let numeroCuadrado = 5;
let cuadrado = numeroCuadrado ** 2;
console.log("El cuadrado del número es: " + cuadrado);

// 22. Cuenta cuántas vocales hay en una cadena utilizando un bucle for y una declaración switch.
let cadenaVocales = "Murciélago";
let contadorVocales = 0;
for (let i = 0; i < cadenaVocales.length; i++) {
    switch (cadenaVocales[i].toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            contadorVocales++;
            break;
    }
}
console.log("La cadena tiene " + contadorVocales + " vocales.");

// 23. Ordena un array de números de menor a mayor utilizando el método `sort()`.
let arrayNumeros = [5, 2, 9, 1, 7];
arrayNumeros.sort((a, b) => a - b);
console.log("El array ordenado es: " + arrayNumeros);

// 24. Calcula el promedio de un array de números utilizando un bucle for y la propiedad `length`.
let arrayPromedio = [10, 15, 20, 25, 30];
let sumaPromedio = 0;
for (let i = 0; i < arrayPromedio.length; i++) {
    sumaPromedio += arrayPromedio[i];
}
let promedio = sumaPromedio / arrayPromedio.length;
console.log("El promedio del array es: " + promedio);

//se petaquio












// 25. Cuenta cuántos números pares hay en un array utilizando un bucle for y el operador `%`.
let arrayPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contadorPares = 0;
for (let i = 0; i < arrayPares.length; i++) {
    if (arrayPares[i] % 2 === 0) {
        contadorPares++;
    }
}
console.log("El array tiene " + contadorPares + " números pares.");

// 26. Verifica si un año es bisiesto utilizando una expresión regular y el método `test()`.
let anoBisiesto = 2024;
let esBisiesto = /(^|\s)([2468][048]|[13579][26])00\s|(^|\s)(\d{2}([2468][048]|[13579][26])|[2468][048]|[13579][26])\s/.test(anoBisiesto);
console.log("El año es bisiesto: " + esBisiesto);

// 27. Capitaliza la primera letra de cada palabra en una frase utilizando el método `map()` y el método `charAt()`.
let fraseCapitalizada = "hola mundo";
let palabrasCapitalizadas = fraseCapitalizada.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log("La frase capitalizada es: " + palabrasCapitalizadas);

// 28. Encuentra el máximo común divisor (mcd) de dos números utilizando el algoritmo de Euclides.
let numA28 = 24, numB28 = 36;
let mcd28 = gcd(numA28, numB28);
console.log("El máximo común divisor de " + numA28 + " y " + numB28 + " es: " + mcd28);

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// 29. Crea una función que calcule el área de un círculo utilizando el método `Math.PI`.
function calcularAreaCirculo(radio) {
    return Math.PI * radio ** 2;
}
console.log("El área del círculo es: " + calcularAreaCirculo(5));

// 30. Cuenta cuántas veces aparece una palabra específica en una frase utilizando el método `split()` y `filter()`.
let frasePalabra = "Hola mundo, hola stackoverflow, mundo mundo";
let palabraBuscar = "mundo";
let contadorPalabra = frasePalabra.split(' ').filter(word => word === palabraBuscar).length;
console.log("La palabra '" + palabraBuscar + "' aparece " + contadorPalabra + " veces.");

// 31. Convierte una cadena en mayúsculas utilizando el método `toUpperCase()`.
let cadenaMayusculas = "hola mundo";
console.log("La cadena en mayúsculas es: " + cadenaMayusculas.toUpperCase());

// 32. Invierte una cadena utilizando el método `split()`, `reverse()` y `join()`.
let cadenaInvertida = "hola mundo";
console.log("La cadena invertida es: " + cadenaInvertida.split('').reverse().join(''));

// 33. Calcula la raíz cuadrada de un número utilizando el método `Math.sqrt()`.
let numeroRaiz = 16;
console.log("La raíz cuadrada de " + numeroRaiz + " es: " + Math.sqrt(numeroRaiz));

// 34. Ordena un array de cadenas alfabéticamente utilizando el método `sort()`.
let arrayCadenas = ["perro", "gato", "elefante", "ratón"];
console.log("El array de cadenas ordenado es: " + arrayCadenas.sort());

// 35. Encuentra el valor absoluto de un número utilizando el método `Math.abs()`.
let numeroAbsoluto = -10;
console.log("El valor absoluto de " + numeroAbsoluto + " es: " + Math.abs(numeroAbsoluto));

// 36. Concatena dos cadenas utilizando el operador `+`.
let cadenaConcatenada = "Hola" + " Mundo";
console.log("La cadena concatenada es: " + cadenaConcatenada);

// 37. Encuentra el índice de la primera aparición de una subcadena en una cadena utilizando el método `indexOf()`.
let cadenaIndex = "hola mundo";
let subcadenaIndex = "mundo";
console.log("El índice de la subcadena es: " + cadenaIndex.indexOf(subcadenaIndex));

// 38. Comprueba si una cadena comienza con una subcadena específica utilizando el método `startsWith()`.
let cadenaInicio = "hola mundo";
let subcadenaInicio = "hola";
console.log("La cadena comienza con la subcadena: " + cadenaInicio.startsWith(subcadenaInicio));

// 39. Comprueba si una cadena termina con una subcadena específica utilizando el método `endsWith()`.
let cadenaFin = "hola mundo";
let subcadenaFin = "mundo";
console.log("La cadena termina con la subcadena: " + cadenaFin.endsWith(subcadenaFin));

// 40. Reemplaza la primera ocurrencia de una subcadena en una cadena utilizando el método `replace()`.
let cadenaReemplazo1 = "hola mundo";
let subcadenaReemplazo1 = "mundo";
let nuevaSubcadena = "StackOverflow";
let cadenaReemplazada1 = cadenaReemplazo1.replace(subcadenaReemplazo1, nuevaSubcadena);
console.log("La cadena reemplazada es: " + cadenaReemplazada1);

// 41. Encuentra el número más grande en un array utilizando el método `Math.max()` y el operador de propagación (`...`).
let arrayMax = [5, 10, 15, 20];
console.log("El número más grande en el array es: " + Math.max(...arrayMax));

// 42. Encuentra el número más pequeño en un array utilizando el método `Math.min()` y el operador de propagación (`...`).
let arrayMin = [25, 30, 35, 40];
console.log("El número más pequeño en el array es: " + Math.min(...arrayMin));

// 43. Comprueba si un número es finito utilizando el método `isFinite()`.
let numeroFinito = 10;
console.log("El número es finito: " + isFinite(numeroFinito));

// 44. Comprueba si un valor es un array utilizando el método `Array.isArray()`.
let valorArray = [1, 2, 3];
console.log("El valor es un array: " + Array.isArray(valorArray));

// 45. Encuentra la longitud de una cadena utilizando la propiedad `length`.
let cadenaLongitud = "Hola Mundo";
console.log("La longitud de la cadena es: " + cadenaLongitud.length);

// 46. Calcula la potencia de un número utilizando el método `Math.pow()`.
let basePotencia = 2, exponentePotencia = 3;
console.log("El resultado de la potencia es: " + Math.pow(basePotencia, exponentePotencia));

// 47. Encuentra el último índice de una subcadena en una cadena utilizando el método `lastIndexOf()`.
let cadenaUltimoIndex = "hola mundo, mundo";
let subcadenaUltimoIndex = "mundo";
console.log("El último índice de la subcadena es: " + cadenaUltimoIndex.lastIndexOf(subcadenaUltimoIndex));

// 48. Divide una cadena en un array de substrings utilizando el método `split()`.
let cadenaSplit = "Hola Mundo";
let arraySplit = cadenaSplit.split(' ');
console.log("El array de substrings es: " + arraySplit);

// 49. Invierte el orden de los elementos en un array utilizando el método `reverse()`.
let arrayInvertido = [1, 2, 3, 4, 5];
arrayInvertido.reverse();
console.log("El array invertido es: " + arrayInvertido);

// 50. Verifica si un objeto tiene una propiedad específica utilizando el operador `in`.
let objetoPropiedad = {nombre: "John", edad: 30};
console.log("La propiedad 'nombre' está en el objeto: " + ('nombre' in objetoPropiedad));
