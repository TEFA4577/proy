function tiposoporte(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#des_tipo_soporte").parent().attr("class","form-group has-success has-feedback col-md-12")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function sistema(){
    if( $("#id_sistema") == null || $("#id_sistema") == 0 ) {
         $('#id_sistema').parent().attr("class", "form-group has-error has-feedback col-md-12");
                    return false;
                }
                else{
                    $('#id_sistema').parent().attr("class", "form-group has-success has-feedback col-md-12");
                    return true;

                }
}
