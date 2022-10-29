$(function() {
    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    
    let nav =$("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function(){

        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH)
    });

    function checkScroll(scrollPos, introH){
        if(scrollPos > introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        nav.removeClass("show");

        console.log(elementOffset)

        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 500);

    })

    // Nav Toggle
    
    navToggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show")
    });

    // Reviews https://kenwheeler.github.io/slick/
    let slider = $("#reviewsSlider");
   
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true, // другой тим слайдера
        arrows: false, // стрелки, кнопки для перелистывания
        dots: true // точки показывающие кол-во слайдов
    });
});