$('#Modal_Editar_So').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_so = button.data('id_so')
	      var des_so = button.data('des_so')
	      
		  var modal = $(this)
		  modal.find('.modal-body #id_so').val(id_so)
		  modal.find('.modal-body #des_so').val(des_so)
		  
          $('.alert').hide();//Oculto alert
		})