// REGISTER BUTTON AND REGISTER-ICON FUNCTION
const registerBtn = document.querySelector(".register");
const registerForm = document.getElementById("id02");
const registerIcon = document.querySelector(".register-icon");
const registerCloseBtn = document.querySelector(".signclose");
const registerCancelBtn = document.querySelector(".cancelbtn");

function showSingIn() {
  registerForm.style.display = "block";
}
function closeSingIn() {
  registerForm.style.display = "none";
}

registerBtn.addEventListener("click", showSingIn);
registerIcon.addEventListener("click", showSingIn);
registerCloseBtn.addEventListener("click", closeSingIn);
registerCancelBtn.addEventListener("click", closeSingIn);

// LOGIN BUTTON AND LOGIN-ICON FUNCTION
const loginBtn = document.querySelector(".login");
const loginForm = document.getElementById("id01");
const loginIcon = document.querySelector(".login-icon");
const loginClose = document.querySelector(".close");
const loginCancelBtn = document.querySelector(".logInCancel");

function showLogIn() {
  loginForm.style.display = "block";
}

function closeLogIn() {
  loginForm.style.display = "none";
}

loginBtn.addEventListener("click", showLogIn);
loginIcon.addEventListener("click", showLogIn);
loginClose.addEventListener("click", closeLogIn);
loginCancelBtn.addEventListener("click", closeLogIn);

// SCRIPT FOR CHECKBOX OPTIONS ONE-WAY OR RETURN, HIDE OR SHOW RETURN DATE

const OneWayBtn = document.getElementById("one-way");
const ReturnWayBtn = document.getElementById("return-way");

function oneWay() {
  document.getElementById("return-date").style.display = "none";
  document.getElementById("divider").style.display = "none";
}

function returnWay() {
  document.getElementById("return-date").style.display = "initial";
  document.getElementById("divider").style.display = "initial";
}

OneWayBtn.addEventListener("click", oneWay);
ReturnWayBtn.addEventListener("click", returnWay);

//==================================================================
// SCRIPT FOR INCREMENT AND DECREMENT BUTTONS AT PASSENGER: ADULTS, CHILD AND INFANTS

const adults = document.getElementById("adults");
const children = document.getElementById("children");
const infant = document.getElementById("infant");
const RemoveBtns = document.getElementsByClassName("button-remove");
const AddBtns = document.getElementsByClassName("button-add");

// INCREMENT BUTTON IN ADULTS
function addAdult() {
  let value = parseInt(adults.value, 10);

  value = isNaN(value) ? 0 : value;
  value++;
  adults.value = value;
}

// DECREMENT BUTTON IN ADULTS
function removeAdult() {
  let value = parseInt(adults.value, 10);

  if (isNaN(value) || value <= 0) {
    value = 0;
  } else {
    value = value;
    value--;
  }

  adults.value = value;
}

RemoveBtns[0].addEventListener("click", removeAdult);
AddBtns[0].addEventListener("click", addAdult);

// INCREMENT BUTTON IN CHILDREN
function addChildren() {
  let value = parseInt(children.value, 10);

  value = isNaN(value) ? 0 : value;
  value++;
  children.value = value;
}

// DECREMENT BUTTON IN CHILDREN
function removeChildren() {
  let value = parseInt(children.value, 10);

  if (isNaN(value) || value <= 0) {
    value = 0;
  } else {
    value = value;
    value--;
  }

  children.value = value;
}

RemoveBtns[1].addEventListener("click", removeChildren);
AddBtns[1].addEventListener("click", addChildren);

// INCREMENT BUTTON IN INFANTS
function addInfant() {
  let value = parseInt(infant.value, 10);

  value = isNaN(value) ? 0 : value;
  value++;
  infant.value = value;
}

// DECREMENT BUTTON IN INFANTS
function removeInfant() {
  let value = parseInt(infant.value, 10);
  if (isNaN(value) || value <= 0) {
    value = 0;
  } else {
    value = value;
    value--;
  }

  infant.value = value;
}

RemoveBtns[2].addEventListener("click", removeInfant);
AddBtns[2].addEventListener("click", addInfant);

//==================================================================

// MENU RESPONSIVE FUNCTIONALITY
const menuList = document.getElementById("menu");
const hamburgerBtn = document.getElementById("hamburger");

document.onclick = function (e) {
  //close menuList and hamburger come back to normal status
  //if we clicked in other side different to "menu" or "hamburger", we close menu and hamburger.
  if (e.target.id !== "menu" && e.target.id !== "hamburger") {
    hamburgerBtn.classList.remove("active");
    menuList.classList.remove("active");
  }
};

//when clicking hamburger button, the menuList opens and hamburger get crossed
hamburgerBtn.onclick = function () {
  hamburgerBtn.classList.toggle("active");
  menuList.classList.toggle("active");
};

//==================================================================
// SCRIPT FOR BUTTON SCROLL TO TOP
// When the user scrolls down 20px from the top of the document, show the button

//Get the button
const mybutton = document.getElementById("myBtnScr");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
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

mybutton.addEventListener("click", topFunction);

//==================================================================
// SCRIPT FOR SLIDER AT RECOMMENDATION SECTION

$(document).ready(function () {
  $(".recommendation-slide-container").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    infinite: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 921,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".recommendation-slide-container").on(
    "afterChange",
    function (event, slick, currentSlide) {
      if ($(window).width() >= 920) {
        if (currentSlide === 3) {
          $(".recommendation-slide-container .slick-next").addClass("hidden");
        } else {
          $(".recommendation-slide-container .slick-next").removeClass(
            "hidden"
          );
        }

        if (currentSlide === 0) {
          $(".recommendation-slide-container .slick-prev").addClass("hidden");
        } else {
          $(".recommendation-slide-container .slick-prev").removeClass(
            "hidden"
          );
        }
      } else if ($(window).width() >= 750) {
        if (currentSlide === 4) {
          $(".recommendation-slide-container .slick-next").addClass("hidden");
        } else {
          $(".recommendation-slide-container .slick-next").removeClass(
            "hidden"
          );
        }

        if (currentSlide === 0) {
          $(".recommendation-slide-container .slick-prev").addClass("hidden");
        } else {
          $(".recommendation-slide-container .slick-prev").removeClass(
            "hidden"
          );
        }
      } else if ($(window).width() >= 512) {
        if (currentSlide === 5) {
          $(".recommendation-slide-container .slick-next").addClass("hidden");
        } else {
          $(".recommendation-slide-container .slick-next").removeClass(
            "hidden"
          );
        }

        if (currentSlide === 0) {
          $(".recommendation-slide-container .slick-prev").addClass("hidden");
        } else {
          $(".recommendation-slide-container .slick-prev").removeClass(
            "hidden"
          );
        }
      } else if ($(window).width() <= 511) {
        if (currentSlide === 6) {
          $(".recommendation-slide-container .slick-next").addClass("hidden");
        } else {
          $(".recommendation-slide-container .slick-next").removeClass(
            "hidden"
          );
        }

        if (currentSlide === 0) {
          $(".recommendation-slide-container .slick-prev").addClass("hidden");
        } else {
          $(".recommendation-slide-container .slick-prev").removeClass(
            "hidden"
          );
        }
      }
    }
  );
});

//==================================================================
// SCRIPT FOR SLIDER AT TOP DESTINES SECTION

$(document).ready(function () {
  $(".slide-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    infinite: true,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
