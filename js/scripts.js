$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true
  });
});


$('.main-nav').stellarNav({
    position: 'left',
    closeLabel: 'Fermer',
    breakpoint: 991,
  });
