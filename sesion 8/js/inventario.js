/*
1. Agregar producto
2. Eliminar producto
3. Modificar producto
4. buscar por nombre
5. filtrar por precio
6. crear un reporte de inventario - Ordenado
* */

function main(){
    do {
        const opn = prompt(`Menu de Opciones
        1. Agregar producto
        2. Eliminar producto
        3. Modificar
        4. Buscar por nombre
        5. Filtrar por precio
        6. Crear un reporte de inventario (Ordenado)
        `);
        switch (opn){
            case '1':
                agregarProducto();
                break;
            case '2':
                eliminarProducto();
                break;
            case '3':
                modificarProductor();
                break;
            case '4':
                buscarNombre();
                break;
            case '5':
                filtrarPorPrecio();
                break;
            case '6':
                break;
            case '7':
                controladorWhile = false;
                break;
            default:
                mostrarMensaje();
        }
    }while (controladorWhile)
}

function agregarProducto(){
    nombre = prompt("Ingrese el nombre del producto");
    categoria = prompt("Ingrese la categoria del producto");
    precio = prompt("Ingrese el precio de la categoria")
}