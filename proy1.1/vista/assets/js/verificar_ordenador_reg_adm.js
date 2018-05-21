$(document).ready(function(){
                         
      var consulta;
             
      //hacemos focus
      $("#cod_ordenador_reg").focus();
                                                 
      //comprobamos si se pulsa una tecla
      $("#cod_ordenador_reg").keyup(function(e){
             //obtenemos el texto introducido en el campo
             consulta = $("#cod_ordenador_reg").val();
                                      
             //hace la búsqueda
             $("#resultado_ordenador_reg").delay(100).queue(function(n) {      
                                           
                  $("#resultado_ordenador_reg").html('<br><img src="../../assets/img/ajax-loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "../../../modelo/model_administrador/verificar_ordenador_adm_exe.php",
                              data: "b="+consulta,
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado_ordenador_reg").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});
