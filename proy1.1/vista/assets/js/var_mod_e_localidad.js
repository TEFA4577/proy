$('#Modal_Editar_Localidad').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_so = button.data('id_localidad')
	      var des_so = button.data('des_localidad')
	      
		  var modal = $(this)
		  modal.find('.modal-body #id_localidad').val(id_so)
		  modal.find('.modal-body #des_localidad').val(des_so)
		  
          $('.alert').hide();//Oculto alert
		})