// Ejercicio 1
const numeros = [10, 20, 30, 40, 50];
console.log(numeros[2]);

// Ejercicio 2
const frutas = ['manzana', 'banana', 'naranja'];
console.log(frutas.length);

// Ejercicio 3
const colores = ['rojo', 'verde', 'azul'];
console.log(colores.at(1));

// Ejercicio 4
const numeros1 = [1, 2, 3];
numeros1.push(4);
console.log(numeros1);

// Ejercicio 5
const letras = ['a', 'b', 'c'];
letras.pop();
console.log(letras);

// Ejercicio 6
const dias = ['martes', 'miércoles', 'jueves'];
dias.unshift('lunes');
console.log(dias);

// Ejercicio 7
const meses = ['febrero', 'marzo', 'abril'];
meses.shift();
console.log(meses);

// Ejercicio 8
const set = new Set(['a', 'b', 'c']);
const arrayFromSet = Array.from(set);
console.log(arrayFromSet);

// Ejercicio 9
const map = new Map([[1, 'uno'], [2, 'dos'], [3, 'tres']]);
const arrayFromMap = Array.from(map.values());
console.log(arrayFromMap);

// Ejercicio 10
const numeros2 = [4, 5, 6];
const numerosConcatenados = numeros1.concat(numeros2);
console.log(numerosConcatenados);

// Ejercicio 11
const palabras = ['Hola', 'Mundo', '!'];
const frase = palabras.join(' ');
console.log(frase);

// Ejercicio 12
const frase2 = 'Esto es una frase';
const palabras2 = frase2.split(' ');
console.log(palabras2);

// Ejercicio 13
const numeros3 = [1, 2, 3, 4, 5];
console.log(numeros3.includes(3));

// Ejercicio 14
const colores2 = ['rojo', 'verde', 'azul'];
console.log(colores2.indexOf('verde'));

// Ejercicio 15
const letras2 = ['a', 'b', 'a', 'c', 'a'];
console.log(letras2.lastIndexOf('a'));

// Ejercicio 16
frutas.push('pera');
console.log(frutas);

// Ejercicio 17
frutas.shift();
console.log(frutas);

// Ejercicio 18
const numeros4 = [1, 2, 3, 4, 5];
let suma = 0;
for (let num of numeros4) {
  suma += num;
}
console.log(suma);

// Ejercicio 19
const palabras3 = ['Hola', 'Mundo', '!'];
const frase3 = palabras3.join(' ');
console.log(frase3);

// Ejercicio 20
const numeros5 = [1, 2, 3, 4, 5];
const maximo = numeros5.reduce((max, num) => num > max ? num : max);
console.log(maximo);

// Ejercicio 21
console.log(frutas[2]);

// Ejercicio 22
console.log(edades.length);

// Ejercicio 23
const palabras4 = ['Hola', 'Mundo', '!'];
console.log(palabras4[palabras4.length - 1]);

// Ejercicio 24
numeros1.pop();
console.log(numeros1);

// Ejercicio 25
console.log(numeros1);

// Ejercicio 26
console.log(dias);

// Ejercicio 27
console.log(arrayFromSet);

// Ejercicio 28
console.log(arrayFromMap);

// Ejercicio 29
const strings1 = ['Hola', 'Mundo'];
const strings2 = ['!', 'Adiós'];
const stringsConcat = strings1 + strings2;
console.log(stringsConcat);

// Ejercicio 30
console.log(palabras3.join(' - '));

// Ejercicio 31
console.log(frase2.split(' '));

// Ejercicio 32
console.log(letras2.includes('a'));

// Ejercicio 33
console.log(numeros3.indexOf(5));

// Ejercicio 34
console.log(colores2.lastIndexOf('rojo'));

// Ejercicio 35
frutas.push('uva', 'kiwi');
console.log(frutas);

// Ejercicio 36
frutas.shift();
frutas.pop();
console.log(frutas);

// Ejercicio 37
const palabrasMayusculas = palabras3.map(palabra => palabra.toUpperCase());
console.log(palabrasMayusculas);

// Ejercicio 38
const suma2 = numeros4.reduce((acc, curr) => acc + curr);
console.log(suma2);

// Ejercicio 39
const booleanos = [true, true, true];
console.log(booleanos.every(Boolean));

// Ejercicio 40
console.log(frutas.some(fruta => fruta === 'manzana'));
