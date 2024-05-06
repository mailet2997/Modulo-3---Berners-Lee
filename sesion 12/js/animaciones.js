document.addEventListener("DOMContentLoaded", function(){
    const pasoElemento = document.querySelectorAll(".gato");

    let modoNocturno = false; // Inicializamos el modo nocturno como falso

    function temaNocturno() {
        modoNocturno = !modoNocturno; // Alternamos el modo día/noche
        document.body.classList.toggle("nocturno", modoNocturno); // Toggle de la clase nocturno
    }

    // Función para cambiar el tema cada 30 segundos
    setInterval(() => {
        temaNocturno();
    }, 30000); // 30 segundos

    pasoElemento.forEach(gato => {
        gato.addEventListener("click", function (){
            // Detener la animacion al hacer click
            gato.style.animationPlayState = "paused";

            // Luego de pausarse, vuelve y se reinicia la animacion
            setTimeout(() => {
                gato.style.animationPlayState = "running";
            }, 2000); // 2000 milisegundos (2s)
        })
    });

    // Aplicamos el tema nocturno inicialmente
    temaNocturno();
});

