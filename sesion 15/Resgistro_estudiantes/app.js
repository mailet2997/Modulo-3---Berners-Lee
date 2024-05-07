document.addEventListener("DOMContentLoaded", function() {
    let btnRegistrar = document.getElementById("btnRegistrar");
    let tarjetasContainer = document.getElementById("tarjetas");

    //Funcion mostrar estudiantes
    cargarEstudiantes()

    btnRegistrar.addEventListener("click", function() {
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let clan = document.getElementById("clan").value;
        let edad = document.getElementById("edad").value;
        let foto = document.getElementById("foto").files[0];

        if (nombre && apellido && clan && edad && foto) {
            let reader = new FileReader();
            reader.onload = function(event) {
                let tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");
                tarjeta.innerHTML = `
                    <img src="${event.target.result}" alt="Foto de ${nombre} ${apellido}">
                    <h2>${nombre} ${apellido}</h2>
                    <p><strong>Clan:</strong> ${clan}</p>
                    <p><strong>Edad:</strong> ${edad}</p>
                    <button class="editar-button">Editar</button>
                    <button class="eliminar-button">Eliminar</button>
                `;
                tarjetasContainer.appendChild(tarjeta);

                //Guardar estudiante en LocalStorage
                guardarEstudiante(nombre, apellido, clan, edad, event.target.result)

                // Agregar eventos de editar y eliminar al botón correspondiente
                let editarButton = tarjeta.querySelector(".editar-button");
                editarButton.addEventListener("click", function() {
                    editarEstudiante(tarjeta);
                });

                let eliminarButton = tarjeta.querySelector(".eliminar-button");
                eliminarButton.addEventListener("click", function() {
                    eliminarEstudiante(tarjeta);
                });
            };
            reader.readAsDataURL(foto);

            // Limpiar campos
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("clan").value = "";
            document.getElementById("edad").value = "";
            document.getElementById("foto").value = "";
        } else {
            alert("Por favor, completa todos los campos.");
        }
       
    });
});

//funciones
//funciones de editar

function editarEstudiante(tarjeta) {
    let nuevoNombre = prompt("Ingrese el nuevo nombre:");
    let nuevoApellido = prompt("Ingrese el nuevo apellido: ")
    let nuevaEdad = prompt("Ingrese la nueva edad:");//null
    let nuevoClan = prompt("Ingrese el nuevo clan:");

    let h2 = tarjeta.querySelector("h2");
    let edad = tarjeta.querySelectorAll("p")[1];
    let clan = tarjeta.querySelectorAll("p")[0];

    h2.textContent = nuevoNombre  + "" +nuevoApellido;

    edad.textContent = "Edad: " + nuevaEdad;
    clan.textContent = "Clan: " + nuevoClan;

    // Actualizar informacion en el localStorage
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
    estudiantes.forEach(function(estudiante){
        if(estudiante.nombre === tarjeta.dataset.nombre && estudiante.apellido === tarjeta.dataset.apellido){
            estudiante.nombre = nuevoNombre 
            estudiante.apellido = nuevoApellido;
            estudiante.edad = nuevaEdad;
            estudiante.clan = nuevoClan;
        }
               
    });
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes))
}
//set, se envia convertido de string a JSON atraves de .stringify
//get, se trae de JSON a Objeto atraves de un .parse

//Funcion de eliminar
function eliminarEstudiante(tarjeta) {
    if (confirm("Estás seguro de que deseas eliminar este estudiante?")) {
        tarjeta.remove();

        // Eliminar estudiante del localStorage
        let estudiantes = JSON.parse(localStorage.getItem("estudiantes"));
        estudiantes = estudiantes.filter(function(estudiante) {
            return estudiante.nombre !== tarjeta.dataset.nombre || estudiante.apellido !== tarjeta.dataset.apellido;
        });
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    }
}

//Funcion Guardar estudiante
function guardarEstudiante(nombre, apellido, clan, edad, foto){
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    estudiantes.push({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        clan: clan,
        foto: foto
    })
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function cargarEstudiantes() {
    let tarjetasContainer = document.getElementById("tarjetas");
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    estudiantes.forEach(function(estudiante) {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");
        tarjeta.innerHTML = `
            <img src="${estudiante.foto}" alt="Foto de ${estudiante.nombre} ${estudiante.apellido}">
            <h2>${estudiante.nombre} ${estudiante.apellido}</h2>
            <p><strong>Clan:</strong> ${estudiante.clan}</p>
            <p><strong>Edad:</strong> ${estudiante.edad}</p>
            <button class="editar-button">Editar</button>
            <button class="eliminar-button">Eliminar</button>
        `;
        tarjeta.dataset.nombre = estudiante.nombre;
        tarjeta.dataset.apellido = estudiante.apellido;
        tarjetasContainer.appendChild(tarjeta);

        // Agregar eventos de editar y eliminar al botón correspondiente
        let editarButton = tarjeta.querySelector(".editar-button");
        editarButton.addEventListener("click", function() {
            editarEstudiante(tarjeta);
        });

        let eliminarButton = tarjeta.querySelector(".eliminar-button");
        eliminarButton.addEventListener("click", function() {
            eliminarEstudiante(tarjeta);
        });
    });
}
