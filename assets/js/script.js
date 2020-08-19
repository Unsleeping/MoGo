$(function() {
    
    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    
    /* Fixed header */
    checkScroll(scrollOffset); // for check after updating page
    
    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop(); 
        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
        $('#nav').removeClass('active');
    };
    
    
    /* Smooth scroll */
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault(); // remove default settings
         
        var $this = $(this),
            blockId = $this.data('scroll'), // contain blockId of the scrolling element
            blockOffset = $(blockId).offset().top;
        
        $('#nav a').removeClass('active'); // remove class from the whole a in nav
        $this.addClass('active');
        
        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    
    /* Menu nav toggle */
    $('#nav_toggle').on('click', function(event) {
        event.preventDefault();
        
        $('#nav').toggleClass('active');
        $(this).toggleClass('active');
        
    });
    
    
    /* Collapse */
    $('[data-collapse]').on('click', function(event) {
        event.preventDefault();
        
        $(this).toggleClass('active');
        
    });
    
    
    /* Slider */
    $('[data-slider]').slick({
        infinity: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
});