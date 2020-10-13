// SCRIPT FOR CHECKBOX OPTIONS ONE-WAY OR RETURN, HIDE OR SHOW RETURN DATE

function oneWay() {
    document.getElementById("return-date").style.display='none';
    document.getElementById("divider").style.display='none';
}

function returnWay() {
    document.getElementById("return-date").style.display='initial';
    document.getElementById("divider").style.display='initial';
}

//======================================================================================
// SCRIPT FOR INCREMENT AND DECREMENT BUTTONS AT PASSENGER: ADULTS, CHILD AND INFANTS

// INCREMENT BUTTON IN ADULTS
function addAdult() {
    var value = parseInt(document.getElementById('adults').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('adults').value = value; 
}

// DECREMENT BUTTON IN ADULTS
function removeAdult() {
    var value = parseInt(document.getElementById('adults').value, 10);
    if (isNaN(value)) {
        value = 0;
    } else if (value <= 0) {
        value = 0;
    } else {
        value = value;
        value--;
    }
    document.getElementById('adults').value = value;
}

// INCREMENT BUTTON IN CHILDREN
function addChildren() {
    var value = parseInt(document.getElementById('children').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('children').value = value;  
}

// DECREMENT BUTTON IN CHILDREN
function removeChildren() {
    var value = parseInt(document.getElementById('children').value, 10);
    if (isNaN(value)) {
        value = 0;
    } else if (value <= 0) {
        value = 0;
    } else {
        value = value;
        value--;
    }
    document.getElementById('children').value = value;
}

// INCREMENT BUTTON IN INFANTS
function addInfant() {
    var value = parseInt(document.getElementById('infant').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('infant').value = value;
}

// DECREMENT BUTTON IN INFANTS
function removeInfant() {
    var value = parseInt(document.getElementById('infant').value, 10);
    if (isNaN(value)) {
        value = 0;
    } else if (value <= 0) {
        value = 0;
    } else {
        value = value;
        value--;
    }
    document.getElementById('infant').value = value;
}

//======================================================================================

// SCRIPT FOR NAVIGATION BAR IN SMALL DEVICES
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
       document.getElementById("myNav").style.width = "0%";
}


//======================================================================================

// SCRIPT FOR BUTTON SCROLL TO TOP

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
//Get the button
var mybutton = document.getElementById("myBtnScr");

    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



// SCRIPT FOR SLIDESHOW/CAROUSELL

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}
		

