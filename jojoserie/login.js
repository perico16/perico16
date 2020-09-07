function validar(){
    var usuario= document.getElementById("user").value;
    var contraseña = document.getElementById("pass").value;

    if(usuario=="abel" && contraseña == "abel"){
    
            window.open("buenas.html");
            window.close("_self");
    
    }
}
