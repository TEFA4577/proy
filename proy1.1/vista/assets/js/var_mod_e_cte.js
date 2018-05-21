//transporte de variables de edicion de usuario
$('#Modal_Editar_Cliente').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var id_cliente = button.data('id_cliente')
	    var ap_paterno = button.data('ap_paterno')
	    var ci_nit = button.data('ci_nit')
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #id_cliente').val(id_cliente)
		modal.find('.modal-body #ci_nit').val(ci_nit)
		modal.find('.modal-body #ap_paterno').val(ap_paterno)
		$('.alert').hide();//Oculto alert
		})

//transporte de variables de edicion de usuario
$('#Modal_Eliminar_Cliente').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var id_cliente = button.data('id_cliente')
	    var ci_nit = button.data('ci_nit')
	    var ap_paterno = button.data('ap_paterno')
	   
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #id_cliente').val(id_cliente)
		modal.find('.modal-body #ci_nit').val(ci_nit)
		modal.find('.modal-body #ap_paterno').val(ap_paterno)
		
		$('.alert').hide();//Oculto alert
		})


$('#Modal_Activar_Cliente').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var id_cliente = button.data('id_cliente')
	    var ci_nit = button.data('ci_nit')
	    var ap_paterno = button.data('ap_paterno')
	   
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #id_cliente').val(id_cliente)
		modal.find('.modal-body #ci_nit').val(ci_nit)
		modal.find('.modal-body #ap_paterno').val(ap_paterno)
		
		$('.alert').hide();//Oculto alert
		})