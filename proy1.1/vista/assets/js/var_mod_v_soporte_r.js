$('#Modal_Visualizar_Soporte_Realizado').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var funcionario = button.data('funcionario')
	      var id_unidad = button.data('id_unidad')
	      var id_edificio = button.data('id_edificio')
	      var id_cargo = button.data('id_cargo')
	      var id_estado_cargo = button.data('id_estado_cargo')
	      var id_sistema = button.data('id_sistema')
	      var id_tipo_soporte = button.data('id_tipo_soporte')
	      var fecha_reg_soporte = button.data('fecha_reg_soporte')
	      var fecha_sol_soporte = button.data('fecha_sol_soporte')
	      var observacion_soporte = button.data('observacion_soporte')
	      var solicitud_soporte = button.data('solicitud_soporte')
	      var id_usuario_responsable_soporte = button.data('id_usuario_responsable_soporte')
	      var id_estado_soporte = button.data('id_estado_soporte')
	      var nro_tramite = button.data('nro_tramite')
	      var nro_cedula = button.data('nro_cedula')
	      var nro_hojas = button.data('nro_hojas')
	     
          // Extraer la información de atributos de datos
		  var modal = $(this)
		  
		  modal.find('.modal-body #funcionario').val(funcionario)
		  modal.find('.modal-body #id_unidad').val(id_unidad)
		  modal.find('.modal-body #id_edificio').val(id_edificio)
		  modal.find('.modal-body #id_cargo').val(id_cargo)
		  modal.find('.modal-body #id_estado_cargo').val(id_estado_cargo)
		  modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #id_tipo_soporte').val(id_tipo_soporte)
          modal.find('.modal-body #fecha_reg_soporte').val(fecha_reg_soporte)
          modal.find('.modal-body #fecha_sol_soporte').val(fecha_sol_soporte)
          modal.find('.modal-body #observacion_soporte').val(observacion_soporte)
          modal.find('.modal-body #solicitud_soporte').val(solicitud_soporte)
          modal.find('.modal-body #id_usuario_responsable_soporte').val(id_usuario_responsable_soporte)
          modal.find('.modal-body #id_estado_soporte').val(id_estado_soporte)
          modal.find('.modal-body #nro_tramite').val(nro_tramite)
          modal.find('.modal-body #nro_cedula').val(nro_cedula)
          modal.find('.modal-body #nro_hojas').val(nro_hojas)
         
          $('.alert').hide();//Oculto alert
		})
$('#Modal_Editar_Soporte_Realizado').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var id_soporte = button.data('id_soporte')
		  var funcionario = button.data('funcionario')
	      var id_unidad = button.data('id_unidad')
	      var id_edificio = button.data('id_edificio')
	      var id_cargo = button.data('id_cargo')
	      var id_estado_cargo = button.data('id_estado_cargo')
	      var id_sistema = button.data('id_sistema')
	      var id_tipo_soporte = button.data('id_tipo_soporte')
	      var fecha_reg_soporte = button.data('fecha_reg_soporte')
	      var fecha_sol_soporte = button.data('fecha_sol_soporte')
	      var observacion_soporte = button.data('observacion_soporte')
	      var solicitud_soporte = button.data('solicitud_soporte')
	      var id_usuario_responsable_soporte = button.data('id_usuario_responsable_soporte')
	      var id_estado_soporte = button.data('id_estado_soporte')
	      var nro_tramite = button.data('nro_tramite')
	      var nro_cedula = button.data('nro_cedula')
	      var nro_hojas = button.data('nro_hojas')
	   
          // Extraer la información de atributos de datos
		  var modal = $(this)
		  modal.find('.modal-body #id_soporte').val(id_soporte)
		  modal.find('.modal-body #funcionario').val(funcionario)
		  modal.find('.modal-body #id_unidad').val(id_unidad)
		  modal.find('.modal-body #id_edificio').val(id_edificio)
		  modal.find('.modal-body #id_cargo').val(id_cargo)
		  modal.find('.modal-body #id_estado_cargo').val(id_estado_cargo)
		  modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #id_tipo_soporte').val(id_tipo_soporte)
          modal.find('.modal-body #fecha_reg_soporte').val(fecha_reg_soporte)
          modal.find('.modal-body #fecha_sol_soporte').val(fecha_sol_soporte)
          modal.find('.modal-body #observacion_soporte').val(observacion_soporte)
          modal.find('.modal-body #solicitud_soporte').val(solicitud_soporte)
          modal.find('.modal-body #id_usuario_responsable_soporte').val(id_usuario_responsable_soporte)
          modal.find('.modal-body #id_estado_soporte').val(id_estado_soporte)
          modal.find('.modal-body #nro_tramite').val(nro_tramite)
          modal.find('.modal-body #nro_cedula').val(nro_cedula)
          modal.find('.modal-body #nro_hojas').val(nro_hojas)
         
          $('.alert').hide();//Oculto alert
		})


