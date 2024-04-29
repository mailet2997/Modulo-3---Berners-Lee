// Array para almacenar los productos del inventario
let inventario = [];

// Función para agregar un nuevo producto al inventario
function agregarProducto(nombre, descripcion, precio) {
    const producto = { nombre, descripcion, precio };
    inventario.push(producto);
    console.log(`Producto "${nombre}" agregado al inventario.`);
}

// Función para mostrar todos los productos del inventario
function mostrarProductos() {
    console.log("Productos en el inventario:");
    inventario.forEach(producto => {
        console.log(`Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}, Precio: ${producto.precio}`);
    });
}

// Función para actualizar un producto existente en el inventario
function actualizarProducto(nombre, nuevaDescripcion, nuevoPrecio) {
    const productoIndex = inventario.findIndex(producto => producto.nombre === nombre);
    if (productoIndex !== -1) {
        inventario[productoIndex].descripcion = nuevaDescripcion;
        inventario[productoIndex].precio = nuevoPrecio;
        console.log(`Producto "${nombre}" actualizado.`);
    } else {
        console.log(`El producto "${nombre}" no existe en el inventario.`);
    }
}

// Función para eliminar un producto del inventario
function eliminarProducto(nombre) {
    const productoIndex = inventario.findIndex(producto => producto.nombre === nombre);
    if (productoIndex !== -1) {
        inventario.splice(productoIndex, 1);
        console.log(`Producto "${nombre}" eliminado del inventario.`);
    } else {
        console.log(`El producto "${nombre}" no existe en el inventario.`);
    }
}

// Agregar algunos productos al inventario

agregarProducto("Camisa", "Camisa de algodón", 25.99);
agregarProducto("Pantalón", "Pantalón vaquero", 34.99);
agregarProducto("Zapatos", "Zapatos de cuero", 49.99);

// Mostrar todos los productos del inventario
mostrarProductos();

// Actualizar un producto existente
actualizarProducto("Pantalón", "Pantalón vaquero negro", 39.99);

// Eliminar un producto del inventario
eliminarProducto("Zapatos");

// Mostrar todos los productos actualizados
mostrarProductos();
