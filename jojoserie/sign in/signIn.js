
function contraseñacorrecta() {
        
    var contraseña = document.getElementById("pass");
    if(contraseña.value.length<8 && contraseña.value.length>0){
        
        document.getElementById("error").innerHTML="Tu contraseña debe tener al menos 8 carácteres";
        contraseña.style.borderColor="red";
    } else if(contraseña.value.length==0){
        document.getElementById("error").innerHTML=""; 
        contraseña.style.borderColor="";
    } else {
        document.getElementById("error").innerHTML=""; 
        contraseña.style.borderColor=""; 
    }
}
