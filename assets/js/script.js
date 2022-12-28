(function ($) {


  // HERO SLIDER
//   var menu = [];
//   jQuery('.swiper-slide').each(function (index) {
//       menu.push(jQuery(this).find('.slid-inner').attr("data-text"));
//   });
//   var interleaveOffset = 0.5;
//   var swiperOptions = {
//       loop: true,
//       speed: 1000,
//       parallax: true,
//       autoplay: {
//           delay: 6500,
//           disableOnInteraction: false,
//       },
//       watchSlidesProgress: true,
//       pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//       },

//       navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//       },

//       on: {
//           progress: function () {
//               var swiper = this;
//               for (var i = 0; i < swiper.slides.length; i++) {
//                   var slideProgress = swiper.slides[i].progress;
//                   var innerOffset = swiper.width * interleaveOffset;
//                   var innerTranslate = slideProgress * innerOffset;
//                   swiper.slides[i].querySelector(".slid-inner").style.transform =
//                       "translate3d(" + innerTranslate + "px, 0, 0)";
//               }
//           },

//           touchStart: function () {
//               var swiper = this;
//               for (var i = 0; i < swiper.slides.length; i++) {
//                   swiper.slides[i].style.transition = "";
//               }
//           },

//           setTransition: function (speed) {
//               var swiper = this;
//               for (var i = 0; i < swiper.slides.length; i++) {
//                   swiper.slides[i].style.transition = speed + "ms";
//                   swiper.slides[i].querySelector(".slid-inner").style.transition =
//                       speed + "ms";
//               }
//           }
//       }
//   };

//   var swiper = new Swiper(".swiper-container", swiperOptions);

  // DATA BACKGROUND IMAGE
  var sliderBgSetting = $(".slide-bg-image");
  sliderBgSetting.each(function (indx) {
      if ($(this).attr("data-background")) {
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
  });




















// mobile menu 
$(".mobile-btn").click(function(){
    $(".responsive-menu").toggleClass("active");
  });





  // service slider start 
      /*------------------------------------------
        = service SLIDER
    -------------------------------------------*/
    if ($(".service-slider").length) {
      $(".service-slider").owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 20,
        loop:true,
        autoplayHoverPause:true,
        dots: true,
        nav: false,
        center: true,
          responsive: {
            0 : {
                items: 1,
                dots: true,
                nav: false,
                center: false,
            },

            500 : {
                items: 1,
                nav: false,
                center: false,
            },

            768 : {
                items: 2,
                center: false,
            },

            991 : {
                items: 3,
                center: true,
            },
            1200 : {
                items: 3,
            },

            1400 : {
                items: 3
            },

          }
      });
  }
  // service slider end

  // service slider-s2 start 
      /*------------------------------------------
        = service-s2 SLIDER
    -------------------------------------------*/
    if ($(".service-s2-active").length) {
        $(".service-s2-active").owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          margin: 20,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: true,
          navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
          center: true,
            responsive: {
              0 : {
                  items: 1,
                  dots: true,
                  nav: false,
                  center: false,
              },
  
              500 : {
                  items: 1,
                  nav: false,
                  center: false,
              },
  
              768 : {
                  items: 2,
                  center: false,
              },
  
              991 : {
                  items: 3,
                  center: true,
              },
              1200 : {
                  items: 3,
              },
  
              1400 : {
                  items: 3
              },
  
            }
        });
    }

  // service slider end

// wow active 
var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  // odometer for-01
if ($(".odometer").length) {
  $('.odometer').appear();
  $(document.body).on('appear', '.odometer', function (e) {
      var odo = $(".odometer");
      odo.each(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
      });
  });
}




      /*------------------------------------------
        = Team SLIDER
    -------------------------------------------*/
    if ($(".team-active").length) {
        $(".team-active").owlCarousel({
          autoplay: true,
          smartSpeed: 300,
          margin: 20,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: false,
          center: true,
          responsive: {
              0 : {
                  items: 1,
                  dots: true,
                  nav: false,
                  center: false,
              },
  
              500 : {
                  items: 2,
                  nav: false,
                  center: false,
              },
  
              768 : {
                  items: 3,
                  center: true,
              },
  
              991 : {
                  items: 3,
                  center: true,
              },
              1200 : {
                  items: 3,
              },
  
              1400 : {
                  items: 3
              },
  
            }
        });
    }



      /*------------------------------------------
        = portfolio SLIDER
    -------------------------------------------*/
    if ($(".portfolo-slider").length) {
      $(".portfolo-slider").owlCarousel({
        autoplay: false,
        smartSpeed: 300,
        margin: 20,
        loop:true,
        autoplayHoverPause:true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
          responsive: {
            0 : {
                items: 1,
                dots: true,
                nav: false,
                center: false,
            },

            500 : {
                items: 1,
                nav: false,
                center: false,
            },

            768 : {
                items: 2,
                center: false,
            },

            991 : {
                items: 2,
                center: false,
            },
            1200 : {
                items: 3,
            },

            1400 : {
                items: 3
            },

          }
      });
  }



      /*------------------------------------------
        = Testimonial slider 1
    -------------------------------------------*/
    if ($(".testimoni-wrapper").length) {
      $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.slider-for',
          focusOnSelect: true,
          dots:true,

      });
  }

      /*------------------------------------------
        = Testimonial slider 2
    -------------------------------------------*/
    if ($(".testimoni-text-s2-active").length) {
        $(".testimoni-text-s2-active").owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          margin: 20,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: true,
          navText: ['<i class="fa fa-long-arrow-right" aria-hidden="true"></i>','<i class="fa fa-long-arrow-left" aria-hidden="true"></i>'],
          items: 1,
        });
    }



    // brand active 
    if ($(".brand-s2-active").length) {
        $(".brand-s2-active").owlCarousel({
          autoplay: false,
          smartSpeed: 300,
          margin: 150,
          loop:true,
          autoplayHoverPause:true,
          dots: false,
          nav: false,
          responsive: {
              0 : {
                  items: 2,
                  dots: true,
                  nav: false,
                  center: false,
              },
  
              500 : {
                  items: 3,
                  nav: false,
                  center: false,
              },
  
              768 : {
                  items: 3,
                  center: false,
              },
  
              991 : {
                  items: 4,
                  center: false,
              },
              1200 : {
                  items: 4,
              },
  
              1400 : {
                  items: 4
              },
  
            }
        });
    }



})(window.jQuery);