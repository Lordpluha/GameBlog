// const mob = document.querySelector('.mob')
// const sideMob = document.querySelector('.side_mob')
// const close = document.querySelector('.close')
// mob.onclick = function(){
//     side_mob.classList.add('open');
// }
// close.onclick = function(){
//     side_mob.classList.remove('open');
// }


// icon burger
const burger = document.querySelector('.header__burger');

const checkWidth = () => {
  burger ? burger.style.display = (window.innerWidth <= 1145) ? 'block' : 'none' : null;
}

window.addEventListener('resize', checkWidth);
checkWidth();


// dropdown on click button.theme
const click = document.getElementById("choose-theme");
click.style.opacity = 0;
function show_hide() {
  let click = document.getElementById("choose-theme");
  if (click.style.opacity === "0") {
    click.style.opacity = "1";
  } else {
    click.style.opacity = "0";
  }
}
// let element = document.getElementById("choose-theme");
// element.classList.add('active');

// let element = document.getElementById("choose-theme");
// element.addEventListener("click", () => {
//   element.classList.add("active");
// });


// login on click button.user

// document.addEventListener("DOMContentLoaded", function () {
//   let person = document.getElementById("choose-icon");
//   let openWindow = document.getElementById("header__user");
//   openWindow.addEventListener("click", () => {
//     person.classList.toggle("active");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  let person = document.getElementById("choose-icon");
  let openWindow = document.getElementById("header__user");
  openWindow.addEventListener("click", () => {
    person.classList.toggle("active");
  });
  document.addEventListener("click", e => {
    if (!e.target.closest('#choose-icon') && !e.target.closest('#header__user')) {
      person.classList.remove('active');
    }
  });
});
