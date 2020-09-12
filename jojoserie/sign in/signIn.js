
function contraseñacorrecta() {
        
    var contraseña = document.getElementById("pass").value;
    if(contraseña.length<8){
        
        document.getElementById("error").innerHTML="Tu contraseña debe tener al menos 8 carácteres";
        
    }
}
