//transporte de variables de edicion de usuario
$('#Modal_Editar_Usuario_S').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var id_usuario = button.data('id_usuario')
	    var usuario = button.data('usuario')
	    var estado = button.data('estado')
	    var privilegio_b = button.data('privilegio_b')
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #id_usuario').val(id_usuario)
		modal.find('.modal-body #usuario').val(usuario)
		modal.find('.modal-body #estado').val(estado)
		modal.find('.modal-body #privilegio_b').val(privilegio_b)
		$('.alert').hide();//Oculto alert
		})

