(function($){
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });
    $(document).ready(function() {

        // wow animation
        new WOW().init();
        if ($(window).width() <= 991){ 
            $(".wow").removeClass("wow");
        }
        // Scrolling
        $(function () {
            $(document).ready(function () {
                $("[data-serialscrolling]").serialscrolling();
            });
        });

        //menu options
        var fixed_top = $(".Menu-area");
        $(window).on('scroll', function(){
            if( $(this).scrollTop() > 100 ){  
                fixed_top.addClass("animated fadeInDown header-fixed");
            }
            else{
                fixed_top.removeClass("animated fadeInDown header-fixed");
            }
        });

        $(".menubar ul li span").on('click', function(){
            $('section').toggleClass("active");
        });
        
        //counterup
        $(window).on('scroll', function () {
            $('.counter').data('countToOptions', {
                formatter: function (value, options) {
                    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
            });
            // start all the timers
            $('.counter').each(count);  
            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }
        });
        
        // ajax contact form
        $(function() {
            var form = $('#contact-form');
            var formMessages = $('.form-message');
            $(form).submit(function(e) {
                e.preventDefault();
                var formData = $(form).serialize();
                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function(response) {
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');
                    $(formMessages).text(response);
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function(data) {
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
            });
        });

        // progress bar
        $(function () {
            $("#example").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example2").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example3").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example4").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example5").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example6").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example7").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example8").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example9").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
            $("#example10").pieChart({
                size: 100,
                trackColor: "#32435b",
                lineCap: "round",
                lineWidth: 8,
                animate: {
                    duration: 10000,
                    enabled: true,
                },
                onStep: function (from, to, currentValue) {
                    return;
                },
            });
        });

        // Typing Option here
        var typed = new Typed('.typing-mine', {
            strings: [
                "Web Design.",
                "Email Template Design.",
                "Landing Page Design.",
                "Freelancing.",
            ],
            typeSpeed: 70,
            backSpeed: 80,
            loop: true,
          });

        // scroll up start here
        $(function(){
            $(window).scroll(function(){
                if ($(this).scrollTop() > 200) {
                    $('.scrollToTop').css({'bottom':'2%', 'opacity':'1','transition':'all .5s ease'});
                } else {
                    $('.scrollToTop').css({'bottom':'-30%', 'opacity':'0','transition':'all .5s ease'})
                }
            });
            //Click event to scroll to top
            $('.scrollToTop').on('click', function(){
                $('html, body').animate({scrollTop : 0},500);
                return false;
            });
        });

        // Testimonial slider
        $(function() {
            var galleryThumbs = new Swiper('.myteam-profile-slider', {
                slidesPerView:3,
                spaceBetween: 10,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
            var galleryTop = new Swiper('.myteam-details-slider', {
                spaceBetween: 10,
                slidesPerView: 1,
                loop: true,
                autoplay:{
                    delay: 2500,
                    disableOnInteraction: false,
                },
                thumbs: {
                    swiper: galleryThumbs,
                },
            });
        });

        // Gellery part js
        // init Isotope
        var $grid = $('.gellary-box').isotope({
            itemSelector: '.gellary-item',
            layoutMode: 'fitRows',
            getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
            }
        });
        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
            }
        };
        // bind filter button click
        $('.button-group').on( 'click', 'button', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
            });
        });
            
        

    });
}(jQuery));




// lightcase 
$('a[data-rel^=lightcase]').lightcase();
       











