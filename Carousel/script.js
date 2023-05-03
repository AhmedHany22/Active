$(document).ready(function () {
  let numEls = document.querySelectorAll(".owl-item").length;
  let w = window.innerWidth;
  let c = numEls * 200;
  console.log("w: ", w);
  console.log("c: ", c);
  let box = document.querySelector(".bbb_viewed_item");
  let width = box.clientWidth;
  console.log(width);

  if (w >= c) {
    document.querySelector(".bbb_viewed_prev").classList.add("hidden");
    document.querySelector(".bbb_viewed_next").classList.add("hidden");
  }

  if ($(".bbb_viewed_slider").length) {
    var viewedSlider = $(".bbb_viewed_slider");

    viewedSlider.owlCarousel({
      loop: w <= c ? true : false,
      margin: 30,
      slideBy: 200,
      autoplay: false,
      autoplayTimeout: 3000,
      slideTransition: "linear",
      autoplaySpeed: 2000,
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
