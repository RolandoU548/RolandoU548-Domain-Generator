/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#dominio").innerHTML = generarDominio();
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
