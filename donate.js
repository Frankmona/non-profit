// used this new method below for  sidebar toggle
const navBar = document.querySelector(".sidebar")

let toggle = true;
const menuBtn =  document.querySelector(".nav-toggle")
const Icon = document.querySelector(".nav-toggle i")


menuBtn.addEventListener("click", function(){
    // e.preventDefault();
    if(toggle){
        navBar.style.left = "-500px";
        Icon.setAttribute("class", "fas fa-bars"); /*means to change the class*/
        
        toggle = false;
    }else{
        navBar.style.left = "0px";
        Icon.setAttribute("class", "fas fa-times"); /*means to change the class*/
        
        toggle = true;
    }
});

// end of side bar


// form-control
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const country = document.getElementById("country");
const state = document.getElementById("state");

// successbox
const DismissButton = document.getElementById('button');
const successMessage = document.querySelectorAll('.success-message');

// function that shows error
function showError(input, message){
    // to target the iput in the parent element
    const formControl = input.parentElement;
    // to add the class and make it visible
    formControl.className = 'form-control error';
    const p = formControl.querySelector('p');
    p.innerText = message;
}

// function to check required field
 function checkRequiredField(inputArr){
   inputArr.forEach(function (input){
    if(input.value.trim() ===""){
        showError(input, `${getFieldName(input)} can't be empty`);
    }
    else{
        showSuccess();
     }
   });
 }

//  function to get field name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// even listener for submitting form, when the submit button is clicked
 form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequiredField([firstName,lastName, country, email,state])
 })



//  function that shows the success box
function showSuccess(){
    successMessage[0].classList.add('success');
    successMessage[1].classList.add('success');

}

// function that removes success class
function removeSuccess(){
    successMessage[0].classList.remove('success');
    successMessage[1].classList.remove('success');
}

// Event listener listening for the click dismissal event
   DismissButton.addEventListener('click', function(e){
    // e.preventDefault()
    // console.log('frank');
    if (successMessage[1].classList.contains("success")) {
        removeSuccess();
      }
})
