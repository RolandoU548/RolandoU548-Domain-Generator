/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document
    .getElementById("onTimeButton")
    .addEventListener("click", generarListaDominios);
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

var generarListaDominios = function() {
  for (let nameGenerated of listaDominios) {
    let list = document.createElement("li");
    list.classList.add("list-group-item", "text-start");
    list.innerHTML = nameGenerated;
    document.getElementById("lista").appendChild(list);
    document.getElementById("lista").appendChild(document.createElement("br"));
  }
  document
    .getElementById("onTimeButton")
    .removeEventListener("click", generarListaDominios);
};
