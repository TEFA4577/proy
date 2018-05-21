$(document).ready(function(){
      var consulta;
     //hacemos focus
      $("#usuario_x").focus();
      //comprobamos si se pulsa una tecla
      $("#usuario_x").keyup(function(e){
             //obtenemos el texto introducido en el campo
             consulta = $("#usuario_x").val();
                                      
             //hace la búsqueda
             $("#resultado").delay(100).queue(function(n) {      
                                           
                  $("#resultado").html('<br><br><img src="../../assets/img/ajax-loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "../../../modelo/model_administrador/verificar_usuario_adm_exe.php",
                              data: "b="+consulta,
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});
