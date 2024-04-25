// Ejercicios con forEach

const numeros = [1, 2, 3, 4, 5];
const nombres = ["Juan", "María", "Carlos", "Ana"];
const temperaturasCelsius = [0, 10, 20, 30, 40];
const palabras = ["hola", "mundo", "javascript"];

// Ejercicio 1: Sumar todos los elementos de un array de números.
let suma = 0;
numeros.forEach(numero => {
    suma += numero;
});
console.log("Suma de los números:", suma);

// Ejercicio 2: Imprimir cada elemento de un array de strings en mayúsculas.
nombres.forEach(nombre => {
    console.log(nombre.toUpperCase());
});

// Ejercicio 3: Calcular el cuadrado de cada número en un array y mostrar los resultados.
const cuadrados = [];
numeros.forEach(numero => {
    cuadrados.push(numero * numero);
});
console.log("Cuadrados de los números:", cuadrados);

// Ejercicio 4: Contar la cantidad de elementos pares en un array de números.
let cantidadPares = 0;
numeros.forEach(numero => {
    if (numero % 2 === 0) {
        cantidadPares++;
    }
});
console.log("Cantidad de números pares:", cantidadPares);

// Ejercicio 5: Multiplicar cada elemento de un array de números por 2 y mostrar los resultados.
const multiplicadosPorDos = [];
numeros.forEach(numero => {
    multiplicadosPorDos.push(numero * 2);
});
console.log("Números multiplicados por dos:", multiplicadosPorDos);

// Ejercicio 6: Concatenar "Hola, " a cada elemento de un array de nombres.
const saludos = [];
nombres.forEach(nombre => {
    saludos.push("Hola, " + nombre);
});
console.log("Saludos:", saludos);

// Ejercicio 7: Encontrar el elemento más grande en un array de números.
let maximo = numeros[0];
numeros.forEach(numero => {
    if (numero > maximo) {
        maximo = numero;
    }
});
console.log("Número más grande:", maximo);

// Ejercicio 8: Filtrar los números negativos de un array y mostrar los resultados.
const numerosPositivos = [];
numeros.forEach(numero => {
    if (numero >= 0) {
        numerosPositivos.push(numero);
    }
});
console.log("Números positivos:", numerosPositivos);

// Ejercicio 9: Convertir un array de temperaturas en grados Celsius a grados Fahrenheit.
const temperaturasFahrenheit = [];
temperaturasCelsius.forEach(temperatura => {
    temperaturasFahrenheit.push((temperatura * 9 / 5) + 32);
});
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);

// Ejercicio 10: Contar la cantidad de veces que aparece una letra específica en un array de palabras.
const letraBuscada = "o";
let conteoLetra = 0;
palabras.forEach(palabra => {
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letraBuscada) {
            conteoLetra++;
        }
    }
});
console.log("Cantidad de veces que aparece la letra 'o':", conteoLetra);

// Ejercicio 11: Crear un nuevo array con la longitud de cada string en un array de palabras.
const longitudes = [];
palabras.forEach(palabra => {
    longitudes.push(palabra.length);
});
console.log("Longitudes de las palabras:", longitudes);

// Ejercicio 12: Reemplazar cada string en un array con su versión en mayúsculas.
const palabrasMayusculas = [];
palabras.forEach(palabra => {
    palabrasMayusculas.push(palabra.toUpperCase());
});
console.log("Palabras en mayúsculas:", palabrasMayusculas);

// Ejercicio 13: Eliminar los elementos duplicados de un array.
const arraySinDuplicados = [];
numeros.forEach(numero => {
    if (!arraySinDuplicados.includes(numero)) {
        arraySinDuplicados.push(numero);
    }
});
console.log("Array sin duplicados:", arraySinDuplicados);

// Ejercicio 14: Imprimir la tabla de multiplicar del 5.
const tablaMultiplicar5 = [];
for (let i = 1; i <= 10; i++) {
    tablaMultiplicar5.push(i * 5);
}
console.log("Tabla de multiplicar del 5:", tablaMultiplicar5);

// Ejercicio 15: Encontrar la suma de los dígitos de cada número en un array de números.
const sumasDigitos = [];
numeros.forEach(numero => {
    let sumaDigitos = 0;
    const digitos = String(numero).split('').map(Number);
    digitos.forEach(digito => {
        sumaDigitos += digito;
    });
    sumasDigitos.push(sumaDigitos);
});
console.log("Suma de los dígitos de cada número:", sumasDigitos);

// Ejercicio 16: Verificar si todos los elementos de un array son mayores que cierto valor.
const valorLimite = 3;
let todosMayores = true;
numeros.forEach(numero => {
    if (numero <= valorLimite) {
        todosMayores = false;
    }
});
console.log("¿Todos los números son mayores que", valorLimite + "?", todosMayores ? "Sí" : "No");

// Ejercicio 17: Calcular el producto de todos los elementos en un array de números.
let producto = 1;
numeros.forEach(numero => {
    producto *= numero;
});
console.log("Producto de los números:", producto);

// Ejercicio 18: Ordenar un array de números de menor a mayor.
const numerosOrdenados = [];
numeros.forEach(numero => {
    numerosOrdenados.push(numero);
});
numerosOrdenados.sort((a, b) => a - b);
console.log("Números ordenados:", numerosOrdenados);

// Ejercicio 19: Imprimir la fecha actual para cada elemento en un array de nombres de meses.
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
meses.forEach(mes => {
    const fecha = new Date();
    console.log(mes + ":", fecha.toLocaleDateString());
});

// Ejercicio 20: Crear un nuevo array con el doble de longitud de otro array, donde cada elemento del nuevo array es el doble del elemento correspondiente del array original.
const dobleLongitud = [];
numeros.forEach(numero => {
    dobleLongitud.push(numero);
    dobleLongitud.push(numero * 2);
});
console.log("Nuevo array con el doble de longitud:", dobleLongitud);

