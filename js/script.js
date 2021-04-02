$(document).ready(function () {
    



    // nav bar responsive -----------
    $(".btn-bars-mobile").on('click',function () {
        $('.nav-bar').animate({
            left : "0",
        },600);
    });
    $(".btn-bars-concel").on('click',function () {
        $('.nav-bar').animate({
            left : "-100%",
        },600);
    });




    // home slide -----------------
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 0,
        allowTouchMove:false,
        speed: 1000,
        loop: true,
        effect: 'slide',
        autoplay: {
            delay: 5000,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
    });


    // faq accordion ---------------
    $( function() {
        $( "#accordion" ).accordion({
            collapsible: true,
            heightStyle: "content",
            active: false,
        });
    });














});