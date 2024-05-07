//Selectores
const form = document.querySelector("form");
const name_pet = document.querySelector("#name_pet");
const name_person = document.querySelector("#name_person");
const phone_person = document.querySelector("#phone_person");
const date_cite = document.querySelector("#date_cite");
const time_cite = document.querySelector("#time_cite");
const description = document.querySelector("#description");
const container = document.querySelector(".container-cites");

let pets = [];
let isUpdating = false;

let infoPet = {
  name: "",
  person: "",
  phone: "",
  dateCite: "",
  timeCite: "",
  symtoms: "",
  id: "",
};

//eventos

document.addEventListener("DOMContentLoaded", () => {
  const petsCache = localStorage.getItem("pets");
  if (petsCache) {
    pets = JSON.parse(petsCache);
    printPets();
    addEventListenerBtns();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  infoPet.name = name_pet.value;
  infoPet.person = name_person.value;
  infoPet.phone = phone_person.value;
  infoPet.dateCite = date_cite.value;
  infoPet.timeCite = time_cite.value;
  infoPet.symtoms = description.value;

  if (Object.keys(infoPet).some((key) => key !== "id" && !infoPet[key])) return;

  //Si  isUpdating es falso quiere decir que estamos agregando, y si no hay un id tambien
  if (!isUpdating && !infoPet.id) {
    pets.push({ ...infoPet, id: Date.now() });
  } else {
    const index = pets.findIndex((pet) => pet.id === infoPet.id);
    pets[index] = infoPet;
    isUpdating = false;
  }

  resetForm();

  printPets();
  addEventListenerBtns();
});

//Functions
function addEventListenerBtns() {
  const btnsUpdate = document.querySelectorAll(".btn-update");
  const btnsDelete = document.querySelectorAll(".btn-delete");
  btnsDelete.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      console.log(id);
      pets = pets.filter((pet) => pet.id != id);
      printPets();

      addEventListenerBtns();
    });
  });

  btnsUpdate.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      infoPet.id = id;

      infoPet = pets.find((pet) => pet.id == id);

      name_pet.value = infoPet.name;
      name_person.value = infoPet.person;
      phone_person.value = infoPet.phone;
      date_cite.value = infoPet.dateCite;
      time_cite.value = infoPet.timeCite;
      description.value = infoPet.symtoms;

      isUpdating = true;
    });
  });
}

function printPets() {
  cleanHTML();

  pets.forEach((pet) => {
    container.innerHTML += `
    <div class="card card_cite">
      <div class="card-body">
        <h5 class="card-title fs-3 fw-bold">${pet.name}</h5>
        <p class="card-text">
          <div class="d-flex gap-2">
            <span class="fw-bold">Propietario:</span>
            <span>${pet.person}</span>
          </div>
          <div class="d-flex gap-2">
            <span class="fw-bold">Telefono:</span>
            <span>${pet.phone}</span>
          </div>
          <div class="d-flex gap-2">
            <span class="fw-bold">Fecha:</span>
            <span>${pet.dateCite}</span>
          </div>
          
          <div class="d-flex gap-2">
            <span class="fw-bold">Hora:</span>
            <span>${pet.timeCite}</span>
          </div>
          <div class="d-flex gap-2">
            <span class="fw-bold">Sintomas:</span>
            <span>${pet.symtoms}</span>
          </div>
        </p>
        <div class="d-flex gap-2">
          <button class="btn btn-primary btn-update" data-id="${pet.id}">Editar</button>
          <button class="btn btn-danger btn-delete" data-id="${pet.id}">Eliminar</button>
        </div>
      </div>
    </div>
    `;
  });

  localStorage.setItem("pets", JSON.stringify(pets));
}

function cleanHTML() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function resetForm() {
  isUpdating = false;
  infoPet = {};
  form.classList.remove("was-validated");
  form.reset();
}
