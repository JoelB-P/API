var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

var submission ={
  firstName: firstNameInput.value,
  lastName: lastNameInput.value,
  email: emailInput.value,
  password: passwordInput.value,
}



signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  localStorage.setItem("submissionInformation", JSON.stringify(submission))
  // TODO: Create user object from submissio

  // TODO: Set new submission to local storage 
  
});

console.log(signUpButton)