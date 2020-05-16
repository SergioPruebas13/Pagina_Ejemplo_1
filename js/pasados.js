var fecha_Actual,id_,nombre_,fecha_,descripcion_,lugar_,invitados_,precio_;
var fecha_Buscar = [];
var Fe_stri;
var eventos_Array = [];
var eventos_proximos = [];
var eventos_pasados = [];

$(document).ready(function () {

   cargarDatos();

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
          
            eventos_proximos = eventos_Array;
            eventos_pasados = eventos_Array;
            
           Cargar_Eventos_Pasasdos();
            
});
}

function Cargar_Eventos_Pasasdos(){
  var num = 0;
  eventos_pasados.sort(function (a, b) {// para ordenar el array de los eveentos mas proximos a los mas viejos 
    if (a.fecha_ > b.fecha_) {
      return -1;
    }
    if (a.fecha_ < b.fecha_) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
      for (let i = 0; i < eventos_pasados.length; i++) {

       // if(num!=1){
          if(eventos_pasados[i].fecha_ < fecha_Actual){
           var Fecha = Buscar_Fecha(eventos_pasados[i].fecha_);
           var id_E = eventos_pasados[i].id_;
         //  console.log(Fecha)
           var elementt = document.getElementById('pasados_all');
            //var elementt = $("#proximos");
            elementt.innerHTML += `<div id="Caja_All"> 
            <p> <a href="/Pagina_Ejemplo_1//detalle.html?id=${id_E}" class="nombre">${eventos_pasados[i].nombre_}</a><br>
            <span class="fecha">${Fecha} - ${eventos_pasados[i].lugar_}</span><br>
            <span class="descripcion">${eventos_pasados[i].descripcion_}</span><br>
            <span class="Invitados">Invitados: ${eventos_pasados[i].invitados_} </span></p>
                    </div>`;
          //  console.log(elementt)
            //console.log(eventos_proximos[i])
            //num = num + 1;
          }
       // }               
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