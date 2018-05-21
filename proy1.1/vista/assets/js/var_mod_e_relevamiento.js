$('#Modal_Editar_Relevamiento').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_soporte = button.data('id_soporte')
	      var id_funcionario = button.data('id_funcionario')
	      var nombres_funcionario = button.data('nombres_funcionario')
	      var paterno_funcionario = button.data('paterno_funcionario')
	      var materno_funcionario = button.data('materno_funcionario')
	      var id_unidad = button.data('id_unidad')
	      var id_cargo = button.data('id_cargo')
	      var id_ordenador = button.data('id_ordenador')
	      var memoria_ram = button.data('memoria_ram')
	      var red_ordenador = button.data('red_ordenador')
	      var observaciones_ordenador = button.data('observaciones_ordenador')
	      var id_so = button.data('id_so')
	      var id_marca = button.data('id_marca')
	      var id_generacion = button.data('id_generacion')
	      var id_monitor = button.data('id_monitor')
	      var id_marca_monitor = button.data('id_marca_monitor')
	      var tamano_monitor = button.data('tamano_monitor')
	      var id_impresora = button.data('id_impresora')
	      var modelo_impresora = button.data('modelo_impresora')
	      var id_marca_impresora = button.data('id_marca_impresora')
	      var tipo_impresora = button.data('tipo_impresora')
	      var cod_ordenador = button.data('cod_ordenador')
	      var cod_monitor = button.data('cod_monitor')
	      var cod_impresora = button.data('cod_impresora')
	      var modal = $(this)
		  modal.find('.modal-body #id_soporte').val(id_soporte)
		  modal.find('.modal-body #id_funcionario').val(id_funcionario)
		  modal.find('.modal-body #nombres_funcionario').val(nombres_funcionario)
		  modal.find('.modal-body #paterno_funcionario').val(paterno_funcionario)
		  modal.find('.modal-body #materno_funcionario').val(materno_funcionario)
		  modal.find('.modal-body #id_unidad').val(id_unidad)
		  modal.find('.modal-body #id_cargo').val(id_cargo)
		  modal.find('.modal-body #id_ordenador').val(id_ordenador)
		  modal.find('.modal-body #memoria_ram').val(memoria_ram)
		  modal.find('.modal-body #red_ordenador').val(red_ordenador)
		  modal.find('.modal-body #observaciones_ordenador').val(observaciones_ordenador)
		  modal.find('.modal-body #id_so').val(id_so)
		  modal.find('.modal-body #id_marca').val(id_marca)
		  modal.find('.modal-body #id_generacion').val(id_generacion)
		  modal.find('.modal-body #id_monitor').val(id_monitor)
		  modal.find('.modal-body #id_marca_monitor').val(id_marca_monitor)
		  modal.find('.modal-body #tamano_monitor').val(tamano_monitor)
		  modal.find('.modal-body #id_impresora').val(id_impresora)
		  modal.find('.modal-body #modelo_impresora').val(modelo_impresora)
		  modal.find('.modal-body #id_marca_impresora').val(id_marca_impresora)
		  modal.find('.modal-body #tipo_impresora').val(tipo_impresora)
		  modal.find('.modal-body #cod_ordenador').val(cod_ordenador)
		  modal.find('.modal-body #cod_monitor').val(cod_monitor)
		  modal.find('.modal-body #cod_impresora').val(cod_impresora)
		  $('.alert').hide();//Oculto alert
																	})


$('#Modal_Nuevo_Relevamiento_Ordenador').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_funcionario = button.data('id_funcionario')
	      var nombres_funcionario = button.data('nombres_funcionario')
	      var paterno_funcionario = button.data('paterno_funcionario')
	      var materno_funcionario = button.data('materno_funcionario')
	      var id_unidad = button.data('id_unidad')
	      var id_cargo = button.data('id_cargo')
	      var modal = $(this)
		  modal.find('.modal-body #id_funcionario').val(id_funcionario)
		  modal.find('.modal-body #nombres_funcionario').val(nombres_funcionario)
		  modal.find('.modal-body #paterno_funcionario').val(paterno_funcionario)
		  modal.find('.modal-body #materno_funcionario').val(materno_funcionario)
		  modal.find('.modal-body #id_unidad').val(id_unidad)
		  modal.find('.modal-body #id_cargo').val(id_cargo)
		  $('.alert').hide();//Oculto alert
																	})

