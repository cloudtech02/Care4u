(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    animateOut: "fadeOutLeft",
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
})(jQuery);

function toggleParagraph(element) {
  const serviceItem = element.closest(".service-item");
  const hiddenParagraph = serviceItem.querySelector(".hidden-paragraph");
  const icon = element.querySelector("i");

  // Toggle the paragraph's visibility
  if (hiddenParagraph.style.display === "none") {
    hiddenParagraph.style.display = "block";
    icon.classList.remove("fa-plus");
    icon.classList.add("fa-minus");
    element.innerHTML =
      '<i class="fa fa-minus text-primary me-3"></i>Show Less';
  } else {
    hiddenParagraph.style.display = "none";
    icon.classList.remove("fa-minus");
    icon.classList.add("fa-plus");
    element.innerHTML = '<i class="fa fa-plus text-primary me-3"></i>Read More';
  }
}
function toggleParagraph(button) {
  const ul = button.parentElement.querySelector('.test-list');
  const isVisible = ul.style.display === 'block';

  if (isVisible) {
    ul.style.display = 'none';
    button.innerHTML = '<i class="fa fa-plus text-primary me-3"></i> Read More';
  } else {
    ul.style.display = 'block';
    button.innerHTML = '<i class="fa fa-minus text-primary me-3"></i> Read Less';
  }
}



// Function to hide splash screen after 5 to 10 seconds
window.addEventListener('load', function() {
  // Set timeout to remove the splash screen after 5 to 10 seconds
  let splashDuration = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000; // Random between 5s and 10s
  setTimeout(function() {
      document.getElementById('splash-screen').style.display = 'none'; // Hide splash screen
      document.getElementById('main-content').style.display = 'block'; // Show main content
  }, splashDuration);
});
