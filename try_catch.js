
//SÓLO CAPTURA EXCEPCIONES / ERRORES SÍNCRONAS.
try {
    let resultado = 10;
    if(resultado < 10){
        throw new Error("Número es menor que el exigido (10)")
    }
    let division = 10/0;
    if(division == Infinity){
        throw new Error("Se ha generado una división por 0")
    }
} catch (error) {
    alert(error)
} finally{
    alert("Programa concluído")
}

