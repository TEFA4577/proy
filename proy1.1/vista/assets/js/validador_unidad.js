function unidad(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#des_unidad").parent().attr("class","form-group has-success has-feedback col-md-8")
            tecla_especial = true;
            break;
        }
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function institucion(){
    if( $("#id_institucion") == null || $("#id_institucion") == 0 ) {
                    return false;
                }
                else{
                    $('#id_institucion').parent().attr("class", "form-group has-success has-feedback col-md-12");
                    return true;

                }
}

function jurisdiccion(){
    if( $("#id_jurisdiccion") == null || $("#id_jurisdiccion") == 0 ) {
                    return false;
                }
                else{
                    $('#id_jurisdiccion').parent().attr("class", "form-group has-success has-feedback col-md-6");
                    return true;

                }
}

function localidad(){
    if( $("#id_localidad") == null || $("#id_localidad") == 0 ) {
                    return false;
                }
                else{
                    $('#id_localidad').parent().attr("class", "form-group has-success has-feedback col-md-6");
                    return true;

                }
}

function edificio(){
    if( $("#id_edificio") == null || $("#id_edificio") == 0 ) {
                    return false;
                }
                else{
                    $('#id_edificio').parent().attr("class", "form-group has-success has-feedback col-md-9");
                    return true;

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


function responsable(){
    if( $("#id_funcionario_jefe_unidad") == null || $("#id_funcionario_jefe_unidad") == 0 ) {
                    return false;
                }
                else{
                    $('#id_funcionario_jefe_unidad').parent().attr("class", "form-group has-success has-feedback col-md-12");
                    return true;

                }
}

function dependencia(){
    if( $("#unidad_dependiente") == null || $("#unidad_dependiente") == 0 ) {
                    return false;
                }
                else{
                    $('#unidad_dependiente').parent().attr("class", "form-group has-success has-feedback col-md-12");
                    return true;

                }
}