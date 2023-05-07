$(document).ready(function () {
  let carouselItemsNum = document.querySelectorAll(".owl-item").length;
  let winWidth = window.innerWidth;
  let carouselWidth = carouselItemsNum * 200;

  if (1400 >= carouselWidth) {
    document.querySelector(".bbb_viewed_prev").classList.add("hidden");
    document.querySelector(".bbb_viewed_next").classList.add("hidden");
  }
  if (carouselWidth >= winWidth) {
    document.querySelector(".bbb_viewed_prev").classList.remove("hidden");
    document.querySelector(".bbb_viewed_next").classList.remove("hidden");
  }

  console.log(winWidth, carouselWidth);

  if ($(".bbb_viewed_slider").length) {
    var viewedSlider = $(".bbb_viewed_slider");

    viewedSlider.owlCarousel({
      loop: 1400 < carouselWidth ? true : winWidth <= carouselWidth ? true : false,
      margin: 30,
      slideBy: 200,
      autoplay: 1400 < carouselWidth ? true : winWidth <= carouselWidth ? true : false,
      autoplayTimeout: 4000,
      autoplaySpeed: 2000,
      slideTransition: "linear",
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsive: {
        0: { items: 1 },
        476: { items: 2 },
        768: { items: 3 },
        991: { items: 4 },
        1199: { items: 6 },
      },
    });

    if ($(".bbb_viewed_prev").length) {
      var prev = $(".bbb_viewed_prev");
      prev.on("click", function () {
        viewedSlider.trigger("prev.owl.carousel");
      });
    }

    if ($(".bbb_viewed_next").length) {
      var next = $(".bbb_viewed_next");
      next.on("click", function () {
        viewedSlider.trigger("next.owl.carousel");
      });
    }
  }
});

function confirm_modal(delete_url) {
  jQuery("#confirm-delete").modal("show", { backdrop: "static" });
  document.getElementById("delete_link").setAttribute("href", delete_url);
}
