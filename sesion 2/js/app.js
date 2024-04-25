// Ejercicio 1: Concatena dos cadenas usando el operador +.
const cadena1 = "Hola";
const cadena2 = " mundo";
const resultado1 = cadena1 + cadena2;
console.log(resultado1);

// Ejercicio 2: Divide una cadena en un array usando el método split() y luego accede al segundo elemento del array.
const cadena2_1 = "Esto es una cadena";
const array2 = cadena2_1.split(" ");
const segundoElemento2 = array2[1];
console.log(segundoElemento2);

// Ejercicio 3: Reemplaza todas las ocurrencias de un carácter en una cadena usando el método replace().
const cadena3 = "hola mundo";
const nuevaCadena3 = cadena3.replace(/o/g, "0");
console.log(nuevaCadena3);


// Ejercicio 4: Convierte una cadena en minúsculas usando el método toLowerCase().
const cadena4 = "HOLA MUNDO";
const nuevaCadena4 = cadena4.toLowerCase();
console.log(nuevaCadena4);

// Ejercicio 5: Convierte una cadena en mayúsculas usando el método toUpperCase().
const cadena5 = "hola mundo";
const nuevaCadena5 = cadena5.toUpperCase();
console.log(nuevaCadena5);

// Ejercicio 6: Combina dos cadenas usando el operador de plantilla de cadena (template literal).
const cadena6_1 = "Hola";
const cadena6_2 = "mundo";
const resultado6 = `${cadena6_1} ${cadena6_2}`;
console.log(resultado6);

// Ejercicio 7: Calcula la longitud de una cadena usando la propiedad length.
const cadena7 = "Hola mundo";
const longitud7 = cadena7.length;
console.log(longitud7);

// Ejercicio 8: Concatena dos cadenas usando el método concat().
const cadena8_1 = "Hola";
const cadena8_2 = "mundo";
const resultado8 = cadena8_1.concat(" ", cadena8_2);
console.log(resultado8);

// Ejercicio 9: Extrae una subcadena de una cadena usando el método substring().
const cadena9 = "Hola mundo";
const subcadena9 = cadena9.substring(0, 4);
console.log(subcadena9);

// Ejercicio 10: Extrae una subcadena de una cadena usando el método slice().
const cadena10 = "Hola mundo";
const subcadena10 = cadena10.slice(0, 4);
console.log(subcadena10);

// Ejercicio 11: Encuentra la posición de un carácter en una cadena usando el método indexOf().
const cadena11 = "Hola mundo";
const posicion11 = cadena11.indexOf("m");
console.log(posicion11);

// Ejercicio 12: Encuentra la última posición de un carácter en una cadena usando el método lastIndexOf().
const cadena12 = "Hola mundo";
const ultimaPosicion12 = cadena12.lastIndexOf("o");
console.log(ultimaPosicion12);

// Ejercicio 13: Comprueba si una cadena comienza con ciertos caracteres usando el método startsWith().
const cadena13 = "Hola mundo";
const empiezaConHola = cadena13.startsWith("Hola");
console.log(empiezaConHola);

// Ejercicio 14: Comprueba si una cadena termina con ciertos caracteres usando el método endsWith().
const cadena14 = "Hola mundo";
const terminaConMundo = cadena14.endsWith("mundo");
console.log(terminaConMundo);

// Ejercicio 15: Elimina los espacios en blanco al principio y al final de una cadena usando el método trim().
const cadena15 = "   Hola mundo   ";
const cadenaSinEspacios = cadena15.trim();
console.log(cadenaSinEspacios);

// Ejercicio 16: Divide una cadena en palabras usando el método split() y cuenta el número de palabras.
const cadena16 = "Hola mundo feliz";
const palabras16 = cadena16.split(" ");
const numeroPalabras16 = palabras16.length;
console.log(numeroPalabras16);

// Ejercicio 17: Invierte una cadena usando el método split(), reverse() y join().
const cadena17 = "Hola mundo";
const cadenaInvertida17 = cadena17.split("").reverse().join("");
console.log(cadenaInvertida17);

// Ejercicio 18: Convierte una cadena en un array de caracteres usando el método split('').
const cadena18 = "Hola mundo";
const arrayCaracteres18 = cadena18.split("");
console.log(arrayCaracteres18);

// Ejercicio 19: Repite una cadena un cierto número de veces usando el método repeat().
const cadena19 = "Hola ";
const cadenaRepetida19 = cadena19.repeat(3);
console.log(cadenaRepetida19);

// Ejercicio 20: Encuentra la primera ocurrencia de una subcadena en una cadena usando el método indexOf().
const cadena20 = "Hola mundo";
const primeraOcurrencia20 = cadena20.indexOf("mundo");
console.log(primeraOcurrencia20);

// Ejercicio 21: Encuentra la última ocurrencia de una subcadena en una cadena usando el método lastIndexOf().
const cadena21 = "Hola mundo mundo";
const ultimaOcurrencia21 = cadena21.lastIndexOf("mundo");
console.log(ultimaOcurrencia21);

