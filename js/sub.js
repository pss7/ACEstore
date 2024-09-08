$(function () {

    function updateFileName(inputId, fileName) {
        $(`#${inputId}`).val(fileName || '선택된 파일 없음');
    }
    $('input[type="file"]').on('change', function () {
        const fileInputId = $(this).attr('id');
        const fileName = this.files.length > 0 ? this.files[0].name : '';

        updateFileName(`uploadName${fileInputId.replace('file', '')}`, fileName);
    });

    $('#file07').on('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').attr('src', e.target.result).show();
            }
            reader.readAsDataURL(file);
        } else {
            $('#imagePreview').hide();
        }
    });

    /* slick */
    $('.textSlide01 .slick01').slick({
        variablewidth: true,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: $('.textSlide01 .control .prev'),
        nextArrow: $('.textSlide01 .control .next'),
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

    /* slick */
    $('.textSlide02 .slick02').slick({
        variablewidth: true,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: $('.textSlide02 .control .prev'),
        nextArrow: $('.textSlide02 .control .next'),
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

    /* popup */
    $('.popupWrap .popupClose').click(function () {
        $('.popupbg').hide();
        $('.popupWrap').hide();
    });

    $('.popupWrap .close').click(function () {
        $('.popupbg').hide();
        $('.popupWrap').hide();
    });

    /* 클릭 애니메이션 */
    $(".tab li a").click(function () {
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600);
    });

});