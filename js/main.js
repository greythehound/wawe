$(function () {
   const btnTest = document.querySelector(".closeMe");
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
  
  //close this window by a button in the header
  btnTest.addEventListener('click', closeWindow);
  function closeWindow() {
      window.close();
  }
  
});
