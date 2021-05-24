var cadena = prompt("Escribe una cadena de texto");
comprobar(cadena);

function comprobar(cadena){
   if (cadena == cadena.toUpperCase()){
      console.log("Está formado solo por mayusculas.")
   } else if (cadena == cadena.toLowerCase()){
         console.log("Está formado solo por minusculas.")
      } else {console.log("Está formado por mayusculas y minusculas.")}

}