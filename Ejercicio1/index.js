function sumatoria_ejercicio1(){

    let sumatoria_total = document.querySelector('#numero-ejercicio').value

    let operacion_total = 0

for (let i = 1; i <= sumatoria_total; i++) {
    operacion_total = operacion_total + i
    }
    document.querySelector('#total-sumatoria-resultado').innerHTML += `la sumatoria total es ${operacion_total} `

}

