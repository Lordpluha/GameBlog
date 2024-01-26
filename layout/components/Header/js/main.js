// const mob = document.querySelector('.mob')
// const sideMob = document.querySelector('.side_mob')
// const close = document.querySelector('.close')
// mob.onclick = function(){
//     side_mob.classList.add('open');
// }
// close.onclick = function(){
//     side_mob.classList.remove('open');
// }



const burger = document.querySelector('.header__burger');

const checkWidth = () => {
  burger ? burger.style.display = (window.innerWidth <= 1145) ? 'block' : 'none' : null;
}

window.addEventListener('resize', checkWidth);
checkWidth();


function show_hide() {
  var click = document.getElementById("choose-theme");
  if (click.style.opacity === "0") {
     click.style.opacity = "1";
  } else {
     click.style.opacity = "0";
  }
}

