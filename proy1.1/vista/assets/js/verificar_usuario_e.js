$(document).ready(function(){
                         
      var consulta;
             
      //hacemos focus
      $("#usuario_e").focus();
                                                 
      //comprobamos si se pulsa una tecla
      $("#usuario_e").keyup(function(e){
             //obtenemos el texto introducido en el campo
             consulta = $("#usuario_e").val();
                                      
             //hace la búsqueda
             $("#resultado_e").delay(100).queue(function(n) {      
                                           
                  $("#resultado_e").html('<br><br><img src="../../assets/img/ajax-loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "../../../modelo/model_administrador/verificar_usuarioe_adm_exe.php",
                              data: "b="+consulta,
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado_e").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});
