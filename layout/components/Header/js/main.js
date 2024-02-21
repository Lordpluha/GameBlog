
// icon burger
const burger = document.querySelector('.header__burger');

const checkWidth = () => {
  burger ? burger.style.display = (window.innerWidth <= 1145) ? 'flex' : 'none' : null;
}

window.addEventListener('resize', checkWidth);
checkWidth();


// icon burger - cross
const burgerMenu = document.querySelector('.header__burger');
let burgerShow = false;
burgerMenu.addEventListener('click', () => {
  if (!burgerShow) {
    burgerMenu.classList.add('open');
    burgerShow = true;
  } else {
    burgerMenu.classList.remove('open');
    burgerShow = false;
  }
});


// show burger window
document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.getElementById("choose-burger");
  let openWindow = document.getElementById("icon-burger");
  openWindow.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest("#choose-burger") &&
      !e.target.closest("#icon-burger")) {
      dropdown.classList.remove("active");
    }
  });
});


//accordion burger icon
document.querySelectorAll('.header__burger-content').forEach(function (content) {
  content.style.display = 'none';
});
document.querySelectorAll('.header__accordion').forEach(function (title) {
  title.addEventListener('click', function (e) {
    e.preventDefault();
    let title = this;
    let content = title.nextElementSibling;
    let plus = title.querySelector('.icon.ico_plus');
    let minus = title.querySelector('.icon.ico_minus');
    if (plus) {
      plus.classList.toggle('open');
    }
    if (minus) {
      minus.classList.toggle('open');
    }
    if (content.classList.contains('show')) {
      content.classList.remove('show');
      content.style.display = 'none';
      title.classList.remove('open');
    } else {
      document.querySelectorAll('.header__burger-content').forEach(function (content) {
        content.classList.remove('show');
        content.style.display = 'none';
      });
      content.classList.add('show');
      content.style.display = 'block';
      title.classList.add('open');

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
      !e.target.closest("#icon-dropdown")
    ) {
      dropdown.classList.remove("active");
    }
  });
});


// change theme dropdown
document.addEventListener('DOMContentLoaded', () => {
  const lightCheckbox = document.getElementById('header__light');
  const darkCheckbox = document.getElementById('header__dark');

  const lightIcon = document.getElementById('icon-light');
  const darkIcon = document.getElementById('icon-dark');

  lightCheckbox.addEventListener('change', () => {
    if (lightCheckbox.checked) {
      lightIcon.style.display = 'block';
      darkIcon.style.display = 'none';
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  });

  darkCheckbox.addEventListener('change', () => {
    if (darkCheckbox.checked) {
      lightIcon.style.display = 'none';
      darkIcon.style.display = 'block';
      document.body.classList.remove('light');
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


// background transparent on click login 
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


// background transparent on click search
function look() {
  document.getElementById("overlay-look").style.display = "flex";
}

function  stop() {
  document.getElementById("overlay-look").style.display = "none";
}

window.onclick = function (event) {
  let overlay = document.getElementById("overlay-look");
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
var position = -100;
var slide = document.querySelector('.slider__wrapper');

function sliderRight() {
  position -= 100;
  if (position < -100) {
    position = 0;
  }
  slide.style.left = position + '%';
}

function sliderLeft() {
  position += 100;
  if (position > 0) {
    position = -100;
  }
  slide.style.left = position + '%';
}


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