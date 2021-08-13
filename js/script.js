$(document).ready(function(){
    $('.image-slider__item').mouseenter(function(event){
        $('.image-slider__text1, .image-slider__search, .image-slider__text2').toggleClass('active');
    });
    $('.image-slider__item').mouseleave(function(event){
        $('.image-slider__text1, .image-slider__search, .image-slider__text2').toggleClass('active');
    });

    $('.image-slider__item2').mouseenter(function(event){
        $('.image-slider__text1, .image-slider__search, .image-slider__text2').toggleClass('active2');
    });
    $('.image-slider__item2').mouseleave(function(event){
        $('.image-slider__text1, .image-slider__search, .image-slider__text2').toggleClass('active2');
    });

    $('.image-slider__item3').mouseenter(function(event){
        $('.image-slider__text1, .image-slider__search, .image-slider__text2').toggleClass('active3');
    });
    $('.image-slider__item3').mouseleave(function(event){
        $('.image-slider__text1, .image-slider__search, .image-slider__text2').toggleClass('active3');
    });

    $('.image-slider__item4').mouseenter(function(event){
        $('.image-slider__text1, .image-slider__search, .image-slider__text2').toggleClass('active4');
    });
    $('.image-slider__item4').mouseleave(function(event){
        $('.image-slider__text1, .image-slider__search, .image-slider__text2').toggleClass('active4');
    });

    $('.first-block__burger').click(function(event){
        $('.left-nav').toggleClass('active');
    });
    $('.close').click(function(event){
        $('.left-nav').toggleClass('active');
    });

    $('.prev').mouseup(function(event){
        $('.poster2').toggleClass('active');
    });
    $('.next').click(function(event){
        $('.poster2').toggleClass('active');
    });
});


new Swiper('.img-slider',{
    slidesPerView: 4,
    loop: true,
    looperSlide: 4,
    breakpoints:{
        320:{
            slidesPerView: 1,
            looperSlide: 1,
            spaceBetween: 5,
        },
        700:{
            slidesPerView: 3,
            looperSlide: 3,
            spaceBetween: 50,
            centeredSlides: true,
        },
        993:{
            slidesPerView: 4,
            looperSlide: 4,
        },
    },
});
new Swiper('.image-slider',{
    slidesPerView: 4,
    loop: true,
    looperSlide: 4,
    spaceBetween: 19,
    breakpoints:{
        576:{
            slidesPerView: 1.19,
            looperSlide: 1, 
            
        },
        768:{
            slidesPerView: 1.5,
            looperSlide: 1, 
            spaceBetween: -15,
        },
        1920:{
            slidesPerView: 4,
            loop: true,
            looperSlide: 4,
            spaceBetween: 6,
        },
    },
});