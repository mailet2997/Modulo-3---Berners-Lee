// Problema 1: Contador de Vocales
function contarVocales(cadena) {
    const regexVocales = /[aeiou]/gi;
    const vocalesEncontradas = cadena.match(regexVocales);
    return vocalesEncontradas ? vocalesEncontradas.length : 0;
}

const texto = "Este es un ejemplo de conteo de palabras";
console.log(`Total de vocales en "${texto}": ${contarVocales(texto)}`);

// Problema 2: Validación de Correo Electrónico
function validarCorreo(correo) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}
const correo1 = "usuario@example.com";
const correo2 = "invalido";
console.log(`"${correo1}" es un correo válido: ${validarCorreo(correo1)}`);
console.log(`"${correo2}" es un correo válido: ${validarCorreo(correo2)}`);

// Problema 3: Conversión de Temperatura
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Problema 4: Contador de Palabras
function contarPalabras(cadena) {
    const palabras = cadena.split(" ");
    return palabras.length;
}

// Problema 5: Reverso de una Cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

// Problema 6: Validación de Contraseña
function validarContraseña(contraseña) {
    const regexContraseña = /^(?=.*\d).{8,}$/;
    return regexContraseña.test(contraseña);
}

// Problema 7: Eliminación de Espacios en Blanco
function eliminarEspacios(cadena) {
    return cadena.trim();
}

// Ejemplos de uso




const temperaturaCelsius = 25;
console.log(`${temperaturaCelsius}°C es igual a ${celsiusToFahrenheit(temperaturaCelsius)}°F`);

const texto2 = "Otro ejemplo para contar palabras";
console.log(`Total de palabras en "${texto2}": ${contarPalabras(texto2)}`);

const palabra = "reconocer";
console.log(`El reverso de "${palabra}" es "${invertirCadena(palabra)}"`);

const contraseña1 = "Abcd1234";
const contraseña2 = "abcde";
console.log(`"${contraseña1}" es una contraseña válida: ${validarContraseña(contraseña1)}`);
console.log(`"${contraseña2}" es una contraseña válida: ${validarContraseña(contraseña2)}`);

const textoConEspacios = "   Hola, este es un texto con espacios en blanco   ";
console.log(`Texto original: "${textoConEspacios}"`);
console.log(`Texto sin espacios en blanco: "${eliminarEspacios(textoConEspacios)}"`);
