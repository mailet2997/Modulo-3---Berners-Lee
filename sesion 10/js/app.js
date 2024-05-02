//Bandera de modo nocturno
let modoNocturno = false
// Función para obtener elementos del DOM por su ID
function obtenerElementoPorId(id) {
    return document.getElementById(id);
}

// Función para obtener elementos del DOM por su clase
function obtenerElementosPorClase(clase) {
    return document.getElementsByClassName(clase);
}

// Función para obtener elementos del DOM por su etiqueta
function obtenerElementosPorEtiqueta(etiqueta) {
    return document.getElementsByTagName(etiqueta);
}

// Función para crear un nuevo elemento y añadirlo al DOM
function agregarTarea() {
    let tareaInput = obtenerElementoPorId("tareaInput");
    let nuevaTareaTexto = tareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        let listaTareas = obtenerElementoPorId("listaTareas");
        let nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = `
            <span>${nuevaTareaTexto}</span>
            <div class="padresBtns">
            <div class="img-dad">
              <img src="/img/raccoon-dance.gif" alt="racoon-dance">

            </div>
            <button class="completarBtn">Completar</button>
            <button class="eliminarBtn">Eliminar</button>
            </div>
        `;

        listaTareas.appendChild(nuevaTarea);
        tareaInput.value = "";
    } else {
        alert("Por favor, ingresa una tarea válida.");
    }
}

// Función para marcar una tarea como completada
function completarTarea(event) {
    let tarea = event.target.parentNode.parentNode;
    tarea.classList.toggle("completada");
}

// Función para eliminar una tarea de la lista
function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.parentNode.removeChild(tarea);

}

// Evento click para el botón de agregar tarea
let agregarBtn = obtenerElementoPorId("agregarBtn");
agregarBtn.addEventListener("click", agregarTarea);

// Delegación de eventos para marcar como completada y eliminar tareas
let listaTareas = obtenerElementoPorId("listaTareas");
listaTareas.addEventListener("click", function(event) {
    if (event.target.classList.contains("completarBtn")) {
        completarTarea(event);
    } else if (event.target.classList.contains("eliminarBtn")) {
        eliminarTarea(event);
    }
});

//Funsion para modo nocturno
function temaNocturno() {
    modoNocturno = !modoNocturno; //asigno valor true
    document.body.classList.toggle("nocturno", modoNocturno);
    
}
//evento del boton cambio de tema
let nocBtn = obtenerElementoPorId("btnModoNocturno")
nocBtn.addEventListener("click", temaNocturno)

//Funcion de insertar imagen
function insertarImagen(){
    let inputImagen = obtenerElementoPorId("inputImagen");
    let file = inputImagen.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(event) {
                let imgen = document.createElement("img");
                let contain = document.querySelector(".imagenes")
                imgen.src = event.target.result;
                contain.appendChild(imgen)
                // document.body.appendChild(imgen);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Por favor, selecciona una imagen.");
        }

}

//Evento de click para insertar la imagen;
let btnInsertarImagen = obtenerElementoPorId("btnInsertarImagen");
btnInsertarImagen.addEventListener("click", insertarImagen)

