localStorage.setItem('pizza', 3000)
localStorage.setItem('gaseosa', 9000)
localStorage.setItem('pizza', 15000)
localStorage.setItem('pizza', 5000)


function solicitar_comida() {
    let comida_solicitada = document.querySelector('#pedido_comida').value
    if (comida_solicitada != 'pagar') {
        if (localStorage.getItem(comida_solicitada) != null) {
            let precio_comida = parseInt(localStorage.getItem(comida_solicitada))
            let total_a_pagar = 0
            if (localStorage.getItem('precio_pago') == null) {
                total_a_pagar = total_a_pagar + precio_comida
                localStorage.setItem('precio_pago', total_a_pagar)

            } else {
                total_a_pagar = parseInt(localStorage.getItem('precio_pago'))
                total_a_pagar = total_a_pagar + precio_comida
                localStorage.setItem('precio_pago', total_a_pagar)
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'No existe el plato solicitado',
                text: 'Digite algo bien... burro',
            })
            document.querySelector('#pedido_comida').value = ''
        }
    } else {
        let precio_factura = localStorage.getItem('precio_pago')
        Swal.fire({
            icon: 'info',
            title: `El precio a pagar es $${precio_factura}`,
        })

        localStorage.removeItem('precio_pago')
    }

}