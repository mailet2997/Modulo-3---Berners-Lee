// Ejercicios con map

const numeros = [1, 2, 3, 4, 5];
const nombres = ["Juan", "María", "Carlos", "Ana"];
const temperaturasCelsius = [0, 10, 20, 30, 40];
const palabras = ["hola", "mundo", "javascript"];

// Ejercicio 1: Duplicar cada elemento de un array de números.
const duplicados = numeros.map(numero => numero * 2);
console.log("Duplicados de los números:", duplicados);

// Ejercicio 2: Convertir un array de nombres a un array de objetos con la propiedad "nombre".
const objetosNombres = nombres.map(nombre => ({ nombre }));
console.log("Objetos con nombres:", objetosNombres);

// Ejercicio 3: Elevar al cuadrado cada número en un array y crear un nuevo array con los resultados.
const cuadrados = numeros.map(numero => numero ** 2);
console.log("Cuadrados de los números:", cuadrados);

// Ejercicio 4: Obtener las iniciales de cada palabra en un array de frases.
const iniciales = palabras.map(palabra => palabra[0]);
console.log("Iniciales de las palabras:", iniciales);

// Ejercicio 5: Crear un nuevo array con la longitud de cada string en un array de palabras.
const longitudes = palabras.map(palabra => palabra.length);
console.log("Longitudes de las palabras:", longitudes);

// Ejercicio 6: Convertir un array de temperaturas en grados Celsius a grados Fahrenheit.
const temperaturasFahrenheit = temperaturasCelsius.map(temperatura => (temperatura * 9 / 5) + 32);
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);

// Ejercicio 7: Formatear cada número en un array como moneda con dos decimales.
const monedas = numeros.map(numero => "$" + numero.toFixed(2));
console.log("Números formateados como moneda:", monedas);

// Ejercicio 8: Crear un nuevo array con la raíz cuadrada de cada número en otro array.
const raicesCuadradas = numeros.map(numero => Math.sqrt(numero));
console.log("Raíces cuadradas de los números:", raicesCuadradas);

// Ejercicio 9: Capitalizar la primera letra de cada palabra en un array de frases.
const capitalizadas = palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1));
console.log("Palabras capitalizadas:", capitalizadas);

// Ejercicio 10: Crear un nuevo array con la cantidad de caracteres en cada string en otro array.
const cantidadCaracteres = palabras.map(palabra => palabra.length);
console.log("Cantidad de caracteres de las palabras:", cantidadCaracteres);

// Ejercicio 11: Duplicar el valor de la edad en un array de objetos de personas.
const personasDuplicadas = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 40 },
    { nombre: "Carlos", edad: 25 }
].map(persona => ({ nombre: persona.nombre, edad: persona.edad * 2 }));
console.log("Personas con edades duplicadas:", personasDuplicadas);

// Ejercicio 12: Concatenar "Hola, " a cada nombre en un array de nombres.
const saludos = nombres.map(nombre => "Hola, " + nombre);
console.log("Saludos:", saludos);

// Ejercicio 13: Crear un nuevo array con el valor absoluto de cada número en otro array.
const valoresAbsolutos = [-1, -2, -3, -4, -5].map(numero => Math.abs(numero));
console.log("Valores absolutos de los números:", valoresAbsolutos);

// Ejercicio 14: Convertir un array de palabras a un array de objetos con la propiedad "palabra" y "longitud".
//const palabras = ["hola", "mundo", "javascript"];
//objeto{
//  palabra: hola,
//  longitud: 4,
// }
const objetosPalabras = palabras.map(palabra => ({ palabra, longitud: palabra.length }));
console.log("Objetos con palabras y longitudes:", objetosPalabras);

// Ejercicio 15: Cambiar el formato de fecha de "DD/MM/AAAA" a "AAAA-MM-DD" en un array de fechas.
const fechasCambiadasFormato = ["20/04/2024", "21/04/2024", "22/04/2024"].map(fecha => {
    const partes = fecha.split("/");
    return partes[2] + "-" + partes[1] + "-" + partes[0];
});
console.log("Fechas cambiadas de formato:", fechasCambiadasFormato);

// Ejercicio 16: Multiplicar cada número en un array por su índice y crear un nuevo array con los resultados.
const multiplicadosPorIndice = numeros.map((numero, indice) => numero * indice);
console.log("Números multiplicados por su índice:", multiplicadosPorIndice);

// Ejercicio 17: Crear un nuevo array con las vocales eliminadas de cada string en un array de palabras.
const palabrasSinVocales = palabras.map(palabra => palabra.replace(/[aeiou]/gi, ''));
console.log("Palabras sin vocales:", palabrasSinVocales);

// Ejercicio 18: Formatear cada número en un array como porcentaje con dos decimales.
const porcentajes = numeros.map(numero => (numero * 100).toFixed(2) + "%");
console.log("Números formateados como porcentaje:", porcentajes);

// Ejercicio 19: Crear un nuevo array con las palabras invertidas en un array de frases.
const palabrasInvertidas = palabras.map(palabra => palabra.split('').reverse().join(''));
console.log("Palabras invertidas:", palabrasInvertidas);

// Ejercicio 20: Convertir un array de números a un array de strings con el formato "Número: valor".
const numerosFormateados = numeros.map(numero => "Número: " + numero);
console.log("Números formateados:", numerosFormateados);
