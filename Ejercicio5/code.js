function generar_tabla(){
    let inicio = document.querySelector('#numero_tabla').value
    let limite = document.querySelector('#limite_tabla').value
    let multiplicacion = 0

    for ( let x = 1; x <= limite; x++){
        multiplicacion= x * inicio
        document.querySelector('#resultado_tabla').innerHTML += ` <h5> ${inicio} X ${x} = ${multiplicacion} </h5>
        `
    }

}