const swiperUpWrapper = document.querySelector(".swiper-up");

const swiperDuration = 4000;
const swiperDelay = 1000;

const swiperUp = new Swiper(swiperUpWrapper, {
  spaceBetween: 20,
  speed: swiperDelay,
  loop: true,
  autoplay: {
    delay: swiperDuration,
    disableOnInteraction: false
  },
  pagination: {
    el: ".pagination-swiper-up",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },

  on: {
    init: function () {
      const paginationBullets = document.querySelectorAll(
        ".swiper-up__pagination .swiper-pagination-bullet"
      );

      document
        .querySelector(".swiper-up__pagination .swiper-pagination-bullet:nth-child(1)")
        .classList.add("active-first");

      paginationBullets.forEach((el, index) => {
        el.innerHTML = `
          <svg class="pagination-swiper-up__svg" width="37" height="37" viewBox="0 0 24 24">
            <circle class="pagination-swiper-up__bg" r="10" cx="12" cy="12" fill="none" stroke-width="2" />
            <circle class="pagination-swiper-up__progress" r="10" cx="12" cy="12" fill="none" stroke-width="2" />
            <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="currentColor" font-size="10">${index + 1}</text>
          </svg>
        `;

        let circleProgress = el.querySelector(".pagination-swiper-up__progress");
        let circleRadius = circleProgress.getAttribute("r");
        let circleLength = 2 * Math.PI * circleRadius;

        circleProgress.style.setProperty("--stroke-dasharray", circleLength);
        circleProgress.style.setProperty("--stroke-dashoffset", circleLength);

        document.documentElement.style.setProperty("--duration-filling", `${swiperDuration}ms`);
      });
    }
  }
});

let isFirst = true;

swiperUp.on("slideChange", (options) => {
  const { pagination } = options;

  if (isFirst) {
    pagination.bullets.forEach((bullet) => bullet.classList.remove("active-first"));

    isFirst = false;
  }
});

swiperUp.on("slideChangeTransitionEnd", (options) => {
  const { pagination } = options;

  pagination.bullets.forEach((bullet) => bullet.classList.remove("slide-change-active"));

  const activeBullet = document.querySelector(".swiper-pagination-bullet-active");

  activeBullet.classList.add("slide-change-active");
});
