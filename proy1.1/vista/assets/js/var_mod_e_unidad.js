//transporte de variables de edicion de usuario
$('#Modal_Editar_Unidad').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_unidad = button.data('id_unidad')
	      var des_unidad = button.data('des_unidad')
	      var id_funcionario_jefe_unidad = button.data('id_funcionario_jefe_unidad')
	      var id_institucion = button.data('id_institucion')
	      var id_jurisdiccion = button.data('id_jurisdiccion')
	      var id_edificio = button.data('id_edificio')
	      var piso_unidad = button.data('piso_unidad')
	      var unidad_dependiente = button.data('unidad_dependiente')
	      var id_localidad = button.data('id_localidad')
	      var cod_unidad = button.data('cod_unidad')
	       // Extraer la información de atributos de datos
		  var modal = $(this)
	
		  modal.find('.modal-body #id_unidad').val(id_unidad)
		  modal.find('.modal-body #des_unidad').val(des_unidad)
		  modal.find('.modal-body #id_funcionario_jefe_unidad').val(id_funcionario_jefe_unidad)
		  modal.find('.modal-body #id_institucion').val(id_institucion)
		  modal.find('.modal-body #id_jurisdiccion').val(id_jurisdiccion)
		  modal.find('.modal-body #id_edificio').val(id_edificio)
		  modal.find('.modal-body #piso_unidad').val(piso_unidad)
		  modal.find('.modal-body #unidad_dependiente').val(unidad_dependiente)
		  modal.find('.modal-body #id_localidad').val(id_localidad)
		  modal.find('.modal-body #cod_unidad').val(cod_unidad)
		  
          $('.alert').hide();//Oculto alert
		})

