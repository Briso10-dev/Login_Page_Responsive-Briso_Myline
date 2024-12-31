let button = document.getElementById("dev")
let error = document.getElementById('error')
let email = document.getElementById('email')
let password = document.getElementById('password')

const Validate = (event) => =={
    // event.preventDefault
    // return false
    if (email.value == "" || password.value == ""){
        error.innerHTML = "Les champs ne peuvent pas etre vide"
        prompt("c'est faux");
        return false;
    }else{
        return true
        prompt("le formulaire est bien rempli")
    }
    console.log(button, email.password)
}
// email.addEventListener("keypress",Validate,false)
button.addEventListener("click",Validate)