/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    generarListaDominios(listaDominios, "lista");
  });
};

let listaPronombres = ["the", "our", "a", "my"];
let listaAdj = ["great", "big", "huge", "awesome"];
let listaSujetos = ["jogger", "racoon", "detective", "squirrel"];
let listaExtensiones = [".com", ".net", ".us", ".io"];
let listaDominios = [];
for (let pronombre of listaPronombres) {
  for (let extension of listaExtensiones) {
    for (let sujeto of listaSujetos) {
      for (let adjetivo of listaAdj) {
        let nombreDominio = `${pronombre}${adjetivo}${sujeto}${extension}`;
        listaDominios.push(nombreDominio);
        console.log(nombreDominio);
      }
    }
  }
}

let generarDominio = () => {
  return listaDominios[Math.floor(Math.random() * 256)];
};

let generarListaDominios = (array, id) => {
  for (let nameGenerated of array) {
    let list = document.createElement("li");
    list.classList.add("list-group-item", "text-start");
    list.innerHTML = nameGenerated;
    document.getElementById(id).appendChild(list);
    document.getElementById(id).appendChild(document.createElement("br"));
  }
};
