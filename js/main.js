document.addEventListener("DOMContentLoaded", function (event) {
  const menuBtn = document.querySelector('.menu__btn');
  const menuList = document.querySelector('.menu__list');

  menuBtn.addEventListener('click', function () {
    menuList.classList.toggle('menu__list--active');
  });

});




$(function () {
  var mixer = mixitup('.gallery__content');

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