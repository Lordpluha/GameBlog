
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


// header search form
document.addEventListener("DOMContentLoaded", function () {
  let search = document.getElementById("choose-search");
  let open = document.getElementById("icon-search");
  open.addEventListener("click", () => {
    search.classList.toggle("active");
    let find = document.querySelector(".search-info");
    let cancel = document.querySelector(".close-info");
    if (find.style.display === "none") {
      find.style.display = "block";
      cancel.style.display = "none";
    } else {
      find.style.display = "none";
      cancel.style.display = "block";
    }
  });
  let close = document.querySelector(".header__find");
  close.addEventListener("click", () => {
    search.classList.remove("active");
    let find = document.querySelector(".search-info");
    let cancel = document.querySelector(".close-info");
    if (cancel.style.display === "none") {
      cancel.style.display = "block";
      find.style.display = "none";
    } else {
      cancel.style.display = "none";
      find.style.display = "block";
    }
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#choose-search") &&
      !e.target.closest("#icon-search") &&
      !e.target.closest(".header__panel")
    ) {
      search.classList.remove("active");
    }
  });
});



// background transparent on click
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
window.onclick = function(event) {
  let overlay = document.getElementById("overlay");
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
};


// login on click button.user
document.addEventListener("DOMContentLoaded", function () {
  let person = document.getElementById("choose-icon");
  let openWindow = document.getElementById("header__user");
  let closeWindow = document.querySelector(".header__close");
  openWindow.addEventListener("click", () => {
    person.classList.toggle("active");
  });
  closeWindow.addEventListener("click", () => {
    person.classList.remove("active");
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