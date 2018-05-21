//transporte de variables de edicion de usuario
$('#Modal_Editar_Usuario').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var id_usuario = button.data('id_usuario')
	    var ci = button.data('ci')
	    var nombre = button.data('nombre')
	    var ap_paterno = button.data('ap_paterno')
	    var ap_materno = button.data('ap_materno')
	    var usuario = button.data('usuario')
	    var password = button.data('password')
	    var id_privilegio = button.data('id_privilegio')
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #id_usuario').val(id_usuario)
		modal.find('.modal-body #ci').val(ci)
		modal.find('.modal-body #nombre').val(nombre)
		modal.find('.modal-body #ap_paterno').val(ap_paterno)
		modal.find('.modal-body #ap_materno').val(ap_materno)
		modal.find('.modal-body #usuario').val(usuario)
		modal.find('.modal-body #password').val(password)
		modal.find('.modal-body #id_privilegio').val(id_privilegio)
		$('.alert').hide();//Oculto alert
		})

//transporte de variables de edicion de usuario
$('#Modal_Eliminar_Usuario').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var id_usuario = button.data('id_usuario')
	    var ci = button.data('ci')
	    var usuario = button.data('usuario')
	   
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #id_usuario').val(id_usuario)
		modal.find('.modal-body #ci').val(ci)
		modal.find('.modal-body #usuario').val(usuario)
		
		$('.alert').hide();//Oculto alert
		})

//transporte de variables de edicion de usuario
$('#Modal_Activar_Usuario').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var id_usuario = button.data('id_usuario')
	    var ci = button.data('ci')
	    var usuario = button.data('usuario')
	   
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #id_usuario').val(id_usuario)
		modal.find('.modal-body #ci').val(ci)
		modal.find('.modal-body #usuario').val(usuario)
		
		$('.alert').hide();//Oculto alert
		})