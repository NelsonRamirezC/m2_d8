

//PUEDE EJECUTARSE DE 0 A N VECES

let regex = /^[0-9]+$/
let respuesta = prompt("Ingrese un número.")

while(!regex.test(respuesta)){
    respuesta = prompt("Debe ingresar un número válido!")
}

alert("continuamos con el código.")