var fecha_Actual,id_,nombre_,fecha_,descripcion_,lugar_,invitados_,precio_;
var fecha_Buscar = [];
var Fe_stri;
var eventos_Array = [];



$(document).ready(function () {
  cargarDatos();
  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>

});


function cargarDatos(){
  $.ajax({
    url: "https://sergiopruebas13.github.io/Pagina_Ejemplo_1/datos/info.json"
          }).done(function(respuesta){
        
            fecha_Actual = Date.parse(respuesta.fechaActual);

            for (let i = 0; i < respuesta.eventos.length; i++) {

              id_ = respuesta.eventos[i].id;
              nombre_ = respuesta.eventos[i].nombre;

              /*_________________________________________________*/
              Fe_stri = respuesta.eventos[i].fecha;
              fecha_ = Date.parse(Fe_stri);
              
              var Fech_Gua = {fecha_,Fe_stri}
              fecha_Buscar.push(Fech_Gua);
              /*_________________________________________________*/

              descripcion_ = respuesta.eventos[i].descripcion;
              lugar_ = respuesta.eventos[i].lugar;
              invitados_ = respuesta.eventos[i].invitados;
              precio_ = respuesta.eventos[i].precio;
          
              var op = {id_,nombre_,fecha_,descripcion_,lugar_,invitados_,precio_};
          
              eventos_Array.push(op);
             // console.log(eventos_Array[i]);  
            }      
            
            Cargar_Detalle();
            
});
}

function Cargar_Detalle(){
    var url = window.location.search;
    var url_id = url.split(`?id=`).join("");
    
      for (let i = 0; i < eventos_Array.length; i++) {
       if (url_id == eventos_Array[i].id_) {
          var Fecha = Buscar_Fecha(eventos_Array[i].fecha_);
          var elementt = document.getElementById('evento');
           elementt.innerHTML += `<div id="Caja_Eventos"> 
           <p> <span class="nombre_evento">${eventos_Array[i].nombre_}</span> <br>
           <span class="fecha">${Fecha} - ${eventos_Array[i].lugar_} </span><br>
           <span class="descripcion">${eventos_Array[i].descripcion_}</span><br>
           <span class="Costo">Costo: ${eventos_Array[i].precio_}</span><br>
           <span class="Invitados_eventos">Invitados: ${eventos_Array[i].invitados_}</span>
           </p>
                   </div>`;
         }
      }
}

function Buscar_Fecha(numero){
  for (let i = 0; i < fecha_Buscar.length; i++) {
      if(fecha_Buscar[i].fecha_ === numero){
          return fecha_Buscar[i].Fe_stri;
      }        
  }
  return 0;
}
