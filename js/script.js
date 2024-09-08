$(function () {

    /* header - slick */
    $('#header .slickWrap .slick').slick({
        autoplay: true,
        arrows: false,
        dots: true,
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

    /* header - mobilemenu */
    $('.mobileDepth01 li:has(ul) h2').children('a').addClass('depth02');

    $('#header .mobileDepth01 > li > h2 > a').click(function () {
        if ($(this).parent().next().length) {
            if ($(this).parent().hasClass('active')) {
                $(this).parent().removeClass('active');
                $(this).parent().next().slideUp(300);
            }
            else {
                $('#header .mobileDepth01 > li > h2 > a').parent().removeClass('active');
                $(this).parent().addClass('active');
                $('#header .mobileDepth01 > li > h2 > a').parent().next().slideUp();
                $(this).parent().next().slideDown(300);
            }
            return false;
        }
    });

    $('#header .mobileBtn').click(function () {

        $('#header .mobileMenuWrap').animate({
            left: 0
        }, 200);
        $('.bg').show();

    });

    $('#header .mobileCloseBtn').click(function () {

        $('#header .mobileMenuWrap').animate({
            left: -3000
        }, 200);
        $('.bg').hide();
    });

    /* 상단이동 */
    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
    

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });


});