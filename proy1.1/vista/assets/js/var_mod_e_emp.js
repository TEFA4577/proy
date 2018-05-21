//transporte de variables de edicion de usuario
$('#Modal_Editar_Empleado').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var id_empleado = button.data('id_empleado')
	    var ci = button.data('ci')
	    var nombre = button.data('nombre')
	    var ap_paterno = button.data('ap_paterno')
	    var ap_materno = button.data('ap_materno')
	    var cel_referencia = button.data('cel_referencia')
	    var direc_referencia = button.data('direc_referencia')
	    var fecha_ingreso = button.data('fecha_ingreso')
	    var id_cargo = button.data('id_cargo')
	    var estado = button.data('estado')
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #id_empleado').val(id_empleado)
		modal.find('.modal-body #ci').val(ci)
		modal.find('.modal-body #nombre').val(nombre)
		modal.find('.modal-body #ap_paterno').val(ap_paterno)
		modal.find('.modal-body #ap_materno').val(ap_materno)
		modal.find('.modal-body #cel_referencia').val(cel_referencia)
		modal.find('.modal-body #direc_referencia').val(direc_referencia)
		modal.find('.modal-body #fecha_ingreso').val(fecha_ingreso)
		modal.find('.modal-body #id_cargo').val(id_cargo)
		modal.find('.modal-body #estado').val(estado)
		$('.alert').hide();//Oculto alert
		})

//transporte de variables de edicion de usuario
$('#Modal_Eliminar_Empleado').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var ci = button.data('ci')
	    var nombre = button.data('nombre')
	    var ap_paterno = button.data('ap_paterno')
	    var ap_materno = button.data('ap_materno')
	   
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #ci').val(ci)
		modal.find('.modal-body #nombre').val(nombre)
		modal.find('.modal-body #ap_paterno').val(ap_paterno)
		modal.find('.modal-body #ap_materno').val(ap_materno)
		
		$('.alert').hide();//Oculto alert
		})

//transporte de variables de edicion de usuario
$('#Modal_Activar_Empleado').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    vvar ci = button.data('ci')
	    var nombre = button.data('nombre')
	    var ap_paterno = button.data('ap_paterno')
	    var ap_materno = button.data('ap_materno')
	   
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #ci').val(ci)
		modal.find('.modal-body #nombre').val(nombre)
		modal.find('.modal-body #ap_paterno').val(ap_paterno)
		modal.find('.modal-body #ap_materno').val(ap_materno)
		
		$('.alert').hide();//Oculto alert
		})