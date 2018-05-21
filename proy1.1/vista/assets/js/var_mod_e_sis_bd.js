$('#Modal_Editar_Sistema_BD').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_sistema = button.data('id_sistema')
	      var des_sistema = button.data('des_sistema')
	      var id_bd_sistema = button.data('id_bd_sistema')
	      var des_bd_sistema = button.data('des_bd_sistema')
	      var abrev_bd = button.data('abrev_bd')
	      var modal = $(this)
		  modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #des_sistema').val(des_sistema)
		  modal.find('.modal-body #id_bd_sistema').val(id_bd_sistema)
		  modal.find('.modal-body #des_bd_sistema').val(des_bd_sistema)
		  modal.find('.modal-body #abrev_bd').val(abrev_bd)
		  $('.alert').hide();//Oculto alert
		})