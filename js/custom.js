(function($){
    "use strict";
    $('body').scrollspy({ target: '#bs-example-navbar-collapse-1' });
    //animation scroll js
       /* navOffset start */ 
        var nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* navOffset ends */
    
    
    
    
	//a[href*="#"]:not([href="#"])
	var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
// navbar js ends here
    
    $('.testimonial-slide').slick({
      slidesToShow: 1,
        arrows: false,
        dots:false,
            autoplay: true,
		 speed: 800,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
// testimonial-slide js ends here
     $('.team-slide').slick({
      slidesToShow: 3,
        arrows: false,
        dots:false,
            autoplay: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
// team-slide js ends here
    jQuery(function(){
        jQuery("a.bla-1").YouTubePopUp();
        jQuery("a.bla-2").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
    });
// youtube video js ends here
    
    
     $('.bxslider').bxSlider({
          mode: 'fade',
          auto: true,
      });
    //bxslider ends
    $('#carouselFade').carousel({
         interval: 4000,
    });

    // ============= Closes responsive menu when a scroll link is clicked Start =========

  $('.nav li a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // ============= Closes responsive menu when a scroll link is clicked End =========

    // Create the carousel.
            $(function() {
                $('.kc-wrap').KillerCarousel({
                    // Default natural width of carousel.
                    width: 800,
                    // Item spacing in 3d (has CSS3 3d) mode.
                    spacing3d: 150,
                    // Item spacing in 2d (no CSS3 3d) mode. 
                    spacing2d: 100,
                    showShadow: true,
                    showReflection: false,
                    // Looping mode.
                    infiniteLoop: true,
                    // Scale at 75% of parent element.
                    autoScale: 70
                });
            });
    
// feature design hover js ends
    var top_to_i= $('.top_to i');
    var $top_offset = 300;
    top_to_i.on('click',function(){
        html_body.animate({
            scrollTop:0
        },1000);
    });
    
    
// feature design hover js ends     
    $window.on('scroll',function(){

		var scrollPos = $window.scrollTop();

		if( scrollPos >= navOffset ){
            $('header nav').addClass('navbar-position');
		} else{
			 $('header nav').removeClass('navbar-position');
		}
        
        if( scrollPos >= $top_offset ){
            top_to_i.fadeIn();
        }else{
            top_to_i.fadeOut();
        }
        
	});
// feature design hover js ends     
})(jQuery);
