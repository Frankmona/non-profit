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

// form-control sectionH
const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");

