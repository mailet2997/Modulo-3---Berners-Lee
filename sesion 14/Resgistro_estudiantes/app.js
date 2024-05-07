document.addEventListener("DOMContentLoaded", function() {
    let btnRegistrar = document.getElementById("btnRegistrar");
    let tarjetasContainer = document.getElementById("tarjetas");

    btnRegistrar.addEventListener("click", function() {
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let clan = document.getElementById("clan").value.trim();
        let edad = document.getElementById("edad").value.trim();
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

function editarEstudiante(tarjeta) {
    let nuevoNombre = prompt("Ingrese el nuevo nombre:");
    let nuevaEdad = prompt("Ingrese la nueva edad:");
    let nuevoClan = prompt("Ingrese el nuevo clan:");

    let h2 = tarjeta.querySelector("h2");
    let edad = tarjeta.querySelectorAll("p")[1];
    let clan = tarjeta.querySelectorAll("p")[0];

    h2.textContent = nuevoNombre;
    edad.textContent = "Edad: " + nuevaEdad;
    clan.textContent = "Clan: " + nuevoClan;
}

function eliminarEstudiante(tarjeta) {
    if (confirm("¿Estás seguro de que deseas eliminar este estudiante?")) {
        tarjeta.remove();
    }
}
