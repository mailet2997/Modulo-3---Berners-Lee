// Ejercicio 1: Validar si una cadena contiene la palabra "hola"
const cadena1 = "¡Hola mundo!";
console.log(/hola/i.test(cadena1)); // Devuelve true si encuentra "hola", sin importar mayúsculas/minúsculas

// Ejercicio 2: Encontrar todas las letras 'a' en una cadena
const cadena2 = "La casa es grande";
console.log(cadena2.match(/a/gi)); // Devuelve todas las letras 'a', sin importar mayúsculas/minúsculas

// Ejercicio 3: Verificar si una cadena consiste únicamente de letras
const cadena3 = "SolamenteLetras";
console.log(/^[a-zA-Z]+$/.test(cadena3)); // Devuelve true si la cadena contiene solo letras

// Ejercicio 4: Encontrar todas las palabras que comienzan con la letra 'c' en una cadena
const cadena4 = "El café es delicioso y el chocolate también";
console.log(cadena4.match(/\bc\w*/gi)); // Devuelve todas las palabras que comienzan con 'c'

// Ejercicio 5: Verificar si una cadena contiene un número de teléfono en el formato xxx-xxx-xxxx
const cadena5 = "Mi número es 123-456-7890";
console.log(/\d{3}-\d{3}-\d{4}/.test(cadena5)); // Devuelve true si encuentra el formato de número de teléfono

// Ejercicio 6: Encontrar todas las palabras que terminan con la letra 'o'
const cadena6 = "El perro corrió hacia el río";
console.log(cadena6.match(/\b\w*o\b/gi)); // Devuelve todas las palabras que terminan con 'o'

// Ejercicio 7: Verificar si una cadena contiene solo números
const cadena7 = "123456";
console.log(/^\d+$/.test(cadena7)); // Devuelve true si la cadena contiene solo números

