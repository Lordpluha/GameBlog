document.querySelectorAll('.settings__select').forEach(function (title) {
  title.addEventListener('click', function (e) {
    e.preventDefault();
    const content = this.nextElementSibling;
    const plus = this.querySelector('.settings__arrow-down');
    const minus = this.querySelector('.settings__arrow-up');
    
    document.querySelectorAll('.settings__panel.show').forEach(function (panel) {
      if (panel !== content) {
        panel.classList.remove('show');
        panel.style.display = 'none';
      }
    });

    if (plus) plus.classList.toggle('open');
    if (minus) minus.classList.toggle('open');
    
    if (content.classList.toggle('show')) {
      content.style.display = 'flex';
      this.classList.add('open');
    } else {
      content.style.display = 'none';
      this.classList.remove('open');
    }
  });
});