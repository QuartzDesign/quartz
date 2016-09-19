$(document).ready(function() {
    $(window).scroll(function() {
        var el = ".navbar, .expo-blur-background"
        $(this).scrollTop() >= 300
            ? $(el).addClass('nse-scrolled--from--top')
            : $(el).removeClass('nse-scrolled--from--top');
    })

    $('[scroll-target]').click(function(){
        var $targetObj = $('#' + $(this).attr('scroll-target')), $this = $(this)
        $("html, body").animate({ scrollTop: $targetObj.offset().top }, 800, 'easeInOutQuart')
    })

    $('.en-l').hover(function(e) {
        $(e.target).closest('li').toggleClass('sensed')
    })

    $(window).ready(function(n) {
            if(/index.html/.test(self.location.href) || /g/.test(self.location.href)) {
                $('.expo-icon').on('click', function(e) {
                    if($(window).offset().top == 0){
                        $(window).stop(true, true)
                        if(typeof console !== undefined) {
                            console.error("Page is scrolled to TOP! Clearing event queue and ending animation")
                        }
                    }
                    e.preventDefault();
                    $("html, body").animate({ scrollTop: 0 }, 800, 'easeInOutQuart')
                })
            }
            if(!/index.html/.test(self.location.href)) {
                $('.expo-icon').on('click', function(e) {
                    e.preventDefault();
                    location.href = "index.html"
                })
            }
        })

})
