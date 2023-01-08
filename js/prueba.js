const nombre = document.getElementById("name");
const apellidos = document.getElementById("apellidos");
const direccion = document.getElementById("direccion");
const email = document.getElementById("email");
const telefono = document.getElementById("number");
const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexNombre = /^[A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+$/;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let regextlf = /^ (\+34|0034|34)?+(6|7)[0-9]{8}$/;
    parrafo.innerHTML ="";
    if(!regexNombre.test(nombre.value)){
        warnings += "El nombre no es valido, tiene que tener cuatro caracteres como minimo"
       entrar = true;
    }
    if(apellidos.value.lenght <4){
        warnings += "El apellido no es valido, tiene que tener cuatro caracteres como minimo"
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += "El email no es valido"
        entrar = true;
    }
    if(!regextlf.test(telefono.value)){
        warning += "El telefono no es correcto";
        entrar= true;
    }

    /*  */if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "El formulario se ha enviado"
    }
})















