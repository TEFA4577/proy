function munidad(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "0123456789";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#cod_unidad").parent().attr("class","form-group has-success has-feedback col-md-4")
            tecla_especial = true;
            break;
        }
        }
    
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function unidad(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#des_unidad").parent().attr("class","form-group has-success has-feedback col-md-8")
            tecla_especial = true;
            break;
        }
        }
    
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function piso(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "0123456789";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#piso_unidad").parent().attr("class","form-group has-success has-feedback col-md-3")
            tecla_especial = true;
            break;
        }
        }
    
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}



