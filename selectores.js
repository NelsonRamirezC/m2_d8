//SELECTOR DE ID
let titulo = document.getElementById("principal");
//console.log(titulo)


//let selectorTag = document.getElementsByTagName("h2");

/* console.log(selectorTag.length)
for(let i = 0; i < selectorTag.length; i++){
    console.log(selectorTag[i])
}
 */

let selectorClase = document.getElementsByClassName("destacado")
//console.log(selectorClase)


let selectorQuery = document.querySelector("#contactos .destacado");
//console.log(selectorQuery)

//DIFERENCIA ENTRE HTMLCOLLECTION Y NODELIST
let selectorTag = document.getElementsByTagName("h2");
let selectorQueryAll = document.querySelectorAll("h2");

let nuevaSection = document.getElementById("nuevaSection");
nuevaSection.innerHTML="<h2>Nuevo subtitulo</h2>"


//PODEMOS TRANSFORMAR UN HTMLCOLLECTION Y NODELIST EN UN ARRAY UTILIZANDO
//EL OPERADOR SPREAD (...)
let array = [...selectorTag]
console.log(array)