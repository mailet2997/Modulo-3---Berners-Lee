document.addEventListener("DOMContentLoaded", function() {
    let parrafo = document.getElementById("parrafo");
    let inputAtributo = document.getElementById("inputAtributo");
    let inputValorAtributo = document.getElementById("inputValorAtributo");
    let btnAgregarAtributo = document.getElementById("btnAgregarAtributo");
    let btnEliminarAtributo = document.getElementById("btnEliminarAtributo");
    let btnManipularClases = document.getElementById("btnManipularClases");
    let btnManipularPropiedades = document.getElementById("btnManipularPropiedades");

    // Añadir atributos y acceder
    btnAgregarAtributo.addEventListener("click", function() {
        let nombreAtributo = inputAtributo.value.trim();
        let valorAtributo = inputValorAtributo.value.trim();

        if (nombreAtributo !== "" && valorAtributo !== "") {
            parrafo.setAttribute(nombreAtributo, valorAtributo);
            alert(`Atributo '${nombreAtributo}' con valor '${valorAtributo}' añadido.`);
        } else {
            alert("Por favor, ingresa un nombre y un valor de atributo.");
        }
    });

    alert("El párrafo tiene los siguientes atributos:", parrafo.getAttributeNames());

    // Modificar o eliminar atributos
    btnEliminarAtributo.addEventListener("click", function() {
        let nombreAtributo = inputAtributo.value.trim();

        if (nombreAtributo !== "") {
            parrafo.removeAttribute(nombreAtributo);
            alert(`Atributo '${nombreAtributo}' eliminado.`);
        } else {
            alert("Por favor, ingresa un nombre de atributo a eliminar.");
        }
    });

    // Manipular clases CSS
    btnManipularClases.addEventListener("click", function() {
        parrafo.classList.toggle("resaltado");
        alert("Clase 'resaltado' toggleada.");
    });

    // Manipular propiedades
    btnManipularPropiedades.addEventListener("click", function() {
        alert("Nombre del nodo:", parrafo.nodeName);
        alert("Contenido del texto:", parrafo.textContent);
        alert("HTML interno:", parrafo.innerHTML);
    });
});
