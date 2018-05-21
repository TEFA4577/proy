function nombres(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#nombres_funcionario").parent().attr("class","form-group has-success has-feedback col-md-4")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function paterno(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#paterno_funcionario").parent().attr("class","form-group has-success has-feedback col-md-4")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function materno(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#materno_funcionario").parent().attr("class","form-group has-success has-feedback col-md-4")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function telefono(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "0123456789";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#tel_funcionario").parent().attr("class","form-group has-success has-feedback col-md-4")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}


function unidad(){
    if( $("#id_unidad") == null || $("#id_unidad") == 0 ) {
                    return false;
                }
                else{
                    $('#id_unidad').parent().attr("class", "form-group has-success has-feedback col-md-8");
                    return true;

                }
}

function cargo(){
    if( $("#id_unidad") == null || $("#id_cargo") == 0 ) {
                    return false;
                }
                else{
                    $('#id_cargo').parent().attr("class", "form-group has-success has-feedback col-md-6");
                    return true;

                }
}

function estado_cargo(){
    if( $("#id_unidad") == null || $("#id_estado_cargo") == 0 ) {
                    return false;
                }
                else{
                    $('#id_estado_cargo').parent().attr("class", "form-group has-success has-feedback col-md-6");
                    return true;

                }
}