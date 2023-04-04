let persona = {
    nombre: "Nelson",
    apellido: "Ramírez",
    edad: 60,
    rut: "1-1",
}

//LAS LEER LOS VALORES DE LAS PROPIEDAS PODEMOS HACERLO MEDIANTE
// NOTACION DE PUNTO persona.nombre
//NOTACIÓN DE CORCHETE persona["nombre"]

for (const key in persona) {
    console.log(persona[key])
}

let objeto = {
    "nombre-completo": "Nelson Ramírez"
}

console.log(objeto["nombre-completo"])