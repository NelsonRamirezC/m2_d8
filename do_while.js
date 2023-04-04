


//ejecuta de 1 a N veces
let respuesta;
let regex = /^[0-9]+$/
do{
    respuesta = prompt("ingrese un número")
    //si es número test retorna un verdadero 
    //como while se repite mientras condicion sea verdadera, tenemos que negarla
}while(!regex.test(respuesta)) //falso para salir
