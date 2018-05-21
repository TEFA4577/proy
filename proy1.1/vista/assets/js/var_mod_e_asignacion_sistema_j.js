$('#Modal_Editar_Asignacion_Sistema_J').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_sistema_jurisdiccion = button.data('id_sistema_jurisdiccion')
	      var id_sistema = button.data('id_sistema')
	      var id_jurisdiccion = button.data('id_jurisdiccion')
	      var modal = $(this)
		  modal.find('.modal-body #id_sistema_jurisdiccion').val(id_sistema_jurisdiccion)
		  modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #id_jurisdiccion').val(id_jurisdiccion)
          $('.alert').hide();//Oculto alert
		})

$('#Modal_Eliminar_Asignacion_Sistema_J').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_sistema_jurisdiccion = button.data('id_sistema_jurisdiccion')
	      var id_sistema = button.data('id_sistema')
	      var id_jurisdiccion = button.data('id_jurisdiccion')
	      var modal = $(this)
		  modal.find('.modal-body #id_sistema_jurisdiccion').val(id_sistema_jurisdiccion)
		  modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #id_jurisdiccion').val(id_jurisdiccion)
          $('.alert').hide();//Oculto alert
		})