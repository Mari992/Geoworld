$(document).ready(function() {
	
	/*Fiksiran navbar*/
	document.onscroll = function() {
			if( $(window).scrollTop() > $('header').height() ) {
				$('nav > div.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
			}
			else {
				$('nav > div.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
				}
};

	/*Pojavljivanje i nestajanje teksta u Uslugama*/

		$("#image1 img").click(function () {
            $(".tekst1").slideToggle();
			
        });
		$("#image2 img").click(function () {
            $("#image2 .tekst2").slideToggle();
        });
		$("#image3 img").click(function () {
            $("#image3 .tekst3").slideToggle();
        });
		$("#image4 img").click(function () {
            $("#image4 .tekst4").slideToggle();
        });
		$("#image5 img").click(function () {
            $("#image5 .tekst5").slideToggle();
        });
		
	/*next/preview*/
	$("#slider-prev").click(function(){
		if($(".slider-a").is(":visible")){
			$(".slider-a").hide(2000);
		}else{
			$(".slider-b").hide(2000);
		}     				
	});

	$("#slider-next").click(function(){
		if(($(".slider-a").not(":visible")) && ($(".slider-b").is(":visible"))){
			$(".slider-a").show(2000);
		}else if(($(".slider-a").not(":visible")) && ($(".slider-b").not(":visible"))){
			$(".slider-b").show(2000);
		}
	});
	
	/*hover za slike u news*/
	$('.slider-img').hover(function(){
		$('.image-caption',this).slideToggle('slow');
	}, function(){
		$('.image-caption',this).slideToggle('slow');
    });
	/*hover za slike u uslugama*/
	$('.image-hover').hover(function(){
		$('img', this).stop().animate({opacity:.1},200);
	}, function(){
		$('img', this).stop().animate({opacity:1},500)
    });
});