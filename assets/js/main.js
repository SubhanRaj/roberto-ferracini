;(function($){
    "use strict";

    $(document).ready(function(){
        
        /**-----------------------------
         * Promotion Popup
         * ---------------------------*/

        if($('.promotion-popup').length > 0){
            setTimeout(function(){
                $('.promotion-popup').addClass('active');
                $('.body-overlay').addClass('active');
            },2000)
        }
        
        $(document).on('click','.promotion-popup .cross-icon',function(e){
            e.preventDefault();
            $('.promotion-popup').removeClass('active');
            $('.body-overlay').removeClass('active');
        });
        
        /**-----------------------------
         * cart Popup
         * ---------------------------*/
        
        $(document).on('click','.floating-icon-1',function(e){
            e.preventDefault();
            $('.cart-popup').addClass('active');
            $('.body-overlay').addClass('active');
            $('.floating-icon').addClass('active');

            $('.live-chat-popup').removeClass('active');
            $('.login-popup').removeClass('active');
        });

        $(document).on('click','.cart-popup .cross-icon',function(e){
            e.preventDefault();
            $('.cart-popup').removeClass('active');
            $('.body-overlay').removeClass('active');
            $('.floating-icon').removeClass('active');
        });

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            $('.cart-popup').removeClass('active');
            $('.body-overlay').removeClass('active');
            $('.floating-icon').removeClass('active');
        });

        $(document).on('click', '.when-click-change-live-chat', function(e) {
            e.preventDefault();
            $('.live-chat-part-1').addClass('part-active');
            $('.live-chat-part-1').addClass('part-hide');
        });
        $(document).on('click', '.when-click-change-live-chat', function(e) {
            e.preventDefault();
            $('.live-chat-part-2').removeClass('part-active');
            $('.live-chat-part-2').removeClass('part-hide');
        });
        

        /**-----------------------------
         * Live Chat Popup
         * ---------------------------*/

        $(document).on('click','.floating-icon-2',function(e){
            e.preventDefault();
            $('.live-chat-popup').addClass('active');
            $('.body-overlay').addClass('active');
            $('.floating-icon').addClass('active');
            $('.cart-popup').removeClass('active');

            $('.login-popup').removeClass('active');
        });

        $(document).on('click','.live-chat-popup .cross-icon',function(e){
            e.preventDefault();
            $('.live-chat-popup').removeClass('active');
            $('.body-overlay').removeClass('active');
            $('.floating-icon').removeClass('active');
        });

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            $('.live-chat-popup').removeClass('active');
            $('.body-overlay').removeClass('active');
            $('.floating-icon').removeClass('active');
        });
        
        /**-----------------------------
         * Login Popup
         * ---------------------------*/

        $(document).on('click','.floating-icon-3',function(e){
            e.preventDefault();
            $('.login-popup').addClass('active');
            $('.body-overlay').addClass('active');
            $('.floating-icon').addClass('active');
            $('.live-chat-popup').removeClass('active');
        });

        $(document).on('click','.login-popup .cross-icon',function(e){
            e.preventDefault();
            $('.login-popup').removeClass('active');
            $('.body-overlay').removeClass('active');
            $('.floating-icon').removeClass('active');
        });

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            $('.login-popup').removeClass('active');
            $('.body-overlay').removeClass('active');
            $('.floating-icon').removeClass('active');
        });

        $(document).on('click', '.when-click-signup', function(e) {
            e.preventDefault();
            $('.login-content').addClass('part-hide');
            $('.signup-content').addClass('part-active');
        });
        $(document).on('click', '.when-click-login', function(e) {
            e.preventDefault();
            $('.login-content').removeClass('part-hide');
            $('.signup-content').removeClass('part-active');
        });

        $(document).on('click', '.when-click-forgot-password', function(e) {
            e.preventDefault();
            $('.login-content').addClass('part-hide');
            $('.signup-content').addClass('part-hide');
            $('.forgot-password-content').addClass('part-active');
        });


        $('.trash-icon-1').on('click', function(){
            $('.single-item-function-1').hide();
        });
        $('.trash-icon-2').on('click', function(){
            $('.single-item-function-2').hide();
        });
        $('.trash-icon-3').on('click', function(){
            $('.single-item-function-3').hide();
        });

        // Cart Item Slide 

        $(document).on('click', '.dot-01', function(e) {
            e.preventDefault();
            $(this).parent().parent().find('.image-item-01').addClass('item-hide');
            $(this).parent().parent().find('.image-item-02').addClass('item-active');
            $(this).parent().parent().find('.dot-01').addClass('active');
            $(this).parent().parent().find('.dot-02').removeClass('active');
        });
        $(document).on('click', '.dot-02', function(e) {
            e.preventDefault();
            $(this).parent().parent().find('.image-item-01').removeClass('item-hide');
            $(this).parent().parent().find('.image-item-02').removeClass('item-active');
            $(this).parent().parent().find('.dot-01').removeClass('active');
            $(this).parent().parent().find('.dot-02').addClass('active');
        });


        // Share Icon

        $(document).on('click','.with-icon',function(e){
            $(this).parent().find('.bottom-share-icon').toggleClass('active');
        });

        var lastScrollTop = "";
        var floatingIcon = $("#service_info_item");
        $(window).on("scroll", function() {
            /*---------------------------------------
            sticky menu activation && Sticky Icon Bar
            -----------------------------------------*/
            var st = $(this).scrollTop();
            var mainMenuTop = $(".navbar-area");
            if ($(window).scrollTop() > 1000) {
                if (st > lastScrollTop) {
                    // hide sticky menu on scrolldown
                    mainMenuTop.removeClass("nav-fixed");
                } else {
                    // active sticky menu on scrollup
                    mainMenuTop.addClass("nav-fixed");
                }
            } else {
                mainMenuTop.removeClass("nav-fixed ");
            }
            if ($(window).width() < 992) {
                if (st > lastScrollTop) {
                    // hide sticky menu on scrolldown
                    showFloatingIcon();
                } else {
                    // active sticky menu on scrollup
                    hideFloatingIcon();
                }
            }
            lastScrollTop = st;
            var ScrollTop = $('.back-to-top');
            if ($(window).scrollTop() > 1000) {
                ScrollTop.fadeIn(1000);
            } else {
                ScrollTop.fadeOut(1000);
            }
        });
        $(window).on("resize", function(e) {
            e.preventDefault();
            //floatingIcon
            if ($(window).width() < 768) {
                hideFloatingIcon();
            } else {
                showFloatingIcon();
            }
        });
        function hideFloatingIcon() {
            //floatingIcon
            floatingIcon.hide();
        }
        function showFloatingIcon() {
            //floatingIcon
            floatingIcon.show();
        }


        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/  
        $(document).on('click','.navbar-area .navbar-nav li.menu-item-has-children>a',function(e){
            e.preventDefault();
        })  

         /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        
        /*---------------------------
            Home 1 Banner Slider
        ---------------------------*/
        $('.slider-area').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: false,
            autoplayTimeout: 4000,
            smartSpeed: 1500,
            nav: true,
            navText: ['&lhard;','&rharu;'],
            dots: true,
            animateOut: 'fadeOut',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    autoplay: false,
                },
                767: {
                    items: 1,
                    autoplay: false,
                },
                991: {
                    items: 1,
                }
            }
        });

        /*---------------------------
            About Slider
        ---------------------------*/

        $('.team-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.team-nav'
          });
          $('.team-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.team-slider',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
          });
              

        /*---------------------------
            Home 2 Banner Slider
        ---------------------------*/

        $('.home-2-slider').slick({
            dots: true,
            infinite: true,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            arrows: false,
            responsive: [
              {
                breakpoint: 991,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                  arrows: false,
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              },
              {
                breakpoint: 0,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
          });

        $('.fashion-blog-slider').slick({
            dots: false,
            infinite: true,
            speed: 1500,
            autoplaySpeed: 4000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-long-arrow-right"></i>',
          });

          $('.fashion-blog-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var totalSlide = slick.slideCount;
            var currentSlideindex = ++slick.currentSlide;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSlideindex;
            ProgressbarStart(progressWidth)
            $('.controler-wrapper .total-controler').text(check_number(totalSlide));
            $('.controler-wrapper .active-controler').text(check_number(currentSlideindex));

        });

        function ProgressbarStart(bannerprogress) {
            $('.progressbar .home-slider-progress-active').css({ 'width': bannerprogress + '%' });
        }

        // check_number function
        function check_number(num) {
            var IsInteger = /^[0-9]+$/.test(num);
            return IsInteger ? "0" + num : null;
        }

        

        /*---------------------------
            Fashion Shop Slider
        ---------------------------*/
        $('.fashion-shop-slider').slick({
            dots: false,
            infinite: true,
            speed: 1500,
            autoplaySpeed: 4000,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow: '<i class="fa fa-long-arrow-right"></i>',
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
          });

          $('.fashion-shop-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var totalSlide = slick.slideCount;
            var currentSlideindex = ++slick.currentSlide;
            var progress = 100 / totalSlide;
            var progressWidth = progress * currentSlideindex;
            ProgressbarStart(progressWidth)
            $('.controler-wrapper .total-controler').text(check_number(totalSlide));
            $('.controler-wrapper .active-controler').text(check_number(currentSlideindex));

        });

        function ProgressbarStart(bannerprogress) {
            $('.progressbar .home-slider-progress-active').css({ 'width': bannerprogress + '%' });
        }
        
        
        /*---------------------------
            Client Slider
        ---------------------------*/
        $('.client-slider').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 4000,
            smartSpeed: 1500,
            nav: true,
            navText: ['&lhard;','&rharu;'],
            dots: false,
            // animateOut: 'fadeOut',
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1,
                },
                991: {
                    items: 2,
                }
            }
        });


        /*---------------------------
            Video PopUp
        ---------------------------*/
        $('.video-icon a').magnificPopup({
            type: 'iframe'
        });

        

        /*---------------------------
            Picks Tab
        ---------------------------*/

        $(".tab-accordion ul li").on('click', function() {
            var tabClass = $(this).attr("class");
            $(this).addClass("active").siblings().removeClass("active");
            $("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
        });

        
        /*---------------------------
            Picks Image PopUp
        ---------------------------*/
        $('.picks-icon a').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });
        
        
        // Cart Page Photo Change
        $('.cart-banner .hover-state a').on('click', function(e){
            e.preventDefault();
            $('.cart-page-banner-bg').css({
                'background-image' : 'url('+$(this).attr('href')+')'
            });
        });


        /*---------------------------
            Gallery Slider
        ---------------------------*/
        $('.gallery-slider').owlCarousel({  
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            // animateOut: 'fadeOut',
            smartSpeed: 1500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        });

        /*---------------------------
            Gallery Image PopUp
        ---------------------------*/
        $('.gallery-area .hover-state a').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true
            }
        });


        /*---------------------------
            Instagram Slider
        ---------------------------*/
        $('.instagram-slider').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            dots: false,
            // animateOut: 'fadeOut',
            smartSpeed: 1500,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                767: {
                    items: 3
                },
                991: {
                    items: 6
                }
            }
        });


        $('.datepicker1').datepicker();
        $('.datepicker2').datepicker();

        /*---------------------------
            Cart Page Slider
        ---------------------------*/
        $('.related-slider').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplaySpeed: 1500,
            nav: true,
            navText: ['<img src="assets/img/arrow/next-arrow.png">', '&rharu;'],
            dots: false,
            // animateOut: 'fadeOut',
            smartSpeed: 700,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                767: {
                    items: 2,
                    nav: false

                },
                991: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });

        /*---------------------------
            Also Like Slider
        ---------------------------*/
        $('.also-like-slider').owlCarousel({
            loop: true,
            margin: 20,
            autoplay: false,
            autoplayTimeout: 4000,
            autoplaySpeed: 1500,
            nav: false,
            dots: false,
            // animateOut: 'fadeOut',
            smartSpeed: 700,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
        
        /*---------------------------
            CountDown
        ---------------------------*/

        $('.countdown').downCount({
            date: '07/09/2030 12:00:00',
            offset: +6
        }, function () {
            //alert('Countdown done!');
        });


        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
        bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','#search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
        bodyOvrelay.addClass('active');
        });

        
        /*-----------------------------
            Category Initial Active
        ------------------------------*/

        var singlepricing = $('.categories-area .single-item')
        
        singlepricing.mouseover(function() {
            singlepricing.removeClass('active');
            $(this).addClass('active');
        });

        /* Single Cart Initial Active */
        var singleCart = $('.single-cart-item')

        singleCart.mouseover(function() {
            singleCart.removeClass('active');
            $(this).addClass('active');
        });


        /*----------------------
            Custom Code
        -----------------------*/

        $('.closepop i').on('click', function(){
            $(this).parents('.popup-alert').hide();
        });
        
        $('.trash-icon i').on('click', function(){
            $(this).parents('#single-item').hide();
        });

    });


    //define variable for store last scrolltop
    var lastScrollTop = '';

    $(window).on('scroll', function () {
        
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }

       /*--------------------------
        sticky menu activation
       -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }

        lastScrollTop = st;
       
    });
           

    $(window).on('load',function(){

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);


        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });


        /*---------------------
            Back To Top
        ----------------------*/
        $(".back-to-top").on('click', function() {
            $("html").animate({
                "scrollTop": "0"
            }, 2000);
        });

    });


})(jQuery);