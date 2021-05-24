
var cadena = prompt("Escribe una cadena de texto");

comprobar(cadena);

function comprobar(cadena){
 if (cadena.toLowerCase().replace(/ /g, "") ==cadena.toLowerCase().split("").reverse().join("").replace(/ /g, "")){
    console.log("Es un palindromo.")
   } else{ console.log("No es un palindromo.")
   } 
}