document.addEventListener("DOMContentLoaded", function() {
    let btnRegistrar = document.getElementById("btnRegistrar");
    let tarjetasContainer = document.getElementById("tarjetas");

    btnRegistrar.addEventListener("click", function() {
        let nombre = document.getElementById("nombre").value.trim();
        let apellido = document.getElementById("apellido").value.trim();
        let foto = document.getElementById("foto").files[0];

        if (nombre && apellido && foto) {
            let reader = new FileReader();
            reader.onload = function(event) {
                let tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");
                tarjeta.innerHTML = `
                    <img src="${event.target.result}" alt="Foto de ${nombre} ${apellido}">
                    <h2>${nombre} ${apellido}</h2>
                `;
                tarjetasContainer.appendChild(tarjeta);
            };
            reader.readAsDataURL(foto);

            // Limpiar campos
            document.getElementById("nombre").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("foto").value = "";
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});
