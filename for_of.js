
let rut = "1.11@1.11$1-1"

for (const iterator of rut) {
    let regex = /^[0-9.k-]+$/
    if(!regex.test(iterator)){
        console.log("Este elemento no coincide: ", iterator)
    }
}