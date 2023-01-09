
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
//-----------------------
const nombre = document.getElementById("name");
const nombreError = document.querySelector("#name"+ span.error);
//-----------------------
email.addEventListener("input", (event) => {
  if (email.validity.valid) {
  
    emailError.textContent = ""; 
    emailError.className = "error"; 
  } else {
    
    showError();
  }
});
//------------------------
nombre.addEventListener("input", (event) =>{
    if(nombre.validity.valid){
        nombreError.textContent = "";
        nombreError.className = "error";
    }else{
        showError();
    }
});



//------------------------
form.addEventListener("submit", (event) => {
  
  if (!email.validity.valid) {
   
    showError();
   
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
   
    emailError.textContent = "Escribe el email correcto";
  } else if (email.validity.typeMismatch) {
    
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
   
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  emailError.className = "error active";
}