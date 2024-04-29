// Ejercicio 1
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

// Ejercicio 2
console.log(persona.nombre); 

// Ejercicio 3
persona.ciudad = 'Barcelona';

// Ejercicio 4
persona.email = 'juan@example.com';

// Ejercicio 5
delete persona.edad;

// Ejercicio 6
for (let key in persona) {
  console.log(`${key}: ${persona[key]}`);
}

// Ejercicio 7
const libro = {
  titulo: 'El Principito',
  autor: 'Antoine de Saint-Exupéry',
  anio: 1943
};

// Ejercicio 8
console.log(Object.keys(libro).length);

// Ejercicio 9
console.log('¿El libro tiene la propiedad año?', 'año' in libro);

// Ejercicio 10
for (let key in libro) {
  console.log(`${key}: ${libro[key]}`);
}

// Ejercicio 11
const auto = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2021
};

// Ejercicio 12
console.log(Object.keys(auto).length > 0);

// Ejercicio 13
const auto2 = Object.assign({}, auto);

// Ejercicio 14
const autoCompleto = {...auto, ...auto2};
console.log(autoCompleto)

// Ejercicio 15
auto.mostrarInfo = function() {
  console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}`);
};

// Ejercicio 16
auto.calcularEdad = function() {
  return new Date().getFullYear() - this.anio;
};

// Ejercicio 17
const rectangulo = {
  ancho: 5,
  altura: 10,
  calcularArea: function() {
    return this.ancho * this.altura;
  }
};

// Ejercicio 18
console.log(rectangulo.calcularArea());

// Ejercicio 19
rectangulo.calcularPerimetro = function() {
  return 2 * (this.ancho + this.altura);
};

// Ejercicio 20
const circulo = {
  radio: 5,
  calcularArea: function() {
    return Math.PI * this.radio ** 2;
  }
};

// Ejercicio 21
console.log(circulo.calcularArea());

// Ejercicio 22
circulo.calcularCircunferencia = function() {
  return 2 * Math.PI * this.radio;
};

// Ejercicio 23
const triangulo = {
  lado1: 3,
  lado2: 4,
  lado3: 5,
  esEquilatero: function() {
    return this.lado1 === this.lado2 && this.lado1 === this.lado3;
  }
};

// Ejercicio 24
console.log(triangulo.esEquilatero());

// Ejercicio 25
triangulo.calcularPerimetro = function() {
  return this.lado1 + this.lado2 + this.lado3;
};

// Ejercicio 26
const alumno = {
  nombre: 'María',
  notas: [7, 8, 9],
  calcularPromedio: function() {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
  }
};

// Ejercicio 27
console.log(alumno.calcularPromedio());

// Ejercicio 28
alumno.pasoDeAnio = function() {
  return this.calcularPromedio() >= 6 ? 'Pasó de año' : 'No pasó de año';
};

// Ejercicio 29
const calculadora = {
  sumar: function(a, b) {
    return a + b;
  },
  restar: function(a, b) {
    return a - b;
  },
  multiplicar: function(a, b) {
    return a * b;
  },
  dividir: function(a, b) {
    return a / b;
  },
  calcularAreaRectangulo: function(ancho, altura) {
    return ancho * altura;
  }
};

// Ejercicio 30
console.log(calculadora.calcularAreaRectangulo(5, 10));

// Ejercicio 31
const fruta = {
  nombre: 'Manzana',
  color: 'Rojo',
  precio: 1.5,
  saludar: function() {
    console.log('¡Hola! ¡Compra una ' + this.nombre + '!');
  }
};

// Ejercicio 32
fruta.saludar();

// Ejercicio 33
const cancion = {
  titulo: 'Bohemian Rhapsody',
  artista: 'Queen',
  album: 'A Night at the Opera',
  reproducir: function() {
    console.log('Reproduciendo ' + this.titulo + ' de ' + this.artista);
  }
};

// Ejercicio 34
cancion.reproducir();

// Ejercicio 35
cancion.letra = function() {
  console.log('Is this the real life?\nIs this just fantasy?');
};

// Ejercicio 36
const coche = {
  marca: 'Ford',
  modelo: 'Focus',
  anio: 2020,
  encender: function() {
    console.log('¡Coche encendido!');
  }
};

// Ejercicio 37
coche.apagar = function() {
  console.log('¡Coche apagado!');
};

// Ejercicio 38
coche.reproducirMusica = function() {
  console.log('Reproduciendo música en el coche...');
};

// Ejercicio 39
const mascota = {
  nombre: 'Firulais',
  edad: 5,
  tipo: 'Perro',
  mostrarInfo: function() {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Tipo: ${this.tipo}`);
  }
};

