var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

var dni = prompt("Inserte su DNI sin letra");
var letra = prompt("¿Cual es la letra del DNI?");

if (dni> 0 && dni<99999999){
    if (letras[dni%23] == letra.toUpperCase()){
        console.log("DNI correcto.");
    }else {console.log("DNI INCORRECTO")} ;
}else{
    console.log("Numero invalido.")
}