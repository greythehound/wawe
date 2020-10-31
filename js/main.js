$(function () {
  var mixer = mixitup('.gallery_content');

  $('.slider__content').slick({
    dots: true,
    arrows: false,
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    transitionEffect: "tube",
    animationDuration: 666,
    transitionDuration: 666,
  });
  
});