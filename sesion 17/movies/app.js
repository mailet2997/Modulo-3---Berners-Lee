//Selectores
//Seleccionamos el input de busqueda y el contenedor de las cards
const inputSearch = document.querySelector("#search")
const container = document.querySelector(".cards-container")
//Variable para el temporizador
let timer

function loadEventListenerBtn(){
    const btnShowMore = document.querySelectorAll(".btn-show");

    btnShowMore.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            const movieId = btn.getAttribute("movie-id")
            console.log(movieId)
        })
    })
}
// evento de busqueda
inputSearch.addEventListener("input", (event)=>{
    //Limpia el temportizador cada vez que se escribe en el input
    clearTimeout(timer);
    //Establecemos un tiempo de busqueda 500mls
    timer = setTimeout(() => {
        //funcion de busqueda que nos trae el valor actual ingresado en el input
        getMovies(event.target.value)    
    }, 1000);
})

//funcion asincrona para obtener peliculas desde la API
async function getMovies(title){
    const URL = `https://www.omdbapi.com/?apikey=690d22ef&s=${title}`

    const response = await fetch(URL)
    const data = await response.json()
    //funcion para imprimir el rsutlado de la busqueda
    printMovies(data.Search)        
}

function printMovies(movies){
    //funcion para limpiar el contenedor
    cleanHTML()
    //verificar si no hay peliculas con el titulo dado
    if(!movies){
        //crea un mensaje de alerta y lo agrega a otro contenedor
        const titleAlert = document.createElement("h2");
        titleAlert.textContent = "No se encontraron peliculas con ese titulo";
        titleAlert.innerHTML += "&#128532"
        titleAlert.classList.add("alert");
        container.appendChild(titleAlert)
        return;
    }
    //iterar sobre cada pelicula y crea una card HTML para cada una
    movies.forEach(movie =>{
        container.innerHTML += `
        <div class="card">
        <img src="${movie.Poster}" alt="Poster" />
        <h2 class="title-card">${movie.Title}</h2>
        <p>Año: <span>${movie.Year}</span></p>
        <p>Tipo: <span>${movie.Type}</span></p>
        <button type="button" class="btn-show" movie-id="${movie.imdbID}">Ver más</button>
    </div>
        `
    });
    //Carga los eventos de los botones
    loadEventListenerBtn();
}

function cleanHTML(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
        
    }
}