$(function () {

    /* section01 - slick */
    $('#section01 .slickWrap .slick').slick({
        autoplay: true,
        arrows: true,
        dots: false,
        prevArrow: $('#section01 .control .prev'),
        nextArrow: $('#section01 .control .next'),
        accessibility: false,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 1500,
    });

    $('#section01 .slickWrap .slick').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.slideBtn li').children('a').removeClass('active');
        $('.slideBtn li').children('a').eq(currentSlide).addClass('active');
    });

    $('#section01 .slideBtn li a').click(function(){
        var idx = $('#section01 .slideBtn li a').index($(this));
        $('#section01 .slickWrap .slick').slick('slickGoTo', idx);
        return false;
     })

     /* aos */
     $(window).load(function () {
        AOS.init({
            duration: 1500
        });

    });

});