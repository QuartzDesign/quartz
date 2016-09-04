$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() >= 300) {
            $('.navbar, .expo-blur-background').addClass('nse-scrolled--from--top');
        }else {
            $('.navbar, .expo-blur-background').removeClass('nse-scrolled--from--top');
        }
    })

    $('[scroll-target]').click(function(){
        var $targetObj = $('#' + $(this).attr('scroll-target')), $this = $(this)
        $("html, body").animate({ scrollTop: $targetObj.offset().top }, 800, 'easeInOutQuart')
    })

    $('.en-l').hover(function(e) {
        $(e.target).closest('li').toggleClass('sensed')
    })

})
