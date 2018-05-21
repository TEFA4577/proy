//transporte de variables de edicion de usuario
$('#Modal_Editar_Funcionario').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_funcionario = button.data('id_funcionario')
	      var nombres_funcionario = button.data('nombres_funcionario')
	      var paterno_funcionario = button.data('paterno_funcionario')
	      var materno_funcionario = button.data('materno_funcionario')
	      var tel_funcionario = button.data('tel_funcionario')
	      var id_unidad = button.data('id_unidad')
	      var id_localidad = button.data('id_localidad')
	      var id_cargo = button.data('id_cargo')
	      var id_estado_cargo = button.data('id_estado_cargo')
	       // Extraer la información de atributos de datos
		  var modal = $(this)
	
		  modal.find('.modal-body #id_funcionario').val(id_funcionario)
		  modal.find('.modal-body #nombres_funcionario').val(nombres_funcionario)
		  modal.find('.modal-body #paterno_funcionario').val(paterno_funcionario)
		  modal.find('.modal-body #materno_funcionario').val(materno_funcionario)
		  modal.find('.modal-body #tel_funcionario').val(tel_funcionario)
		  modal.find('.modal-body #id_unidad').val(id_unidad)
		  modal.find('.modal-body #id_localidad').val(id_localidad)
		  modal.find('.modal-body #id_cargo').val(id_cargo)
		  modal.find('.modal-body #id_estado_cargo').val(id_estado_cargo)
		  
          $('.alert').hide();//Oculto alert
		})

