$(document).ready(function(){
                         
      var consulta;
             
      //hacemos focus
      $("#cod_monitor").focus();
                                                 
      //comprobamos si se pulsa una tecla
      $("#cod_monitor").keyup(function(e){
             //obtenemos el texto introducido en el campo
             consulta = $("#cod_monitor").val();
                                      
             //hace la búsqueda
             $("#resultado_monitor").delay(100).queue(function(n) {      
                                           
                  $("#resultado_monitor").html('<br><img src="../../assets/img/ajax-loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "../../../modelo/model_sadministrador/verificar_monitor_sadm_exe.php",
                              data: "k="+consulta,
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado_monitor").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});
