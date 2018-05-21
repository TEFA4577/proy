$('#Modal_Editar_Cargo').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_cargo = button.data('id_cargo')
	      var des_cargo = button.data('des_cargo')
	      var modal = $(this)
		  modal.find('.modal-body #id_cargo').val(id_cargo)
		  modal.find('.modal-body #des_cargo').val(des_cargo)
		  $('.alert').hide();//Oculto alert
		})