$('#Modal_Editar_Estado_Soporte').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_estado_soporte = button.data('id_estado_soporte')
	      var des_estado_soporte = button.data('des_estado_soporte')
	      
		  var modal = $(this)
		  modal.find('.modal-body #id_estado_soporte').val(id_estado_soporte)
		  modal.find('.modal-body #des_estado_soporte').val(des_estado_soporte)
		  
          $('.alert').hide();//Oculto alert
		})