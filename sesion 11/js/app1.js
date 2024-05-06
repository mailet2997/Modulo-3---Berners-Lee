document.addEventListener("DOMContentLoaded", function() {
    let listaTareas = document.getElementById("listaTareas");
    let inputTarea = document.getElementById("inputTarea");
    let btnAgregarTarea = document.getElementById("btnAgregarTarea");
    let inputImagen = document.getElementById("inputImagen");
    let btnInsertarImagen = document.getElementById("btnInsertarImagen");
    let btnModoNocturno = document.getElementById("btnModoNocturno");
    let modoNocturno = false;

    // Función para agregar una nueva tarea a la lista
    function agregarTarea() {
        let nuevaTareaTexto = inputTarea.value.trim();

        if (nuevaTareaTexto !== "") {
            let nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = nuevaTareaTexto;

            // Agregar botón de eliminar tarea
            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";
            btnEliminar.className = "btn-eliminar";
            nuevaTarea.appendChild(btnEliminar);

            listaTareas.appendChild(nuevaTarea);
            inputTarea.value = "";
        } else {
            alert("Por favor, ingresa una tarea válida.");
        }
    }

    // Evento click para agregar tarea
    btnAgregarTarea.addEventListener("click", agregarTarea);

    // Evento keypress para agregar tarea al presionar Enter
    inputTarea.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            agregarTarea();
        }
    });

    // Evento click para eliminar tarea
    listaTareas.addEventListener("click", function(event) {
        if (event.target.classList.contains("btn-eliminar")) {
            let tarea = event.target.parentNode;
            tarea.parentNode.removeChild(tarea);
        }
    });

    // Función para insertar una imagen en la página
    function insertarImagen() {
        let file = inputImagen.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function(event) {
                let imagen = document.createElement("img");
                imagen.src = event.target.result;
                document.body.appendChild(imagen);
            };
            reader.readAsDataURL(file);
        } else {
            alert("Por favor, selecciona una imagen.");
        }
    }

    // Evento click para insertar imagen
    btnInsertarImagen.addEventListener("click", insertarImagen);

    // Función para alternar entre modo diurno y nocturno
    function alternarModoNocturno() {
        modoNocturno = !modoNocturno;
        document.body.classList.toggle("modo-nocturno", modoNocturno);
    }

    // Evento click para alternar modo diurno/nocturno
    btnModoNocturno.addEventListener("click", alternarModoNocturno);
});
