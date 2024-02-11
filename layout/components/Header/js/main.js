
// icon burger
const burger = document.querySelector('.header__burger');

const checkWidth = () => {
  burger ? burger.style.display = (window.innerWidth <= 1145) ? 'block' : 'none' : null;
}

window.addEventListener('resize', checkWidth);
checkWidth();

//accordion burger icon
document.querySelectorAll('.header__burger-content').forEach(function (content) {
  content.style.display = 'none';
});

document.querySelectorAll('.header__accordion').forEach(function (accordion) {
  accordion.addEventListener('click', function (e) {
    e.preventDefault();
    let thisAccordion = this;
    let nextContent = thisAccordion.nextElementSibling;
    if (nextContent.classList.contains('show')) {
      nextContent.classList.remove('show');
      nextContent.style.display = 'none';
      thisAccordion.parentElement.parentElement
        .querySelectorAll('.header__accordion').forEach(function (acc) {
          acc.classList.remove('open');
        });
    } else {
      thisAccordion.parentElement.parentElement
        .querySelectorAll('.header__burger-content').forEach(function (content) {
          content.classList.remove('show');
          content.style.display = 'none';
        });
      nextContent.classList.add('show');
      nextContent.style.display = 'block';
      thisAccordion.parentElement.parentElement
        .querySelectorAll('.header__accordion').forEach(function (acc) {
          acc.classList.remove('open');
        });

      thisAccordion.classList.add('open');
    }
  });
});

//switch theme
const light = document.getElementById('header__change-light');
light.addEventListener('change', () => {
	document.body.classList.toggle('light');
});
const dark = document.getElementById('header__change-dark');
dark.addEventListener('change', () => {
	document.body.classList.remove('light');
});
const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      checkboxes.forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    });
  });

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
  document.getElementById("overlay").style.display = "flex";
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