$(document).ready(function(){
                         
      var consulta;
             
      //hacemos focus
      $("#cod_impresora_reg").focus();
                                                 
      //comprobamos si se pulsa una tecla
      $("#cod_impresora_reg").keyup(function(e){
             //obtenemos el texto introducido en el campo
             consulta = $("#cod_impresora_reg").val();
                                      
             //hace la búsqueda
             $("#resultado_impresora_reg").delay(100).queue(function(n) {      
                                           
                  $("#resultado_impresora_reg").html('<br><img src="../../assets/img/ajax-loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "../../../modelo/model_administrador/verificar_impresora_adm_exe.php",
                              data: "l="+consulta,
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado_impresora_reg").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});
