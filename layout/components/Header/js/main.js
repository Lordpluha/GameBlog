
// icon burger
const burger = document.querySelector('.header__burger');

const checkWidth = () => {
  burger ? burger.style.display = (window.innerWidth <= 1145) ? 'block' : 'none' : null;
}

window.addEventListener('resize', checkWidth);
checkWidth();


// dropdown on click button.theme
document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.getElementById("choose-theme");
  let openWindow = document.getElementById("icon-dropdown");
  openWindow.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#choose-theme") &&
      !e.target.closest("#icon-dropdown")) {
      dropdown.classList.remove("active");
    }
  });
});


// switch icons for search

// login on click button.user
document.addEventListener("DOMContentLoaded", function () {
  let person = document.getElementById("choose-icon");
  let openWindow = document.getElementById("header__user");
  let closeWindow = document.querySelector(".header__close");
  openWindow.addEventListener("click", () => {
    person.classList.toggle("active");
    // document.body.style.backgroundColor = 'darkgrey';
  });
  closeWindow.addEventListener("click", () => {
    person.classList.remove("active");
    // document.body.style.backgroundColor = '';
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#choose-icon") &&
      !e.target.closest("#header__user") &&
      !e.target.closest(".header__close")
    ) {
      person.classList.remove("active");
    }
  });
});


// login window
document.addEventListener("DOMContentLoaded", () => {
  const login = document.getElementById("login");
  const register = document.getElementById("fill-in");
  const go = document.getElementById("sign-up");
  const back = document.getElementById("back");
  if (login && register && go && back) {
    login.style.display = "block";
    register.style.display = "none";
    go.addEventListener("click", () => {
      login.style.display = "none";
      register.style.display = "block";
    });
    back.addEventListener("click", () => {
      login.style.display = "block";
      register.style.display = "none";
    });
  }
});


// comments window
document.addEventListener("DOMContentLoaded", function () {
  let comment = document.getElementById("choose-comment");
  let show = document.getElementById("header__comments");
  let hide = document.querySelector(".header__comments-close");
  show.addEventListener("click", () => {
    comment.classList.toggle("active");
  });
  hide.addEventListener("click", () => {
    comment.classList.remove("active");
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#choose-comment") &&
      !e.target.closest("#header__comments") &&
      !e.target.closest(".header__comments-close")
    ) {
      comment.classList.remove("active");
    }
  });
});