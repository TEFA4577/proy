function nuevo_obs_soporte(e){
	key= e.keyCode || e.which;
	tecla=String.fromCharCode(key).toString();
	letras=" áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	especiales=[8, 37, 39, 46, 6, 9];
	tecla_especial=false
	for (var i in especiales){
		if(key == especiales[i]){
			$("#observacion_soporte").parent().attr("class","form-group has-success has-feedback col-md-12")
			tecla_especial= true;
			break;
		}
	}
	if(letras.indexOf(tecla) == -1 && !tecla_especial){
		return false;
	}
}

function numero(e){
	key= e.keyCode || e.which;
	tecla=String.fromCharCode(key).toString();
	letras="0123456789";
	especiales=[8, 37, 39, 46, 6, 9, 44, 45];
	tecla_especial=false
	for (var i in especiales){
		if(key == especiales[i]){
			$("#nro_tramite").parent().attr("class","form-group has-success has-feedback col-md-12")
			tecla_especial= true;
			break;
		}
	}
	if(letras.indexOf(tecla) == -1 && !tecla_especial){
		return false;
	}

}

function nuevo_solicitud_soporte(e){
	key= e.keyCode || e.which;
	tecla=String.fromCharCode(key).toString();
	letras=" áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
	especiales=[8, 37, 39, 46, 6, 9];
	tecla_especial=false
	for (var i in especiales){
		if(key == especiales[i]){
			$("#solicitud_soporte").parent().attr("class","form-group has-success has-feedback col-md-12")
			tecla_especial= true;
			break;
		}
	}
	if(letras.indexOf(tecla) == -1 && !tecla_especial){
		return false;
	}
}




