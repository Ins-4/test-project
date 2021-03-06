var menuWrapper = document.querySelector('header nav'),
    menuItem = document.querySelectorAll('header nav ul>li'),
    hamburger = document.querySelector('#hamburger');

window.addEventListener('DOMContentLoaded', function(){


    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('active');
        menuWrapper.classList.toggle('active');
    });

    menuItem.forEach(function(item){
        item.addEventListener('click', function (){
            hamburger.classList.toggle('active');
            menuWrapper.classList.toggle('active');
        })
    })
})

$('.title-block_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    arrows:false,
    dots: false,
    draggable: false,
    accessibility: false,
    autoplay: false,
    speed: 300,
    adaptiveHeight: true,
    swipe: false
});

$('.custom-dots li').click(function(e) {
    e.preventDefault();
    $('.custom-dots li').removeClass('active');
    var slideOn = $(this).addClass('active').data('slide');
    for(item of $('.custom-dots li')){
        if(item.dataset.slide == slideOn){
            item.classList.add("active")
        }
    }
    $('.title-block_slider').slick('slickGoTo', slideOn - 1);
});

function fixedHeader(){
    $('header').removeClass('nav-fixed');

    var headerMenuOffset = $('.header-menu').offset().top;

    var scrolled = $(this).scrollTop();
    if (scrolled >= headerMenuOffset && $(this).innerWidth()>767){
        $('header').addClass('nav-fixed');
    } else {
        $('header').removeClass('nav-fixed');

    }
}

fixedHeader()
window.addEventListener('resize', fixedHeader);
window.addEventListener('scroll', fixedHeader);




$(".go-to-top").click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});
