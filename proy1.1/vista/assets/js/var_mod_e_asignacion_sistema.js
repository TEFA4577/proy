$('#Modal_Editar_Asignacion_Sistema').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_responsable_sistema = button.data('id_responsable_sistema')
	      var id_sistema = button.data('id_sistema')
	      var id_usuario = button.data('id_usuario')
	      var modal = $(this)
		  modal.find('.modal-body #id_responsable_sistema').val(id_responsable_sistema)
		  modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #id_usuario').val(id_usuario)
          $('.alert').hide();//Oculto alert
		})

$('#Modal_Eliminar_Asignacion_Sistema').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_responsable_sistema = button.data('id_responsable_sistema')
	      var id_sistema = button.data('id_sistema')
	      var id_usuario = button.data('id_usuario')
	      var modal = $(this)
		  modal.find('.modal-body #id_responsable_sistema').val(id_responsable_sistema)
		  modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #id_usuario').val(id_usuario)
          $('.alert').hide();//Oculto alert
		})