// Ejercicio 22: Reemplaza la primera ocurrencia de una subcadena en una cadena usando el método replace().
const cadena22 = "Hola mundo mundo";
const nuevaCadena22 = cadena22.replace("mundo", "amigo");
console.log(nuevaCadena22);

// Ejercicio 23: Convierte una cadena en un array de palabras usando el método split(' ').
const cadena23 = "Hola mundo feliz";
const arrayPalabras23 = cadena23.split(" ");
console.log(arrayPalabras23);

// Ejercicio 24: Invierte el orden de las palabras en una cadena usando el método split(' '), reverse() y join(' ').
const cadena24 = "Hola mundo feliz";
const cadenaInvertida24 = cadena24.split(" ").reverse().join(" ");
console.log(cadenaInvertida24);

// Ejercicio 25: Comprueba si una cadena contiene solo dígitos usando el método match() y una expresión regular.
const cadena25 = "12345";
const contieneSoloDigitos = /^\d+$/.test(cadena25);
console.log(contieneSoloDigitos);

// Ejercicio 26: Comprueba si una cadena contiene solo letras usando el método match() y una expresión regular.
const cadena26 = "Hola";
const contieneSoloLetras = /^[a-zA-Z]+$/.test(cadena26);
console.log(contieneSoloLetras);

// Ejercicio 27: Comprueba si una cadena contiene solo caracteres alfanuméricos usando el método match() y una expresión regular.
const cadena27 = "Hola 123";
const contieneSoloAlfanumericos = /^\w+[\s$]/g.test(cadena27);
console.log(contieneSoloAlfanumericos);

// Ejercicio 28: Convierte un número en una cadena usando el método toString().
const numero28 = 123;
const cadenaNumero28 = numero28.toString();
console.log(cadenaNumero28);

// Ejercicio 29: Convierte una cadena en un número usando la función parseInt().
const cadena29 = "123";
const numero29 = parseInt(cadena29);
console.log(numero29);

// Ejercicio 30: Convierte una cadena en un número decimal usando la función parseFloat().
const cadena30 = "123.45";
const numero30 = parseFloat(cadena30);
console.log(numero30);

// Ejercicio 31: Encuentra la raíz cuadrada de un número usando el método Math.sqrt().
const numero31 = 16;
const raizCuadrada31 = Math.sqrt(numero31);
console.log(raizCuadrada31);

// Ejercicio 32: Redondea un número hacia abajo usando el método Math.floor().
const numero32 = 3.7;
const redondeoAbajo32 = Math.floor(numero32);
console.log(redondeoAbajo32);

// Ejercicio 33: Redondea un número hacia arriba usando el método Math.ceil().
const numero33 = 3.2;
const redondeoArriba33 = Math.ceil(numero33);
console.log(redondeoArriba33);

// Ejercicio 34: Redondea un número al entero más cercano usando el método Math.round().
const numero34 = 3.5;
const redondeoCercano34 = Math.round(numero34);
console.log(redondeoCercano34);

// Ejercicio 35: Genera un número aleatorio entre 0 y 1 usando el método Math.random().
const aleatorio35 = Math.random();
console.log(aleatorio35);

// Ejercicio 36: Genera un número aleatorio dentro de un rango específico usando el método Math.random().
let max = 9
let min = 0
const aleatorio36 = Math.random() * (max - min) + min;
console.log(aleatorio36);

// Ejercicio 37: Calcula la potencia de un número usando el método Math.pow().
const base37 = 2;
const exponente37 = 3;
const potencia37 = Math.pow(base37, exponente37);
console.log(potencia37);

// Ejercicio 38: Calcula el valor absoluto de un número usando el método Math.abs().
const numero38 = -5;
const absoluto38 = Math.abs(numero38);
console.log(absoluto38);

// Ejercicio 39: Calcula el máximo de dos números usando el método Math.max().
const numeroA39 = 10;
const numeroB39 = 20;
const maximo39 = Math.max(numeroA39, numeroB39);
console.log(maximo39);

// Ejercicio 40: Calcula el mínimo de dos números usando el método Math.min().
const numeroA40 = 10;
const numeroB40 = 20;
const minimo40 = Math.min(numeroA40, numeroB40);
console.log(minimo40);

// Ejercicio 41: Convierte radianes a grados usando el método Math.degrees().
const radianes41 = Math.PI;
const grados41 = Math.degrees(radianes41);
console.log(grados41);

// Ejercicio 42: Convierte grados a radianes usando el método Math.radians().
const grados42 = 180;
const radianes42 = Math.radians(grados42);
console.log(radianes42);

// Ejercicio 43: Calcula el seno de un ángulo usando el método Math.sin().
const angulo43 = 90;
const seno43 = Math.sin(angulo43);
console.log(seno43);

// Ejercicio 44: Calcula el coseno de un ángulo usando el método Math.cos().
const angulo44 = 90;
const coseno44 = Math.cos(angulo44);
console.log(coseno44);

// Ejercicio 45: Calcula la tangente de un ángulo usando el método Math.tan().
const angulo45 = 45;
const tangente45 = Math.tan(angulo45);
console.log(tangente45);
