$(document).ready(function(){
	


/*Обратный отсчет на странице*/
	var clock = $('section.givaway .clock_wrap').FlipClock({
		clockFace : "DailyCounter",
		autoStart: false,
		countdown: true,
		language: 'ru-ru'

	});
	var dt = "February 28 2020 00:00:00"; /*Дата окончания отсчета*/
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /= 1000;
	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();





/*Табы*/
	$('#triggerTrade').click(function(){
		$('.tab_wrap .tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_block').removeClass('active');
		$('#tradeContent').addClass('active');
	})
	$('#triggerScreenshots').click(function(){
		$('.tab_wrap .tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_block').removeClass('active');
		$('#screenshotsContent').addClass('active');
		setTimeout(function(){
			$('.screenshots_slider').slick({
				slidesToShow: 4,
		  		slidesToScroll: 1,
		  		dots:true,
		  		arrows:true,
		  		responsive: [
			    {
			      breakpoint: 1311,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint:769,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 601,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
			})
		},400)
		
	})
	$('#triggerProducts').click(function(){
		$('.tab_wrap .tab').removeClass('active');
		$(this).addClass('active');
		$('.tab_block').removeClass('active');
		$('#productsContent').addClass('active');
	})


	$('#var1').click(function(){
		$('.variant_tabs .tab').removeClass('active');
		$(this).addClass('active');
		$('.variant_content .content').removeClass('active');
		$('#contentVar1').addClass('active');
	})
	$('#var2').click(function(){
		$('.variant_tabs .tab').removeClass('active');
		$(this).addClass('active');
		$('.variant_content .content').removeClass('active');
		$('#contentVar2').addClass('active');

	})
	$('#var3').click(function(){
		$('.variant_tabs .tab').removeClass('active');
		$(this).addClass('active');
		$('.variant_content .content').removeClass('active');
		$('#contentVar3').addClass('active');
	})

	$("body").on("click","header a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


/*Мобильное меню*/
	$('.mobile_trigger').click(function(){
		$('#mobileMenu').addClass('active');
	})
/*Закрытие Мобильное Меню*/
	$('.close').click(function(){
		$('#mobileMenu').removeClass('active');
	})
	$('#mobileMenu a').click(function(){
		$('#mobileMenu').removeClass('active');
	})

})