$(document).ready(function () {

    $('.btn.btn-success').click(function(){
        $("#projectModal").modal("show");
    });

    var mq = window.matchMedia("(min-width: 992px)");
    var sr = new ScrollReveal();
    var isMobile = sr.tools.isMobile();

    // ScrollReveal should proceed if we’re not mobile,
    // or if we’re mobile with a matching minimum width. 
    if (!isMobile || isMobile && mq.matches) {
        sr.reveal('.foo', { reset: true });
        // window.sr = ScrollReveal({ mobile: false });
        sr.reveal('#about .img-responsive', {
            duration: 2000,
            origin: 'bottom',
            distance: '200px'
        });
        sr.reveal('.cd-headline', {
            duration: 2500,
            origin: 'top',
            distance: '200px'
        });
        sr.reveal('.project-image:nth-of-type(even)', {
            duration: 1500,
            origin: 'right',
            distance: '200px'
        });
        sr.reveal('.project-text:nth-of-type(even)', {
            duration: 1500,
            origin: 'right',
            distance: '200px'
        });
        sr.reveal('.project-image:nth-of-type(odd)', {
            duration: 1500,
            origin: 'left',
            distance: '200px'
        });
        sr.reveal('.project-text:nth-of-type(odd)', {
            duration: 1500,
            origin: 'left',
            distance: '200px'
        });
    }

    // Show/Hide scroll to top button

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('a').click(function () {
        if (this.hash == '#iOS') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });

    // Active background
    $('.navbar li').click(function (e) {

        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
    });

    $(".navbar-brand").click(function (e) {
        $('.navbar li.active').removeClass('active');
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    // Scrollspy animated
    $(".navbar li a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });

    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });

    try {
        TagCanvas.Start('myCanvas', 'tags', {
            interval: 40,
            textColour: '#1e90ff',
            outlineMethod: "none",
            reverse: true,
            depth: 0.8,
            animTiming: 'Smooth',
            weight: true,
            weightMode: "size",
            weightGradient: {
                0: '#f00',
                0.33: '#ff0',
                0.66: '#0f0',
                1: '#00f'
            },
            depth: 0.4,
            initial: [-0.2, -0.1],
            fadeIn: 3000,
            shuffleTags: true,
            dragControl: true
        });
    } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
    }
});