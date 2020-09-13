
function contraseñacorrecta() {
    var correo = document.getElementById("mail");
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
    var contador=0;
    for(i=0; i<correo.value.length;i=i+1) {
        if(correo.value.charAt(i)=="@"){
            
            contador++;
        }

    }
    if(contador==0){
        document.getElementById("error1").innerHTML="Tu correo debe tener una '@' ";
        correo.style.borderColor="red";
    }  else {
        document.getElementById("error1").innerHTML="";
        correo.style.borderColor="";
    }
    if(correo.value.length==0){
    document.getElementById("error1").innerHTML="";
    correo.style.borderColor="";
    }



}
