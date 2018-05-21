$('#Modal_Editar_Generacion').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_generacion = button.data('id_generacion')
	      var des_generacion = button.data('des_generacion')
	      var modal = $(this)
		  modal.find('.modal-body #id_generacion').val(id_generacion)
		  modal.find('.modal-body #des_generacion').val(des_generacion)
		  $('.alert').hide();//Oculto alert
		})