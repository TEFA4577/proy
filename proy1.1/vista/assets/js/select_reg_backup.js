	$(document).ready(function(){
				$("#id_sistema").change(function () {
					$("#id_sistema option:selected").each(function () {
						id_sistema = $(this).val();
						$.post("../../../modelo/model_sadministrador/select_reg_backup.php", { id_sistema: id_sistema }, function(data){
							$("#id_bd_sistema").html(data);
						});            
					});
				})
			});