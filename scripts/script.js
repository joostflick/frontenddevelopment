// JavaScript Document
console.log("active")
let loginLink = document.getElementById('login-link')
let dropdownContent = document.getElementById('dropdown-content')
loginLink.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    dropdownContent.style.display = 'flex'
    window.setTimeout(function(){
        dropdownContent.style.opacity = 1;
        dropdownContent.style.transform = 'scale(1)';
    },0);
}, false);
dropdownContent.addEventListener("mouseleave", function( event ) {
    dropdownContent.style.opacity = 0;
    dropdownContent.style.transform = 'scale(0)';
    window.setTimeout(function(){
        dropdownContent.style.display = 'none';
    },700);
}, false);