// Ejercicio 8: Encontrar todas las direcciones de correo electrónico en una cadena
const cadena8 = "Mis correos son usuario1@example.com y usuario2@example.org";
console.log(cadena8.match(/\b[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{0,}\b/g)); // Devuelve todas las direcciones de correo electrónico

// Ejercicio 9: Verificar si una cadena contiene al menos una vocal
const cadena9 = "Rhythm";
console.log(/[aeiou]/i.test(cadena9)); // Devuelve true si la cadena contiene al menos una vocal

// Ejercicio 10: Encontrar todas las palabras que contienen al menos una letra mayúscula
const cadena10 = "La casa es Grande y Hermosá";
console.log(cadena10.match(/\b\w*[A-Z]+\w*\b/gu)); // Devuelve todas las palabras que contienen al menos una letra mayúscula

// Ejercicio 11: Verificar si una cadena contiene solo letras y números
const cadena11 = "Hola123";
console.log(/^\w+$/.test(cadena11)); // Devuelve true si la cadena contiene solo letras y números

// Ejercicio 12: Encontrar todas las palabras que tienen al menos cinco letras
const cadena12 = "La manzana es roja y deliciosa";
console.log(cadena12.match(/\b\w{5,}\b/g)); // Devuelve todas las palabras que tienen al menos cinco letras

// Ejercicio 13: Verificar si una cadena contiene al menos un carácter especial
const cadena13 = "Hola#Mundo!";
console.log(/[!@#$%^&*(),.?":{}|<>]/.test(cadena13)); // Devuelve true si la cadena contiene al menos un carácter especial

// Ejercicio 14: Encontrar todas las palabras que tienen al menos una letra repetida
const cadena14 = "La casa es bonita y el perrro corre";
console.log(cadena14.match(/\b\w*([a-zA-Z]).*\1\w*\b/g)); // Devuelve todas las palabras que tienen al menos una letra repetida

// Ejercicio 15: Verificar si una cadena contiene al menos una palabra de cuatro letras
const cadena15 = "Esta cadena tiene algunas palabras cortas";
console.log(/\b\w{4}\b/.test(cadena15)); // Devuelve true si la cadena contiene al menos una palabra de cuatro letras


//number
// Number.MAX_VALUE: Encuentra el número máximo representable en JavaScript.
console.log("Número máximo representable en JavaScript: " + Number.MAX_VALUE);

// Number.MIN_VALUE: Encuentra el número mínimo positivo representable en JavaScript.
console.log("Número mínimo positivo representable en JavaScript: " + Number.MIN_VALUE);

// Number.MAX_SAFE_INTEGER: Encuentra el número entero más grande seguro representable en JavaScript.
console.log("Número entero más grande seguro representable en JavaScript: " + Number.MAX_SAFE_INTEGER);

// Number.MIN_SAFE_INTEGER: Encuentra el número entero más pequeño seguro representable en JavaScript.
console.log("Número entero más pequeño seguro representable en JavaScript: " + Number.MIN_SAFE_INTEGER);

// Number.EPSILON: Encuentra la diferencia entre uno y el número siguiente más grande que se puede representar precisamente como un número de punto flotante de doble precisión en JavaScript.
console.log("Diferencia entre 1 y el siguiente número más grande representable: " + Number.EPSILON);

// Number.POSITIVE_INFINITY: Representa el valor infinito positivo.
console.log("Valor infinito positivo: " + Number.POSITIVE_INFINITY);

// Number.NEGATIVE_INFINITY: Representa el valor infinito negativo.
console.log("Valor infinito negativo: " + Number.NEGATIVE_INFINITY);

// Number.parseInt(text): Convierte una cadena en un número entero.
let numeroEntero = "10";
console.log("Número entero después de convertir desde una cadena: " + Number.parseInt(numeroEntero));

// Number.parseFloat(text): Convierte una cadena en un número decimal.
let numeroDecimal = "3.14";
console.log("Número decimal después de convertir desde una cadena: " + Number.parseFloat(numeroDecimal));

// Math.abs(x): Devuelve el valor absoluto de un número.
let valorNegativo = -10;
console.log("Valor absoluto de " + valorNegativo + ": " + Math.abs(valorNegativo));

// Math.sign(x): Devuelve el signo de un número, indicando si es positivo, negativo o cero.
let valorSigno = -5;
console.log("Signo de " + valorSigno + ": " + Math.sign(valorSigno));

// Math.exp(x): Devuelve e elevado a la potencia de x.
let exponente = 2;
console.log("e elevado a la potencia de " + exponente + ": " + Math.exp(exponente));

// Math.expm1(x): Devuelve e elevado a la potencia de x, menos 1.
console.log("e elevado a la potencia de " + exponente + " menos 1: " + Math.expm1(exponente));

// Math.max(a, b, c...): Devuelve el número más grande de una lista de argumentos.
console.log("Número más grande de 5, 10, 15: " + Math.max(5, 10, 15));

// Math.min(a, b, c...): Devuelve el número más pequeño de una lista de argumentos.
console.log("Número más pequeño de 5, 10, 15: " + Math.min(5, 10, 15));

// Math.pow(base, exp): Devuelve la base elevada a la potencia del exponente.
console.log("2 elevado a la potencia de 3: " + Math.pow(2, 3));

// Math.sqrt(x): Devuelve la raíz cuadrada de un número.
let numeroRaizCuadrada = 16;
console.log("Raíz cuadrada de " + numeroRaizCuadrada + ": " + Math.sqrt(numeroRaizCuadrada));

// Math.cbrt(x): Devuelve la raíz cúbica de un número.
let numeroRaizCubica = 27;
console.log("Raíz cúbica de " + numeroRaizCubica + ": " + Math.cbrt(numeroRaizCubica));

// Math.imul(a, b): Devuelve el resultado de la multiplicación de dos números de 32 bits.
console.log("Resultado de la multiplicación de 5 y 10: " + Math.imul(5, 10));

// Math.clz32(x): Devuelve el número de ceros iniciales en la representación binaria de 32 bits de un número.
let numeroBinario = 16; // Representación binaria: 10000
console.log("Número de ceros iniciales en la representación binaria de " + numeroBinario + ": " + Math.clz32(numeroBinario));
