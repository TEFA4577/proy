//transporte de variables de edicion de usuario
$('#Modal_Editar_Laboratorio').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var cod_laboratorio = button.data('cod_laboratorio')
	    var labratorio = button.data('laboratorio')
	    var telefono = button.data('telefono')
	    var direccion = button.data('direccion')
	    //var password = button.data('password')
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #cod_laboratorio').val(cod_laboratorio)
		modal.find('.modal-body #laboratorio').val(laboratorio)
		modal.find('.modal-body #telefono').val(telefono)
		modal.find('.modal-body #direccion').val(direccion)
		$('.alert').hide();//Oculto alert
		})
