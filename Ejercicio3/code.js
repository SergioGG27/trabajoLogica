

function cliente(){
    var contenedor = document.querySelector('.container')
var eleccion_cliente = document.querySelector('#opciones_usuario').value



if(eleccion_cliente === 'nino'){
    contenedor.lastElementChild.innerHTML = ""
    contenedor.lastElementChild.innerHTML = 'Reclama un Jugo'

    document.querySelector('#opciones_usuario2').style.display = 'none';

} else if(eleccion_cliente === 'mayor_edad'){
    
    contenedor.lastElementChild.innerHTML = ""
    contenedor.lastElementChild.innerHTML = 'Reclama una cerveza'

    document.querySelector('#opciones_usuario2').style.display = 'block';
} 



}

function cliente2(){
var contenedor = document.querySelector('.container')

    
    var eleccion_cliente2 = document.querySelector('#opciones_usuario2').value


    if(eleccion_cliente2 === 'hombre'){

        
        
        contenedor.lastElementChild.innerHTML += '<br> reclama una Pizza Hawaina'

        
        
    }else{
        
        
        contenedor.lastElementChild.innerHTML += '<br> reclama una Pizza tres carnes '
        
    }

}