// accordion li
document.querySelectorAll('.settings__select').forEach(function (title) {
  title.addEventListener('click', function (e) {
    e.preventDefault();
    const content = this.nextElementSibling;
    const plus = this.querySelector('.settings__arrow-down');
    const minus = this.querySelector('.settings__arrow-up');

    // Переключить классы стрелок
    if (plus) plus.classList.toggle('open');
    if (minus) minus.classList.toggle('open');

    // Переключить класс и стиль панели
    content.classList.toggle('show');
    if (content.classList.contains('show')) {
      content.style.display = 'flex';
      this.classList.add('open');
    } else {
      content.style.display = 'none';
      this.classList.remove('open');
    }
  });
});



// background overlay
function on() {
  document.getElementById("settings").style.display = "flex";
}

function off() {
  document.getElementById("settings").style.display = "none";
}

// modal window
document.addEventListener("DOMContentLoaded", function () {
  let aside = document.getElementById("aside");
  let openWindow = document.getElementById("set-settings");
  let closeWindow = document.querySelector(".settings__close");

  openWindow.addEventListener("click", () => {
    aside.classList.toggle("active");
  });

  closeWindow.addEventListener("click", () => {
    aside.classList.remove("active");
  });
});


// value checkbox
document.addEventListener('click', function() {
  var news = document.querySelectorAll('input.checkbox__input:checked');
  var span = document.getElementById('news');
  span.textContent = news.length;

  var article = document.querySelectorAll('input.checkbox__input-articles:checked');
  var text = document.getElementById('articles');
  text.textContent = article.length;

  var blog = document.querySelectorAll('input.checkbox__input-blogs:checked');
  var number = document.getElementById('blogs');
  number.textContent = blog.length;

  var video = document.querySelectorAll('input.checkbox__input-videos:checked');
  var result = document.getElementById('videos');
  result.textContent = video.length;
});