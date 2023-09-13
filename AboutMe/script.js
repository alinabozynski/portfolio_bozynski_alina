/*******w***********

    Project 3
    Name: Alina Bozynski
    Date: April 11 2022
    Description: Javascript file for the Contact Page in Project 3: Website Development & Deployment (Module 9).

*******************/

/*  
    event listener
    calls the load function when the page has loaded  
*/
document.addEventListener("DOMContentLoaded", load);

/*  
    load function
    called when the page has loaded
    calls the validate function when the form is submitted 
*/
function load() {
  hideAllErrors();

  document.getElementById("comment_form").addEventListener("submit", validate);
}

/*  
    validate function
    checks if the form has errors
    prevents a form with errors from submitting
*/
function validate(e) {
  hideAllErrors();

  if (formHasErrors()) {
    e.preventDefault();
    return false;
  }

  return true;
}

/*  
    formHasErrors function
    returns a true if there are errors
    returns a false if there are no errors
*/
function formHasErrors() {
  let errorFlag = false;

  let inputId = ["name", "phone", "email", "comment"];

  for (let i = 0; i < inputId.length; i++) {
    let text = document.getElementById(inputId[i]);
    if (text.value == null || text.value.trim() == "") {
      document.getElementById(inputId[i] + "_error").style.display = "block";

      if (!errorFlag) {
        text.focus();
      }

      errorFlag = true;
    }
  }

  let nameValidation = new RegExp(/^[a-zA-Z]+$/);
  let nameInput = document.getElementById("name").value;

  if (!nameValidation.test(nameInput)) {
    document.getElementById("name_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("name").focus();
      document.getElementById("name").select();
    }

    errorFlag = true;
  }

  let telValidation = new RegExp(
    /^(1?)(-| ?)(\()?([0-9]{3})(\)|-| |\)-|\) )?([0-9]{3})(-| )?([0-9]{4}|[0-9]{4})$/
  );
  let telInput = document.getElementById("phone").value;

  if (!telValidation.test(telInput)) {
    document.getElementById("phone_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("phone").focus();
      document.getElementById("phone").select();
    }

    errorFlag = true;
  }

  let emailValidation = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  let emailInput = document.getElementById("email").value;

  if (!emailValidation.test(emailInput)) {
    document.getElementById("email_error").style.display = "block";

    if (!errorFlag) {
      document.getElementById("email").focus();
      document.getElementById("email").select();
    }

    errorFlag = true;
  }

  return errorFlag;
}

/*  
    hideAllErrors function
    hides all errors on the page
*/
function hideAllErrors() {
  let errors = document.getElementsByClassName("error");

  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}
