$('#Modal_Editar_Material').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_material = button.data('id_material')
	      var titulo_material = button.data('titulo_material')
	      var des_material = button.data('des_material')
	      var id_jurisdiccion = button.data('id_jurisdiccion')
	      
	      var modal = $(this)
		  modal.find('.modal-body #id_material').val(id_material)
		  modal.find('.modal-body #titulo_material').val(titulo_material)
		  modal.find('.modal-body #des_material').val(des_material)
		  modal.find('.modal-body #id_jurisdiccion').val(id_jurisdiccion)
		 
		   $('.alert').hide();//Oculto alert
		})