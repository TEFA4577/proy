$(document).ready(function(){
      var consulta;
     //hacemos focus
      $("#cod_unidad").focus();
      //comprobamos si se pulsa una tecla
      $("#cod_unidad").keyup(function(e){
             //obtenemos el texto introducido en el campo
             consulta = $("#cod_unidad").val();
                                      
             //hace la búsqueda
             $("#resultado_unidad").delay(100).queue(function(n) {      
                                           
                  $("#resultado_unidad").html('<br><img src="../../assets/img/ajax-loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "../../../modelo/model_administrador/verificar_unidad_adm_exe.php",
                              data: "b="+consulta,
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado_unidad").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});
