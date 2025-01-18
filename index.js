const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const error = document.getElementById("error")

function changePassword(){
    let score = 0;
    const passValue = password.value; // Get the password value
  
    // Define criteria
    if (passValue.length >= 8) score++; // Minimum length
    if (/[A-Z]/.test(passValue)) score++; // At least one uppercase letter
    if (/[a-z]/.test(passValue)) score++; // At least one lowercase letter
    if (/[0-9]/.test(passValue)) score++; // At least one number
    if (/[\W_]/.test(passValue)) score++; // At least one special character
  
    // Determine strength
    if (!passValue) {
      error.innerHTML = ""; 
    } else if (score <= 2) {
      error.style.color = "red";
      error.innerHTML = "Too weak password";
    } else if (score === 3 || score === 4) {
      error.style.color = "orange";
      error.innerHTML = "A medium password";
    } else if (score === 5) {
      error.style.color = "green";
      error.innerHTML = "Yes, a strong password indeed";
    }
}

password.addEventListener("input", changePassword);
  
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission for validation
  });