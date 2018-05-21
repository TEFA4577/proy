function usuario(){
    if( $("#id_usuario") == null || $("#id_usuario") == 0 ) {
                    return false;
                }
                else{
                    $('#id_usuario').parent().attr("class", "form-group has-success has-feedback col-md-12");
                    return true;

                }
}

function sistema(){
    if( $("#id_sistema") == null || $("#id_sistema") == 0 ) {
                    return false;
                }
                else{
                    $('#id_sistema').parent().attr("class", "form-group has-success has-feedback col-md-12");
                    return true;

                }
}
