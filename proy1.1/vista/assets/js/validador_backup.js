function obs_backup(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";//Se define todo el abecedario que se quiere que se muestre.
    especiales = [8, 37, 39, 46, 6, 9]; //Es la validación del KeyCodes, que teclas recibe el campo de texto.
    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            $("#observacion_backup").parent().attr("class","form-group has-success has-feedback col-md-12")
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
      }
}

function fecha_inicio(){
    if( $("#fecha_inicio") == null || $("#fecha_inicio") == 0 ) {
                    return false;
                }
                else{
                    $('#fecha_inicio').parent().attr("class", "form-group has-success has-feedback col-md-6");
                    return true;

                }
}

function fecha_fin(){
    if( $("#fecha_fin") == null || $("#fecha_fin") == 0 ) {
                    return false;
                }
                else{
                    $('#fecha_fin').parent().attr("class", "form-group has-success has-feedback col-md-6");
                    return true;

                }
}

function sistema(){
    if( $("#id_sistema") == null || $("#id_sistema") == 0 ) {
                    return false;
                }
                else{
                    $('#id_sistema').parent().attr("class", "form-group has-success has-feedback col-md-6");
                    return true;

                }
}

function medio_backup(){
    if( $("#tipo_backup") == null || $("#tipo_backup") == 0 ) {
                    return false;
                }
                else{
                    $('#tipo_backup').parent().attr("class", "form-group has-success has-feedback col-md-6");
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
