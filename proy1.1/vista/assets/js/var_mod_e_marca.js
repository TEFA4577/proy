$('#Modal_Editar_Marca').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_marca = button.data('id_marca')
	      var des_marca = button.data('des_marca')
	      var modal = $(this)
		  modal.find('.modal-body #id_marca').val(id_marca)
		  modal.find('.modal-body #des_marca').val(des_marca)
		  $('.alert').hide();//Oculto alert
		})