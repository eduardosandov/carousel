(function ($) {

  "use strict";


    // Owl Carousel
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplay:true,
    })


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);
