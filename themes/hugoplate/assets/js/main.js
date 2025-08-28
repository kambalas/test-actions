// main script
(function () {
  try {
    if (sessionStorage.getItem("langRedirectDone")) return;

    var path = location.pathname;

    path = path.replace(/^\/(en|lt)(?=\/|$)/, "");

    var langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || ""];
    var primary = (langs[0] || "").toLowerCase();

    var targetLang = primary.startsWith("lt") ? "lt" : "en";

    sessionStorage.setItem("langRedirectDone", "1");
    location.replace("/" + targetLang + path);
  } catch (e) {
    console.warn("lang redirect error:", e);
  }
})();

(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();
