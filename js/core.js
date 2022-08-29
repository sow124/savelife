$(document).ready(function(){
    way2Carousel();
    fullAuto();
    activitydataSlider();
    tabbtn();
    commentbtn();   
    menubtn();
    donatescroll();
});
function way2Carousel(){
    $('.lifeTvSlider').bxSlider({
        auto:true,
        slideWidth: 615,
        maxSlides: 2,
        minSlides: 1,
        slideMargin:100,
        autoHover:true,
        controls:false,
        touchEnabled : false,
        pause:7000,
        speed:3000
    });
}
function fullAuto(){
    $('.tickerSlider').bxSlider({
        slideWidth:600,
        maxSlides: 4,
        minSlides: 1,
        controls:false,
        pager:false,
        ticker:true,
        tickerHover:true,
        speed:15000,
        slideMargin:30
    })
}
function activitydataSlider(){
    $('.activitydataSlider').bxSlider({
        auto:true,
        captions: true,
        slideWidth: 610,
        maxSlides:3,
        minSlides:1,
        pager:false,
        slideMargin:20,
        autoHover:true,
        pause:7000,
        speed:3000,
        preventDefaultSwipeY:true
    })
}
function tabbtn(){
    $(".householddisclosure div:nth-child(2) ul li").click(function(){
        $(".householddisclosure div:nth-child(2) ul li").removeClass('active');
        $(this).addClass('active');
        $(".householddisclosure div:nth-child(2) div").removeClass('active');
        $('#' + $(this).attr('data-tab')).addClass('active');
    })
}
function commentbtn(){
    $(".article div:nth-child(3) ul button").click(function(){
        $(".article div:nth-child(3) ul").removeClass('active');
    })
}
function menubtn(){
    var menuBar = $("header nav");
    $('.mui').click(function(){
        $(this).toggleClass('close');
         $(menuBar).toggleClass('active');
    });
    $('nav ul').click(function(e){
        e.stopPropagation();
    });
    $('header nav ul li span').click(function(){
        if($('header nav ul li > ul').hasClass('active')){
            $('header nav ul li > ul').removeClass('active');
            $('header nav ul li span').removeClass('active');
        }else{
            $(this).addClass('active');
            $(this).next('ul').addClass('active');
        }
    });
}
function donatescroll(){
    $(window).scroll(function(){
        if($('footer').offset().top < $(window).scrollTop()+($(window).height()*0.9))
        {
            $('header > a').addClass('active');
        }else{
            $('header > a').removeClass('active');
        }
    })
}







