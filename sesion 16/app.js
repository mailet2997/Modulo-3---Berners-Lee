// Tema de Promesas

// Ejemplo de promesa simple
function promesaSimple() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("¡Promesa resuelta!");
        }, 2000);
    });
}

// Tema de Async - Await

// Función asincrónica que utiliza async - await
async function asyncFunction() {
    try {
        const resultado = await promesaSimple();
        console.log("Resultado de la promesa:", resultado);
    } catch (error) {
        console.error("Error al ejecutar la promesa:", error);
    }
}

// Tema de .then(function resolve)

promesaSimple().then((resultado) => {
    console.log("Resultado utilizando .then:", resultado);
});

// Tema de .catch(function reject)

promesaSimple().catch((error) => {
    console.error("Error utilizando .catch:", error);
});

// Tema de .then(function resolve, function reject)

promesaSimple()
    .then((resultado) => {
        console.log("Resultado utilizando .then y .catch:", resultado);
    })
    .catch((error) => {
        console.error("Error utilizando .then y .catch:", error);
    });

// Tema de .finally(function end)

promesaSimple()
    .then((resultado) => {
        console.log("Resultado utilizando .finally:", resultado);
    })
    .finally(() => {
        console.log("La promesa ha finalizado.");
    });

// Tema de Promise.all(list)

const promesa1 = Promise.resolve("Promesa 1 resuelta");
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promesa 2 resuelta");
    }, 1500);
});
const promesa3 = Promise.reject("Promesa 3 rechazada");

Promise.all([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Resultados de Promise.all:", resultados);
    })
    .catch((error) => {
        console.error("Error en Promise.all:", error);
    });

// Tema de Promise.allSetteld(list)

Promise.allSettled([promesa1, promesa2, promesa3])
    .then((resultados) => {
        console.log("Resultados de Promise.allSettled:", resultados);
    });

// Tema de Promise.any(list)

Promise.any([promesa1, promesa2, promesa3])
    .then((resultado) => {
        console.log("Resultado de Promise.any:", resultado);
    });

// Tema de Promise.race(list)

Promise.race([promesa1, promesa2, promesa3])
    .then((resultado) => {
        console.log("Resultado de Promise.race:", resultado);
    })
    .catch((error) => {
        console.error("Error en Promise.race:", error);
    });

// Tema de Promise.resolve(value)

const promesaResuelta = Promise.resolve("¡Promesa resuelta!");
console.log("Promesa resuelta:", promesaResuelta);

// Tema de Promise.reject(reason)

const promesaRechazada = Promise.reject("¡Promesa rechazada!");
console.log("Promesa rechazada:", promesaRechazada);
