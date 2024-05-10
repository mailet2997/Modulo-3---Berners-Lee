//simulando la realizacion de tareas un por una
const delay = (ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms))
};
// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

const performTask = async(task)=>{
    const taskElement = document.createElement("li");
    taskElement.textContent= `Realizando Tarea: ${task}`;
    document.getElementById("taskList").appendChild(taskElement);

    await delay(2000)//simular el tiempo que lleva realizar cada tarea (2s)

    taskElement.textContent += "- Completada"
}

document.addEventListener("DOMContentLoaded", ()=>{
    const startButton = document.querySelector("#startButton");

    startButton.addEventListener("click", async ()=>{
        startButton.disabled = true //desactivar el boton mientras se esten realizando las tareas.

        try{
            await performTask("Tarea 1")
            await performTask("Tarea 2")
            await performTask("Tarea 3")
            await performTask("Tarea 4")
            await performTask("Tarea 5")

            alert("Todas las tareas han sido completadas")
        }catch(error){
            alert(`Error ${error}`);
        }finally{
            startButton.disabled = false; //Reactiva el boton luego de realziar las tareas
        }
    });
    
});