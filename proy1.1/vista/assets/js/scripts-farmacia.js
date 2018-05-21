function insertar_cmb_producto(elementos){
    array_elementos = elementos.split("<*>");
    des_producto = array_elementos[2];
    $("#cmb_producto").append(
        '<option value="'+elementos+'">\
            ' + des_producto +'\
        </option>'
    );
}

function seleccion_producto(arrayProducto){
    // Separamos el array que contiene toda la información del producto separadao por "<*>".
    array_elementos = arrayProducto.split("<*>");

    costo = array_elementos[3];
    presentacion = array_elementos[4];
    unidad = array_elementos[5];
    seccion = array_elementos[6];

    $("#txt_costo").val(costo);
    $("#txt_presentacion").val(presentacion);
    $("#txt_unidad").val(unidad);
    $("#txt_seccion").val(seccion);
}
var contador = 1;

function agregar_producto(){
    // alert("Hola");
    array_producto = $("#cmb_producto").val().split("<*>");
    id_producto = array_producto[1];
    des_producto = array_producto[2];
    //Se obtienen los valores de inforamción de la seccion ventas
    cantidad = $("#txt_cantidad").val();
    costo = $("#txt_costo").val();
    presentacion = $("#txt_presentacion").val();
    unidad = $("#txt_unidad").val();
    seccion = $("#txt_seccion").val();

    // Se comprueba la integridad de la inforamción
    if(id_producto==undefined){
        alert("Debe elegir un producto producto");
    }
    else if(cantidad==""){
        alert("Debe ingresar la cantidad del producto");
    }
    else{

        // Se inserta en tabla_ventas una nueva fila con la información necesaria para el detalle de venta

        // ***IMPORTANTE: la columna id_producto de la tabla_ventas, debe estar oculto, ya que es información sensible, solo esta visible para efectos de desarrollo.  Ejemplo: Linea 63
                    // <input  class="hidden" 
                    //         id="txt_venta_${ contador }" 
                    //         name="txt_venta_${ contador }" 
                    //         value="${ id_producto }<#>${ cantidad }" 
                    //         readonly
                    // >
        

        $("#tabla_detalle").append(
            `<tr>
                <td>${ contador }</td>
                <td>
                    <input  class="text" 
                            id="txt_venta_${ contador }" 
                            name="txt_venta_${ contador }" 
                            value="${ id_producto }<#>${ cantidad }" 
                            readonly
                    >
                </td>
                <td>${ des_producto }</td>
                <td>${ cantidad }</td>
                <td>${ costo }</td>
                <td>${ (cantidad * costo) }</td>
                <td><button class="button">Eliminar</button></td>
            </tr>`
        );
    
        contador++;
    }
  
}