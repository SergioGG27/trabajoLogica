function validar_par_inpar(){
    var numero_usuario = document.querySelector('#numero-ejercicio').value
    
    let par = 2

    if (numero_usuario % par == 0){
        document.querySelector('#total-sumatoria-resultado').innerHTML += `el numero ${numero_usuario} que ingresaste es par`
    }else{
        document.querySelector('#total-sumatoria-resultado').innerHTML += `El numero ${numero_usuario} que ingresaste es impar`
    }

}