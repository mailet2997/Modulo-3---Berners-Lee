// JavaScript
function cambiarColor() {
    document.body.style.backgroundColor = "red";
}

function mostrarMensaje() {
    alert("¡Hola, mundo!");
}

function abrirURL() {
    window.open("https://www.google.com");
}

function cambiarTamaño() {
    let caja = document.getElementById("caja");
    if (caja) {
        caja.style.width = "200px";
        caja.style.height = "200px";
    }
}

function irASeccion() {
    document.getElementById("seccion").scrollIntoView();
}

document.getElementById("btnMostrarOcultar").onclick = function() {
    let elemento = document.getElementById("elemento");
    elemento.style.display = (elemento.style.display === "none") ? "block" : "none";
};

document.getElementById("btnCambiarFondo").onclick = function() {
    let colores = ["red", "blue", "green", "yellow", "orange"];
    let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
};

document.getElementById("btnValidarForm").onclick = function() {
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    if (nombre === "" || email === "") {
        alert("Por favor, completa todos los campos.");
    }
};

document.getElementById("btnMostrarHora").onclick = function() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    document.getElementById("hora").innerText = hora + ":" + minutos + ":" + segundos;
};

document.getElementById("btnReproducirSonido").onclick = function() {
    let audio = new Audio('sonido.mp3');
    audio.play();
};

document.getElementById("inputTexto").addEventListener("keyup", function() {
    document.getElementById("texto").innerText = this.value;
});
