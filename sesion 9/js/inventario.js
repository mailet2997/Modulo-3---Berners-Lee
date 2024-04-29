//CRUD
//Array de objetos de los productos
let inventario = []

//funciones
menu()
function menu(){
    let flag = true
    while(flag == true){
    const opcion = prompt("Ingrese que desea hacer \n 1. Agregar \n2. Mostrar inventario \n3. Actualizar \n4 .Eliminar  \n 5. Salir")
    switch(opcion){
        case '1':
            const proNombre = prompt(`Ingrese el nombre del producto:  `)
            const proDescrip = prompt(`Ingrese el descripcion del producto:  `)
            const proPrecio = Number(prompt(`Ingrese el precio del producto:  `))
            agregarProducto(proNombre,proDescrip,proPrecio);            
            break;
        case '2':
            mostrarProductos()
            break;
        case '3':
            const nombre = prompt("Ingresa el nombre del producto que deseas actualizar")
            actualizarProducto(nombre)
            break;
        case '4':
            const nombre1 = prompt("Ingresa el nombre del producto que deseas eliminar")
            eliminarProducto(nombre1)
            break;
        case '5':
            flag=false
            break;
        default:
            alert("Ingrese una opcion valida")

    }
}
}



//Funcion de agregar producto
function agregarProducto(nombre, descripcion, precio){
    const producto = {nombre, descripcion, precio};
    inventario.push(producto);
    alert(`Nombre: ${nombre} se ha agregado al inventario`)
    mostrarProductos()
}
//Funcion para mostrar los objetos
function mostrarProductos(){

    alert("Productos en el inventario")
    let product0os = `inventario \n`;
    inventario.forEach((producto) => {
        product0os += (`\n Nombre: ${producto.nombre}, Descripcion: ${producto.descripcion}, Precios: ${producto.precio}`)            
    } );
    alert(`${product0os} \n`)
}
//Funcion para actualizar los productos existente
function actualizarProducto(nombre){    
    const newDes = prompt("Ingrese la nueva descripcion")
    const newPrecio = Number(prompt("Ingrese el nuevo precio"))   
    const productoIndex = inventario.findIndex(producto => producto.nombre === nombre); // = indice [0]...[3]
    if(productoIndex !== -1){
       
        inventario[productoIndex].descripcion = newDes;
        inventario[productoIndex].precio = newPrecio;
        alert(`producto ${nombre} ha sido actualizado`) 
        mostrarProductos()            
    }else{
        alert(`el producto ${nombre} no existe en le inventario`)
    }    
}
//Funcion para eliminar productos del inventario
function eliminarProducto(nombre){
    const productoIndex = inventario.findIndex(producto => producto.nombre === nombre); // = indice
    if(productoIndex !== -1){
        inventario.splice(productoIndex, 1);
        alert(`Producto ${nombre} Eliminado del inventario`)
    }else{
        alert(`Producto ${nombre} no exoste en el inventario`)
    }
}

/// agregar los productos:



