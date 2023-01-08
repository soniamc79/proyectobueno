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
    let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.Value.lenght <4){
       warnings += "El nombre no es valido, tiene que tener cuatro caracteres como minimo"
    }
    if(apellidos.value.lenght <4){
        warnings += "El apellido no es valido, tiene que tener cuatro caracteres como minimo"
    }
})















