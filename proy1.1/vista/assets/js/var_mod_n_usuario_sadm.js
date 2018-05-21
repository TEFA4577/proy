$('#Modal_Nuevo_Usuario_S').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_funcionario = button.data('id_funcionario') // Extraer la información de atributos de datos
	      var modal = $(this)
		  modal.find('.modal-body #id_funcionario').val(id_funcionario)
		  $('.alert').hide();//Oculto alert
		})