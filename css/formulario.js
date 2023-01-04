
var b = document.getElementById("enviar");
b.addEventListener("click", validateForm);




function validateForm(){
let nombre = document.forms["myForm"]["name"].value;
if (nombre == ""){
    alert("El campo Nombre no puede estar vacío");
}else {
    let cadNombre = /^[A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+$/;
    if (!cadNombre.test(nombre)){
        alert("El Nombre solo puede contener letras, la primera mayúscula");
    }
}
}