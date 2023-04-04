let parrafo1 = document.createElement("p");
parrafo1.textContent = "Noticia 1";
let parrafo2 = document.createElement("p");
parrafo2.textContent = "Noticia 2";

let section = document.querySelector(".noticias");


section.prepend(parrafo1) //agrega al principio - simil unshift
section.appendChild(parrafo2) //agrega al final - simil push


let subtitulo = document.querySelector(".noticias h2")
section.removeChild(subtitulo);


//USANDO INNERHTML E INNERTEXT

let parrafoMensaje = document.querySelector(".contactos p")
parrafoMensaje.innerText = "Este es un parrafo modificado con javascript"
parrafoMensaje.innerHTML = "<strong>Esto está destacado</strong>"


let productos = ["Cinturones", "Poleras", "Jeans", "Faldas", "Carteras"];

let sectionProductos = document.getElementById("productos")
console.log(sectionProductos)
/* 
let lista = "<ul>"
for(let i = 0; i< productos.length; i++){
    lista += `<li>${productos[i]}</li>`
}
lista += "</ul>"
sectionProductos.innerHTML= lista; */

let cuerpoTabla = document.getElementById("cuerpoTabla");
for(let i = 0; i< productos.length; i++){
    let item = `
        <tr>
            <td>${i+1}</td>
            <td>${productos[i]}</td>
        </tr>
    `
    cuerpoTabla.innerHTML +=item;
}
