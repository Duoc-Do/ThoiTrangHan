(function($) {

    'use strict';

    var App = {

        /**
         * Init
         */
        init: function() {
            App.feature();
        },

        /**
         * Feature
         */
        feature: function() {
            // Slider
            $('#slider').nivoSlider();
            $('#slider-detail').nivoSlider({
                controlNav: true,
                controlNavThumbs: true
            });
            // Slider link
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                // autoWidth:true,
                autoplay: true,
                lazyLoad: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });




            $('.pgwSlideshow').pgwSlideshow({
                displayControls: 'false',
                transitionEffect: 'fading',
                displayList: 'true'
            });
            $('body').append('<a href="#" title="Lên Đầu" class="goto_top"><i class="glyphicon glyphicon-chevron-up"></i></a>');
            $(window).scroll(function() {
                if ($(window).scrollTop() != 0) {
                    $('.goto_top').fadeIn();
                    $('#footer').console.log('hello');
                } else { $('.goto_top').fadeOut(); }
            });
            $('.goto_top').click(function() {
                $('html, body').animate({ scrollTop: 0 }, 500)
            });
            $('[data-toggle="tooltip"]').tooltip();
            $('.carousel').carousel({
                interval: false
            });


        }
    };

    $(function() {
        App.init();
    });

})(jQuery);
