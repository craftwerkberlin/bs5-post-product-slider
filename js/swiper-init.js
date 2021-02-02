jQuery(document).ready(function ($) {

    $(document).ready(function (e) {
        checkMobile = window.matchMedia('(max-width: 767px)');
        checkTablet = window.matchMedia('(min-width: 768px) and (max-width: 991px)');
        checkDesktop = window.matchMedia('(min-width: 992px) and (max-width: 1399px)');
        checkDesktopXXL = window.matchMedia('(min-width: 1400px)');
    });

    $(document).ready(function (e) {
        if (checkMobile.matches) {
            $(window).trigger('mobile');
        } else if (checkTablet.matches) {
            $(window).trigger('tablet');
        } else {
            $(window).trigger('desktop');
        }
        if (checkDesktopXXL.matches) {
            $(window).trigger('desktopxxl');
        }
    });

    $(document).ready(function (e) {
        checkMobile.addListener(function (event) {
            if (event.matches) {
                $(window).trigger('mobile');
            }
        });
        checkTablet.addListener(function (event) {
            if (event.matches) {
                $(window).trigger('tablet');
            }
        });
        checkDesktop.addListener(function (event) {
            if (event.matches) {
                $(window).trigger('desktop');
            }
        });
        checkDesktopXXL.addListener(function (event) {
            if (event.matches) {
                $(window).trigger('desktopxxl');
            }
        });
    });

    // Init
    $(window).on('mobile', function (e) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: '1', //'auto'
            spaceBetween: 30,
            //loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });

    $(window).on('tablet', function (e) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: '2', //'auto'
            spaceBetween: 30,
            //loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });


    $(window).on('desktop', function (e) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: '3', //'auto'
            spaceBetween: 30,
            //loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });

    $(window).on('desktopxxl', function (e) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: '4', //'auto'
            spaceBetween: 30,
            //loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });
    // Init End    

});
