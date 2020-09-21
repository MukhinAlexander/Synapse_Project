var winWid = $(window).width();
$('.close-menu').fadeOut(0)


$('.burger-menu').on('click', function(e){
    e.preventDefault();

        $('.sidebar').toggleClass('menu-active'),
        $('.menu').toggleClass('menu-list_active'),
        $('.burger-menu').fadeOut(),
        $('.close-menu').fadeIn();

        return false
})

$('.close-menu').on('click', function(e){
    e.preventDefault();
    $('.close-menu').fadeOut(0),
    $('.menu').removeClass('menu-list_active'),
    $('.sidebar').removeClass('menu-active'),
    $('.burger-menu').fadeIn();
    return false
})

$('.mobile-menu').on('click',function(e){
    e.preventDefault();
    $('.mobile-menu-btn').toggleClass('mobile-menu-btn_close');
    $('.sidebar').toggleClass('mobile_sidebar')
})

$(function(){
    $("#comparator__slider").twentytwenty({
        no_overlay: true,
        default_offset_pct: 0.485
    });
});

$('.play').on('click', function(e){
    e.preventDefault();
    $(this).css('display','none'),
    $('.screensave').css('display','none');
    var $video = $('#video'),
		src = $video.attr('src');
 
	$video.attr('src', src + '&autoplay=1');
})

