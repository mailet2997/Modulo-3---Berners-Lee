document.addEventListener("DOMContentLoaded", ()=>{
    //llamado de funcion
    consumirAPI()
})
async function consumirAPI(){
    //URL de la API a consumir
    const URL = "https://jsonplaceholder.typicode.com/photos"

    //se realiza una solicitud a la API utilizandoo fecth y se espera la respuesta
    const respuesta = await fetch(URL)
    
    //se espera a que la respuesta se convierta en formato JSON
    const datos = await respuesta.json()

    //llamar funcion para imprimir los datos en la interfaz
    imprimirDatos(datos.slice(1,100));

}

function imprimirDatos(datos){
    datos.forEach(element => {
        console.log(datos);
        
        document.body.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${element.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
            </div>
        </div>
        `
    });
}