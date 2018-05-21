

function nombre(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#nombre_funcionario").parent().attr("class","form-group has-success has-feedback col-md-4")
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

function cargo(e){
    if( $("#id_unidad") == null || $("#id_cargo") == 0 ) {
                    return false;
                }
                else{
                    $('#id_cargo').parent().attr("class", "form-group has-success has-feedback col-md-12");
                    return true;

                }
}

function unidad(e){
    if( $("#id_unidad") == null || $("#id_unidad") == 0 ) {
                    return false;
                }
                else{
                    $('#id_unidad').parent().attr("class", "form-group has-success has-feedback col-md-12");
                    return true;
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
            $("#cod_ordenador").parent().attr("class","form-group has-success has-feedback col-md-4")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function marca(e){
    if( $("#id_marca_ordenador") == null || $("#id_marca_ordenador") == 0 ) {
                    return false;
                }
                else{
                    $('#id_marca_ordenador').parent().attr("class", "form-group has-success has-feedback col-md-3");
                    return true;

                }
}

function generacion(e){
    if( $("#id_generacion") == null || $("#id_generacion") == 0 ) {
                    return false;
                }
                else{
                    $('#id_generacion').parent().attr("class", "form-group has-success has-feedback col-md-4");
                    return true;

                }
}

function memoria_ram(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "0123456789";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#ram").parent().attr("class","form-group has-success has-feedback col-md-2")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function tipo_ram(e){
    if( $("#tipo_ram") == null || $("#tipo_ram") == 0 ) {
                    return false;
                }
                else{
                    $('#tipo_ram').parent().attr("class", "form-group has-success has-feedback col-md-2");
                    return true;

                }
}

function so(e){
    if( $("#id_so") == null || $("#id_so") == 0 ) {
                    return false;
                }
                else{
                    $('#id_so').parent().attr("class", "form-group has-success has-feedback col-md-4");
                    return true;

                }
}

function monitor(e){
    if( $("#id_marca_monitor") == null || $("#id_marca_monitor") == 0 ) {
                    return false;
                }
                else{
                    $('#id_marca_monitor').parent().attr("class", "form-group has-success has-feedback col-md-4");
                    return true;

                }
}

function tamaño_monitor(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "0123456789";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#tamaño_monitor").parent().attr("class","form-group has-success has-feedback col-md-2")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function marca_impresora(e){
    if( $("#id_marca_impresora") == null || $("#id_marca_impresora") == 0 ) {
                    return false;
                }
                else{
                    $('#id_marca_impresora').parent().attr("class", "form-group has-success has-feedback col-md-4");
                    return true;

                }
}

function m_impresora(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = "0123456789abcdefghijklmnñopqrstuvwxyz";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9, 45]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#modelo_impresora").parent().attr("class","form-group has-success has-feedback col-md-4")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function obseraciones_ordenador(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#obseraciones_ordenador").parent().attr("class","form-group has-success has-feedback col-md-8")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