$('#Modal_Ver_Relevamiento').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_relevamiento = button.data('id_relevamiento')
	      var id_funcionario = button.data('id_funcionario')
	      var nombres_funcionario = button.data('nombres_funcionario')
	      var paterno_funcionario = button.data('paterno_funcionario')
	      var materno_funcionario = button.data('materno_funcionario')
	      var id_unidad = button.data('id_unidad')
	      var id_cargo = button.data('id_cargo')
	      var id_ordenador = button.data('id_ordenador')
	      var memoria_ram = button.data('memoria_ram')
	      var red_ordenador = button.data('red_ordenador')
	      var observaciones_ordenador = button.data('observaciones_ordenador')
	      var id_so = button.data('id_so')
	      var id_marca = button.data('id_marca')
	      var id_generacion = button.data('id_generacion')
	      var id_monitor = button.data('id_monitor')
	      var id_marca_monitor = button.data('id_marca_monitor')
	      var tamano_monitor = button.data('tamano_monitor')
	      var id_impresora = button.data('id_impresora')
	      var modelo_impresora = button.data('modelo_impresora')
	      var id_marca_impresora = button.data('id_marca_impresora')
	      var tipo_impresora = button.data('tipo_impresora')
	      var id_usuario_responsable_soporte = button.data('id_usuario_responsable_soporte')
	      var fecha_registro = button.data('fecha_registro')
	      var cod_ordenador = button.data('cod_ordenador')
	      var cod_monitor = button.data('cod_monitor')
	      var cod_impresora = button.data('cod_impresora')
	      var modal = $(this)
		  modal.find('.modal-body #id_relevamiento').val(id_relevamiento)
		  modal.find('.modal-body #id_funcionario').val(id_funcionario)
		  modal.find('.modal-body #nombres_funcionario').val(nombres_funcionario)
		  modal.find('.modal-body #paterno_funcionario').val(paterno_funcionario)
		  modal.find('.modal-body #materno_funcionario').val(materno_funcionario)
		  modal.find('.modal-body #id_unidad').val(id_unidad)
		  modal.find('.modal-body #id_cargo').val(id_cargo)
		  modal.find('.modal-body #id_ordenador').val(id_ordenador)
		  modal.find('.modal-body #memoria_ram').val(memoria_ram)
		  modal.find('.modal-body #red_ordenador').val(red_ordenador)
		  modal.find('.modal-body #observaciones_ordenador').val(observaciones_ordenador)
		  modal.find('.modal-body #id_so').val(id_so)
		  modal.find('.modal-body #id_marca').val(id_marca)
		  modal.find('.modal-body #id_generacion').val(id_generacion)
		  modal.find('.modal-body #id_monitor').val(id_monitor)
		  modal.find('.modal-body #id_marca_monitor').val(id_marca_monitor)
		  modal.find('.modal-body #tamano_monitor').val(tamano_monitor)
		  modal.find('.modal-body #id_impresora').val(id_impresora)
		  modal.find('.modal-body #modelo_impresora').val(modelo_impresora)
		  modal.find('.modal-body #id_marca_impresora').val(id_marca_impresora)
		  modal.find('.modal-body #tipo_impresora').val(tipo_impresora)
		  modal.find('.modal-body #id_usuario_responsable_soporte').val(id_usuario_responsable_soporte)
		  modal.find('.modal-body #fecha_registro').val(fecha_registro)
		  modal.find('.modal-body #cod_ordenador').val(cod_ordenador)
		  modal.find('.modal-body #cod_monitor').val(cod_monitor)
		  modal.find('.modal-body #cod_impresora').val(cod_impresora)
		  $('.alert').hide();//Oculto alert
																	})