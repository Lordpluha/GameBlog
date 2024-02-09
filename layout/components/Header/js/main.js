
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
});


// background transparent on click
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
window.onclick = function (event) {
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


//slider
const slider = document.querySelector('.header__slider');
const slides = document.querySelectorAll('.header__slide');
let current = 0;
transitioning = false;
const nextButton = document.querySelector('.header__sign-up');
const prevButton = document.querySelector('.header__back');
function updateCurrent(index) {
  slides.forEach(header__slide => {
    header__slide.classList.remove('active');
  });

  slides[index].classList.add('active');
}
function nextSlide() {
  if (!transitioning) {
    transitioning = true;
    current++;

    if (current === slides.length) {
      current = 0;
    }

    updateCurrent(current);
  }
}

function prevSlide() {
  if (!transitioning) {
    transitioning = true;
    current--;

    if (current < 0) {
      current = slides.length - 1;
    }

    updateCurrent(current);
  }
}

function handleTransitionEnd() {
  transitioning = false;
}

slides.forEach(header__slide => {
  header__slide.addEventListener('transitionend', handleTransitionEnd);
});

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

updateCurrent(0);


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