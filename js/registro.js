function validar(formulario) {

var nombre,email,contraseña,confirmar_contraseña,condiciones,Tipo_usuario,expresion;
const pattern = new RegExp('^[A-Z]+$', 'i');
expresion = /^\w+([\.-]?\w+)*@(?:|hotmail|gmail)\.(?:|com|es)+$/;
let Error = true;

nombre = document.getElementById("nombres").value;
email = document.getElementById("email").value;
contraseña = document.getElementById("contrasena").value;
confirmar_contraseña = document.getElementById("confirmacion").value;
Tipo_usuario = document.getElementById("tipo").value;
condiciones = document.getElementById("acepto").checked;


  Limpiar_Errores();

    if(nombre==="") {//Validacion de Nombre
        document.getElementById("errornombres").innerHTML= "Error, El campo nombre esta vacio";
        Error = false;
      }else {
        if(nombre.length > 35) {
          document.getElementById("errornombres").innerHTML= "Error, El campo nombre no debe superar 35 Caracteres";
          Error = false;
        } else {
          if(!pattern.test(nombre)){ 
            document.getElementById("errornombres").innerHTML= "Error, El campo nombre no acepta numeros";
            Error = false;
          } 
        }
    } 

    if (email === ""){// validacion Email
      document.getElementById("errorEmail").innerHTML= "Error, El campo Email esta Vacio";
      Error = false;
        }else{
          if (!expresion.test(email)){
            document.getElementById("errorEmail").innerHTML= "Error, La direccion de Correo es Incorrecta\nSolo Gmail y Hotmail";
            Error = false;
          }
    }

    if (contraseña === ""){//validacion Contraseña
      document.getElementById("errorContrasena").innerHTML= "Error, El campo Contraseña esta Vacio";
      Error = false;
    }

    if (confirmar_contraseña === ""){// Validacion Confirmar Contraseña
      document.getElementById("errorConfirmacion").innerHTML= "Error, El campo Confirmar Contraseña esta Vacio";
      Error = false;
        }else{
          if(contraseña != confirmar_contraseña){
            document.getElementById("errorConfirmacion").innerHTML= "Error, La Contraseña no Coincide";
            Error = false;
          }
    }

    if (Tipo_usuario === "-1"){//Validacion de Tipo de usuario
      document.getElementById("errorTipo").innerHTML= "Error, El campo Tipo de Usuario no esta Seleccionado";
      Error = false;
    }

    if (!condiciones){//Validaciones de Aceptar de condiciones
      document.getElementById("errorAcepto").innerHTML= "Error, Tienes que aceptar las Condiciones";
      Error = false;
    }   


    if(!Error){
      event.preventDefault(); 
    }

}

function Limpiar_Errores(){
      var errores = document.getElementsByClassName("text-danger");
      for (var i = 0; i < errores.length; i++) {
          errores[i].innerHTML = "";        
      }
}


