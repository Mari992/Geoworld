var imgH = $('#myCarousel .carousel-inner').height();
var imgW = $('#myCarousel .carousel-inner').width();
$(document).ready(function() {
	
function fitSlider() {
        var wH = $(window).height() - $('#myCarousel').height();
        var wW = $(window).width();
        var winRatio = wW / wH;
        
        var imgRatio = imgW / imgH;
        console.log(winRatio, imgRatio);

        $('#myCarousel').css('height', wH);

        if ( imgRatio > winRatio )
        {
            $('#myCarousel .carousel-inner .item img').addClass('fit-height');
        }
        else
        {
            $('#myCarousel .carousel-inner .item img').removeClass('fit-height');
        }
    }
    $(window).bind('resize',function() {
        fitSlider();
    });
    $(window).load(function() {
        fitSlider();
    });
	});