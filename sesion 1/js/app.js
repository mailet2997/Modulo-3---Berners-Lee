//primer console.log
console.log("Mi nombre es Angela :D ");
console.info("Anuncio parroquial");
console.warn("GElatina Blanca con Jalea Negra");
console.error("100% natural ");
console.debug("Debugeando :v ");
let persona = {nombre: "Angela", edad: 27,ciudad: "Medellin"};

console.table(persona);
console.log(persona.ciudad, persona.edad);
;

// 1
var num1 = 5;
var num2 = 10;
console.log(num1 + num2);

// 2
var simpleString1 = "Hola";
var simpleString2 = "Mundo";
console.log(simpleString1.length + simpleString2.length);

// 3
var stringUsingString1 = String("JavaScript");
var stringUsingString2 = String("Ejercicios");

// 4
var stringUsingNewString1 = new String("Concatenar");
var stringUsingNewString2 = new String("Strings");

// 5
console.log(simpleString1.indexOf("la"));

// 6
console.log(simpleString2.includes("ndo"));

// 7
console.log(simpleString1.concat(simpleString2));

// 8
console.log(simpleString1 + simpleString2);

// 9
console.log(`${simpleString1} ${simpleString2}`);

// 10
var stringWithSpaces1 = " TrimStart";
var stringWithSpaces2 = "TrimEnd ";
console.log(stringWithSpaces1.trimStart());
console.log(stringWithSpaces2.trimEnd());

// 11
console.log(simpleString1.replace('o', 'i'));

// 12
console.log(simpleString2.slice(0, 3));

// 13
console.log(simpleString2.substring(2));

// 14
console.log(simpleString1.repeat(2));

// 15
console.log("Esto es una oración de ejemplo".split(" "));

// 16
console.log(simpleString2.toUpperCase());

// 17
console.log(simpleString1.toLowerCase());

// 18
var booleanVariable = true;
console.log(typeof(booleanVariable));

// 19
var arrayVariable = [1, 2, 3];
console.log(arrayVariable.length);

// 20
var objectVariable = {prop1: 'value1', prop2: 'value2', prop3: 'value3'};
console.log(objectVariable.prop1);

// 21
var nullVariable = null;
console.log(typeof(nullVariable));

// 22
var undefinedVariable;
console.log(typeof(undefinedVariable));

// 23
var decimalVariable = 3.14;
console.log(typeof(decimalVariable));

// 24
var negativeVariable = -5;
console.log(typeof(negativeVariable));

// 25
console.log("Casa".indexOf('a'));

// 26
console.log("Javascript".includes("Script"));

// 27
console.log("Hola".concat("Mundo"));

// 28
console.log("Hola" + "Mundo");

// 29
console.log(`Hola ${"Mundo"}`);

// 30
var cadenaConEspacios = " Ejemplo con espacios ";
console.log(cadenaConEspacios.trimStart().trimEnd());

// 31
console.log("El cielo es azul".replace("azul", "rojo"));

// 32
console.log("Programación".slice(-4));

// 33
console.log("JavaScript".substring(2));

// 34
console.log("Hola".repeat(3));

// 35
console.log("Esto es una oración de ejemplo".split(" "));

// 36
console.log("Javascript".toUpperCase());

// 37
console.log("EJEMPLO".toLowerCase());

// 38
var numero = 42;
console.log(typeof(numero));

// 39
var booleanVariable = true;
console.log(typeof(booleanVariable));

// 40
var arrayVariable = [1, 2, 3];
console.log(arrayVariable.length);

// 41
var objectVariable = {prop1: 'value1', prop2: 'value2', prop3: 'value3'};
console.log(objectVariable.prop1);

// 42
var nullVariable = null;
console.log(typeof(nullVariable));

// 43
var undefinedVariable;
console.log(typeof(undefinedVariable));

// 44
var decimalVariable = 3.14;
console.log(typeof(decimalVariable));
