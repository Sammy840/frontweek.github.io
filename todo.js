localStorage.setItem("Email", "devfamily@gmail.com");
localStorage.setItem("Password", "family");
let defaultemail = localStorage.getItem("Email");
let defaultpassword = localStorage.getItem("Password");

let inputEmail = document.forms['form']['email'];
let inputPassword = document.forms['form']['password'];
let button = document.getElementsByClassName("sub");
let thisForm = document.forms.form;
let thisMessage = document.getElementById("message");

thisForm.onsubmit = function(){
  if (inputEmail.value !== defaultemail){
    thisMessage.innerHTML = "Please Enter The Valid Email !";
    return false;  

} else if (inputPassword.value !== defaultpassword){
  thisMessage.innerHTML = "Please Enter The Valid Password !";
  return false;
} else { 
  window.location.href = "home.html";
  return false;
};
};




