const orderFood = ()=>{//funcion anonima auto
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const success = Math.random()< 0.8 //80% de probabilidad de existo
            if(success){
                resolve("Pedido entregado, yam yam")
            }else{
                reject("Wey lo siento, te toco cocinar, o pide por didi, pedido no entregado")
            }
        }, 3000); // 0 0.1, 0.2, 0.3....-1
    })
}
document.addEventListener("DOMContentLoaded", ()=>{
    const orderButton = document.querySelector("#orderButton");
    const status = document.querySelector("#status");

    orderButton.addEventListener("click", ()=>{
        status.textContent = "Realizando pedido...";
        orderFood()
            .then((message)=>{
                status.textContent = message
            })
            .catch((error)=>{
                status.textContent = error
            });
    });
})