// Ejercicio 40
mascota.mostrarInfo();

// Ejercicio 41
const producto = {
  nombre: 'Camisa',
  precio: 20,
  cantidad: 3,
  calcularTotal: function() {
    return this.precio * this.cantidad;
  }
};

// Ejercicio 42
console.log(producto.calcularTotal());

// Ejercicio 43
const jugador = {
  nombre: 'Lionel Messi',
  puntuacion: 100,
  actualizarPuntuacion: function(nuevaPuntuacion) {
    this.puntuacion = nuevaPuntuacion;
  }
};

// Ejercicio 44
console.log(jugador.puntuacion);
jugador.actualizarPuntuacion(150);
console.log(jugador.puntuacion);

// Ejercicio 45
const pais = {
  nombre: 'España',
  capital: 'Madrid',
  poblacion: 47000000,
  informacion: function() {
    console.log(`País: ${this.nombre}, Capital: ${this.capital}, Población: ${this.poblacion}`);
  }
};

// Ejercicio 46
pais.informacion();

// Ejercicio 47
const reloj = {
  horas: 12,
  minutos: 30,
  segundos: 45,
  mostrarHora: function() {
    console.log(`Hora actual: ${this.horas}:${this.minutos}:${this.segundos}`);
  }
};

// Ejercicio 48
reloj.mostrarHora();

// Ejercicio 49
const usuario = {
  nombre: 'Juan',
  correo: 'juan@example.com',
  contrasena: '123456',
  validarContrasena: function(contrasena) {
    return this.contrasena === contrasena;
  }
};

// Ejercicio 50
console.log(usuario.validarContrasena('123456'));

// Ejercicio 51
const tarjeta = {
  numero: '1234567890',
  titular: 'Juan Perez',
  fecha_vencimiento: '12/25',
  estaVencida: function() {
    const hoy = new Date();
    const [mes, anio] = this.fecha_vencimiento.split('/');
    const fechaVencimiento = new Date(`20${anio}`, mes - 1);
    return hoy > fechaVencimiento;
  }
};

// Ejercicio 52
console.log(tarjeta.estaVencida());

// Ejercicio 53
const empleado = {
  nombre: 'María',
  cargo: 'Desarrolladora',
  salario: 3000,
  salarioNeto: function() {
    const impuesto = 0.15;
    return this.salario * (1 - impuesto);
  }
};

// Ejercicio 54
console.log(empleado.salarioNeto());

// Ejercicio 55
const hotel = {
  nombre: 'Hotel ABC',
  ubicacion: 'Barcelona',
  habitaciones: 100,
  disponibilidad: function() {
    console.log(`Habitaciones disponibles: ${this.habitaciones}`);
  }
};

// Ejercicio 56
hotel.disponibilidad();

// Ejercicio 57
const pedido = {
  numero: '12345',
  fecha: '2024-04-20',
  productos: [{nombre: 'Producto1', precio: 10}, {nombre: 'Producto2', precio: 15}],
  total: function() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
};

// Ejercicio 58
console.log(pedido.total());

// Ejercicio 59
const videojuego = {
  nombre: 'Super Mario Bros',
  plataforma: 'Nintendo Switch',
  genero: 'Plataforma',
  informacion: function() {
    console.log(`Nombre: ${this.nombre}, Plataforma: ${this.plataforma}, Género: ${this.genero}`);
  }
};

// Ejercicio 60
videojuego.informacion();
