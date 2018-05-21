//transporte de variables de edicion de usuario
$('#Modal_Editar_Edificio').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_edificio = button.data('id_edificio')
	      var des_edificio = button.data('des_edificio')
	      var direccion = button.data('direccion')
	      var id_localidad = button.data('id_localidad')
	      var des_localidad = button.data('des_localidad')
	       // Extraer la información de atributos de datos
		  var modal = $(this)
	
		  modal.find('.modal-body #id_edificio').val(id_edificio)
		  modal.find('.modal-body #des_edificio').val(des_edificio)
		  modal.find('.modal-body #direccion').val(direccion)
		  modal.find('.modal-body #id_localidad').val(id_localidad)
		  modal.find('.modal-body #des_localidad').val(des_localidad)
		  
          $('.alert').hide();//Oculto alert
		})

