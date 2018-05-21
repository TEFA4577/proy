$(document).ready(function(){
                         
      var consulta;
             
      //hacemos focus
      $("#cod_impresora").focus();
                                                 
      //comprobamos si se pulsa una tecla
      $("#cod_impresora").keyup(function(e){
             //obtenemos el texto introducido en el campo
             consulta = $("#cod_impresora").val();
                                      
             //hace la búsqueda
             $("#resultado_impresora").delay(100).queue(function(n) {      
                                           
                  $("#resultado_impresora").html('<br><img src="../../assets/img/ajax-loader.gif" />');
                                           
                        $.ajax({
                              type: "POST",
                              url: "../../../modelo/model_sadministrador/verificar_impresora_sadm_exe.php",
                              data: "l="+consulta,
                              dataType: "html",
                              error: function(){
                                    alert("error petición ajax");
                              },
                              success: function(data){                                                      
                                    $("#resultado_impresora").html(data);
                                    n();
                              }
                  });
                                           
             });
                                
      });
                          
});
