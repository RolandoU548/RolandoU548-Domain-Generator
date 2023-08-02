let pronoun = ['the', 'our', 'a', 'my'];
let adj = ['great', 'big', 'huge', 'awesome'];
let noun = ['jogger', 'racoon', 'detective', 'squirrel'];
let extensions = ['.com', '.net', '.us', '.io'];

const generarDominio= (listaPronombres, listaAdj, listaSujetos, listaExtensiones) => {
    for (let pronombre of listaPronombres){
        for (let extension of listaExtensiones){
            for (let sujeto of listaSujetos){
                for (let adjetivo of listaAdj){
                    nombreDominio = `${pronombre}${adjetivo}${sujeto}${extension}`;
                    console.log(nombreDominio);
                }
            }
        }
    }
}

generarDominio(pronoun, adj, noun, extensions);
