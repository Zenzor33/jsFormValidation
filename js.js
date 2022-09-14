/*
Build a browser form which collects Email, Country, Zip Code, Password and Password Confirmation fields. It should use live inline validation to inform the user whether a field is properly filled in or not. That means highlighting a field red and providing a helpful error message until it has been filled in properly.

The form doesn’t need to actually submit, but you should give an error message if the button is pushed with any active errors or unfilled required fields. For the sake of this lesson, make sure all of the validation occurs in the JavaScript file. If all is well and the form is “submitted”, give the user a high five.

Country minlength 2 characters
Zip code minlength 2 characters
password minlength 6
passwordrepeat must match
*/

const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zip = document.querySelector("#zip");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");

email.addEventListener("input", (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Entered value needs to be an email address");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

country.addEventListener("input", (e) => {
  if (country.validity.tooShort) {
    country.setCustomValidity("Country must have at least two characters");
    country.reportValidity();
  } else {
    country.setCustomValidity("");
  }
});

zip.addEventListener("input", (e) => {
  if (zip.validity.tooShort) {
    zip.setCustomValidity("zip code must have at least two characters");
    zip.reportValidity();
  } else {
    zip.setCustomValidity("");
  }
});

password.addEventListener("input", (e) => {
  if (password.validity.tooShort) {
    password.setCustomValidity("password must have at least five characters");
    password.reportValidity();
  } else {
    password.setCustomValidity("");
  }
});

repeatPassword.addEventListener("input", (e) => {
  if (repeatPassword.value === password.value) {
    repeatPassword.setCustomValidity("");
  } else {
    repeatPassword.setCustomValidity("Passwords do not match!");
    repeatPassword.reportValidity();
  }
});
