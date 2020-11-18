$(function () {
    $('.rooms__img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.rooms__description',
    });
    $('.rooms__description').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.rooms__img',
        fade: true,
        dots: true,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/icons/rooms-arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/icons/rooms-arrow-right.svg" alt="right-left"></button>',
        responsive: [{
            breakpoint: 769,
            settings: {
                prevArrow: false,
                nextArrow: false,
                arrows: false,
                dots: true
            }
        }]
    });

    $('.review__inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/icons/rooms-arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/icons/rooms-arrow-right.svg" alt="right-left"></button>',
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: false,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //burger-menu
    $('.header__btn').on('click', function () {
        $('.menu__list-js, .header__btn-social>ul').slideToggle();
        $('.header__btn').toggleClass('active');
    });

    $('.menu__list-link-js').on('click', function () {
        $('.menu__list-js').slideToggle();
        $('.header__btn').toggleClass('active');
    });

    //start popup
    //popup открыть  по кнопке
    $('.reserve__btn,.rooms__btn.btn-hover,.cards__btn.btn-hover').on('click', function () {
        $('.overlay-js').fadeIn();
        $('.overlay-js').addClass('disabled');
    });
    //popup закрыть на крестик
    $('.popup__close-js').on('click', function () {
        $('.overlay-js').fadeOut();
        $('body').css('filter', 'none');
    });
    //popup закрыть вне окна
    $(document).mouseup(function (e) {
        let popup = $('.popup-js');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.overlay-js').fadeOut();
            $('body').css('filter', 'none');
        }
    });
    //start filter
    //filter открыть  по кнопке
    $('.block-filter').on('click', function () {
        $('.overlay__aside').fadeIn();
        $('.overlay__aside').addClass('disabled');
    });
    //filter закрыть на крестик
    $('.aside__close-js').on('click', function () {
        $('.overlay__aside').fadeOut();
        $('body').css('filter', 'none');
    });

    var mixer = mixitup('#cards__inner');

});