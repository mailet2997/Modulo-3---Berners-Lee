
/*
1. Agregar producto
2. Eliminar producto
3. Modificar producto
4. buscar por nombre
5. filtrar por precio
6. crear un reporte de inventario - Ordenado
* */

function main(){
    let controladorWhile = true
    do{
        const opn = prompt(`MENÚ DE OPCIONES
    1. Agregar producto
    2. Eliminar producto
    3. Modificar producto
    4. Buscar por nombre
    5. Filtrar por precio
    6. Crear un reporte de inventario - Ordenado
    7. Salir`);
    switch (opn) {
      case "1":
        agregarProducto();
        break;
      case "2":
        eliminarProducto();
        break;
      case "3":
        modificarProducto();
        break;
      case "4":
        buscarNombre()
        break;
      case "5":
        filtrarPorPrecio()
        break;
      case "6":
        listarProductos();
        break;
      case "7":
        controladorWhile = false;
        break;
      default:
        mostrarMensaje();
    }
  } while (controladorWhile); 
    
}
// agregar producto
function agregarProducto(){

    nombre = prompt("Ingrese el nombre del producto: ");
    categoria = prompt("Ingrese la categoria del producto: ");
    precio = Number(prompt("Ingrese el precio del producto: "));
    cantidad = Number(prompt("Ingrese la cantidad del producto: "));
    marca = prompt("Ingrese el marca del producto: ");
    
    if(!isFinite(precio + cantidad)){
        mostrarMensaje("La cantidad y el precio deben ser numericos");
        return;
    }
    const nuevoProducto = {nombre, categoria, precio, cantidad, marca};
    listaDeProductos.unshift(nuevoProducto);

    mostrarMensaje(`El producto ${nombre} fue agregado exitosamente`)
}

function eliminarProducto(){
    listarProductos();
    const nombreEliminar = prompt(" Ingresa el nombre del producto a eliminar");

    if(!listaDeProductos.some(
        (producto)=>
        producto.nombre.toLowerCase() === nombreEliminar.toLowerCase()
    )){mostrarMensaje("El nombre del producto ingresado no existe en la lista");
    return;
}
listaDeProductos =
}

function listarProductos(){
    const fechaHoy = new Date();
    // obtener dia mes y año

    const fecha = fechaHoy.toDateString();

    let listaString = `REPORTE DEINVENTARIO \n FECHA: ${fecha} \n`;
    listaDeProductos.sort((a, b )=> a.nombre.localeCompare(b.nombre));
    listaDeProductos.forEach((producto,index) => {
        //destructuracion
        const {nombre,precio,cantidad,marca, categoria} = producto;

        // format unit cost
        const precioFormat = precio.toLocaleString("en-US",{
            currency: "USD",
            style: "currency"

        });

        listaString += `${index + 1}. --Nombre:${nombre} Precio: ${precioFormat} Cantidad: ${cantidad} Marca: ${marca} Categoria: ${categoria}`

    });
    mostrarMensaje(listaString)
}