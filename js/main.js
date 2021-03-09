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
   
  (function() {var walkme = document.createElement('script'); walkme.type = 'text/javascript'; walkme.async = true; walkme.src = 'https://cdn.walkmeqa.com/users/b2d0c1d0cffa483385b8d75701b708b6/test/walkme_b2d0c1d0cffa483385b8d75701b708b6_https.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(walkme, s); window._walkmeConfig = {smartLoad:true}; })();
  
});
