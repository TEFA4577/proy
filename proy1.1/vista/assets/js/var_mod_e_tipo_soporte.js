$('#Modal_Editar_Tipo_Soporte').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_sistema = button.data('id_sistema')
	      var id_tipo_soporte = button.data('id_tipo_soporte')
	      var des_tipo_soporte = button.data('des_tipo_soporte')
	      
		  var modal = $(this)
		  modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #id_tipo_soporte').val(id_tipo_soporte)
		  modal.find('.modal-body #des_tipo_soporte').val(des_tipo_soporte)
		  
          $('.alert').hide();//Oculto alert
		})