let dineroDisponible = 2500000;
let gastoComida = 0;
let gastoMedellin = 0;
let diasEnMacondo = 0;
let murio = false;
let dineroGastado = 0;
let dia = 1;

alert("Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo día le pagan a Hildebrando 2.500.000.")

let opcionComida = prompt("Que desea comprar en el aeropuerto? \n1. Almojabana (15.000$)\n2. Subway con gaseosa (23,000)\n3. No comprar nada")

switch(opcionComida){
    case '1':
        gastoComida = 15000;
        alert("Hildebrando compro una almojabana con gaseosa");
        alert("Le caera mal porque lleva mucho en el stand");
        break;
    case '2': 
        gastoComida = 23000
        alert("Hildebrando compro un Subway con Gaseosa");
        alert("Esta llenito :D ")
        break;
    case '3':
        alert("Hildebrando no compra nada en el aeropuerto");
        alert("le tocara comprar algo en Medellin");
        break;
    default:
        alert("Opcion Invalida");
}
dineroDisponible -= gastoComida;
alert(`Dinero disponible después de gastos: $${dineroDisponible}`);
alert(`Ahora Hildebrando esta en la sala de espera, pero se percata del problema del tamaño de la maleta`)

// Dimensiones originales de la maleta
const altoOriginal = parseFloat(prompt("Ingrese el alto de la maleta de Hildebrando en cm:"));
const largoOriginal = parseFloat(prompt("Ingrese el largo de la maleta de Hildebrando en cm:"));
const anchoOriginal = parseFloat(prompt("Ingrese el ancho de la maleta de Hildebrando en cm:"));
// Dimensiones permitidas por la aerolínea
const altoPermitido = 55;
const largoPermitido = 40;
const anchoPermitido = 20;

// Calcular el factor de reducción para cada dimensión
const factorReduccionAlto = altoPermitido / altoOriginal;
const factorReduccionLargo = largoPermitido / largoOriginal;
const factorReduccionAncho = anchoPermitido / anchoOriginal;

// Obtener el factor de reducción más restrictivo
const factorReduccion = Math.min(factorReduccionAlto, factorReduccionLargo, factorReduccionAncho);

// Calcular las nuevas dimensiones
const nuevoAlto = altoOriginal * factorReduccion;
const nuevoLargo = largoOriginal * factorReduccion;
const nuevoAncho = anchoOriginal * factorReduccion;

// Mostrar los resultados en consola
// Actualizar la información sobre la maleta en el resumen final
alert("Resumen Final:");
alert(`Dinero disponible después de gastos: $${dineroDisponible}`);
alert("Dimensiones de la maleta ajustadas:");
alert("Nuevas Dimensiones de la Maleta:");
alert("Nuevo Alto:", nuevoAlto.toFixed(2), "cm");
alert("Nuevo Largo:", nuevoLargo.toFixed(2), "cm");
alert("Nuevo Ancho:", nuevoAncho.toFixed(2), "cm");
alert("Hildebrando logra abordar el avion y a Medellín");
alert("ElPassEs: 01110010_01101001_01110111_01101001");

//convertir de binario a decimal, y de decimal a caracter
// caso 3
function convertirBinaCaracter(binario){ 
    const decimal = parseInt(binario, 2); //01.101.001 psrseo y el ,2 es redondear 01101001
    return String.fromCharCode(decimal);
}
const bin_1 = prompt("Ingrese el primer grupo binario")
const bin_2 = prompt("Ingrese el segundo grupo binario")
const bin_3 = prompt("Ingrese el tercero grupo binario")
const bin_4 = prompt("Ingrese el cuarto grupo binario")

const laPassV = convertirBinaCaracter(bin_1)+
                convertirBinaCaracter(bin_2)+
                convertirBinaCaracter(bin_3)+
                convertirBinaCaracter(bin_4);

alert(`la contraseña es ${laPassV}`)
const ingresePass = prompt(" Ingrese la contraseña correcta: ")


if (laPassV === ingresePass){
    const costoWifi = 50000;
    const tiempo = 1;
    const costoTotal = costoWifi * tiempo;
    alert(`Costo del uso del wifi: ${costoTotal}`)
    dineroDisponible -= costoTotal
}else{
    alert("Constraseña incorrecta. Conexion no segura");
}
alert("Hildebrando ha arribado a Macondo");


//caso 4
function convertirText(texto){
    const textCon = texto.replace(/[aeiouáéíóú]/gi, 'i');
    return textCon
}
const textOrigin = prompt("Taxista dice: Hili, cimi isti?  i dindi li llivi?")
const textConver = convertirText(textOrigin)


//caso 5

//caso 6
while (dia <= 4 && !murio){
    let vestimenta = prompt(`Dia ${dia}: Que color de vestiemnto elige: \n - Amarillo \n -Verde \n -Rojo`). toLocaleLowerCase();
    switch(vestimenta){
        case 'amarillo':
            let deciAmarillo = prompt(" Queire ir a la piscina? responda si o no").toLocaleLowerCase();
            if(deciAmarillo == 'si' || deciAmarillo == 'Si'){
                alert(" Hildebrando se metio a la pisina y lamentablente se sintio ahogado por el exceso de cloro, y murio :c ");
                murio = true           
            }else{
                alert("no fue a la piscina")
            }
            break;
        case 'verde':
            let desiVerde = prompt(" desea realizar la caminata?  responda si o no").toLowerCase();
            if(desiVerde == 'si' || desiVerde == 'Si'){
                alert("Hildebrando roma la caminata y se toma fotos");
                diasEnMacondo++;               
            }else {
                alert("hildebrando decide no hacer la caminata y se pierde en la noche")
                murio=true
            }
            break;
        default:
            alert("opcion invalida")
            break
    }
    dia++;
}
