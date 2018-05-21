$('#Modal_Editar_Backup').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
	      var id_backup = button.data('id_backup') // Extraer la información de atributos de datos
	      var id_bd_sistema = button.data('id_bd_sistema') 
	      var id_localidad = button.data('id_localidad') 
	      var id_sistema = button.data('id_sistema')
	      var fecha_inicio_backup = button.data('fecha_inicio_backup') 
	      var fecha_fin_backup = button.data('fecha_fin_backup') 
	      var observacion_backup = button.data('observacion_backup') 
	      var tipo_backup = button.data('tipo_backup') 
	      var cod_backup = button.data('cod_backup') 
	      var modal = $(this)
		  modal.find('.modal-body #id_backup').val(id_backup)
		  modal.find('.modal-body #id_bd_sistema').val(id_bd_sistema)
		   modal.find('.modal-body #id_localidad').val(id_localidad)
		   modal.find('.modal-body #id_sistema').val(id_sistema)
		  modal.find('.modal-body #fecha_inicio_backup').val(fecha_inicio_backup)
		  modal.find('.modal-body #fecha_fin_backup').val(fecha_fin_backup)
		  modal.find('.modal-body #observacion_backup').val(observacion_backup)
		  modal.find('.modal-body #tipo_backup').val(tipo_backup)
		 modal.find('.modal-body #cod_backup').val(cod_backup)
		  $('.alert').hide();//Oculto alert
		})