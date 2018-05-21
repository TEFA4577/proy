//transporte de variables de edicion de usuario
$('#Modal_Editar_Producto').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget) // Botón que activó el modal
	    var cod_producto = button.data('cod_producto')
	    var nombre = button.data('nombre')
	    var des_medicamento = button.data('des_medicamento')
	    var id_presentacion = button.data('id_presentacion')
	    var cod_laboratorio = button.data('cod_laboratorio')
	    var id_unidad = button.data('id_unidad')
	    var costo_venta= button.data('costo_venta')
	    //var password = button.data('password')
	    // Extraer la información de atributos de datos
		var modal = $(this)
		modal.find('.modal-body #cod_producto').val(cod_producto)
		modal.find('.modal-body #nombre').val(nombre)
		modal.find('.modal-body #des_medicamento').val(des_medicamento)
		modal.find('.modal-body #id_presentacion').val(id_presentacion)
		modal.find('.modal-body #cod_laboratorio').val(cod_laboratorio)
		modal.find('.modal-body #id_unidad').val(id_unidad)
		modal.find('.modal-body #costo_venta').val(costo_venta)
		$('.alert').hide();//Oculto alert
		})
//modal.find('.modal-body #password').val(password)
//transporte de variables de edicion de usuario
//$('#Modal_Eliminar_Usuario').on('show.bs.modal', function (event) {
		//var button = $(event.relatedTarget) // Botón que activó el modal
	    //var id_usuario = button.data('id_usuario')
	    //var ci = button.data('ci')
	    //var usuario = button.data('usuario')
	   
	    // Extraer la información de atributos de datos
		//var modal = $(this)
		//modal.find('.modal-body #id_usuario').val(id_usuario)
		//modal.find('.modal-body #ci').val(ci)
		//modal.find('.modal-body #usuario').val(usuario)
		
		//$('.alert').hide();//Oculto alert
		//})