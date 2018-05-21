	$(document).ready(function(){
				$("#id_sistema").change(function () {
					$("#id_sistema option:selected").each(function () {
						id_sistema = $(this).val();
						$.post("../../../modelo/model_sadministrador/select_reg_soporte.php", { id_sistema: id_sistema }, function(data){
							$("#id_tipo_soporte").html(data);
						});            
					});
				})
			});