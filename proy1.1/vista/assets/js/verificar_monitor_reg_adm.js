$(document).ready(function(){
                         
      var consulta;
             
      //hacemos focus
      $("#cod_monitor_reg").focus();
                                                 
      //comprobamos si se pulsa una tecla
      $("#cod_monitor_reg").keyup(function(e){
             //obtenemos el texto introducido en el campo
             consulta = $("#cod_monitor_reg").val();
                                      
             //hace la búsqueda
             $("#resultado_monitor_reg").delay(100).queue(function(n) {      
                                           
                  $("#resultado_monitor_reg").html('<br><img src="../../assets/img/ajax-loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "../../../modelo/model_administrador/verificar_monitor_adm_exe.php",
                              data: "k="+consulta,
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado_monitor_reg").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});
