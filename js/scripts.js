// from typed import 
$(document).ready(()=>{
	$(".about-btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#about").offset().top
		}, 1200);
		$('.menu li').removeClass('selected');
		$(this).children().addClass('selected');
		// var windowSize = $(window).width();
		// if (windowSize <= 540) {
		// 	$('.hamburger-menu').toggle();
		// }
	});
	$(".projects-btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 1200);
		$('.menu li').removeClass('selected');
		$(this).children().addClass('selected');
		// var windowSize = $(window).width();
		// if (windowSize <= 540) {
		// 	$('.hamburger-menu').toggle();
		// }
	});
	$(".contact-btn").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1200);
		$('.menu li').removeClass('selected');
		$(this).children().addClass('selected');
		// var windowSize = $(window).width();
		// if (windowSize <= 540) {
		// 	$('.hamburger-menu').toggle();
		// }
	});
	
	// Reveal skills on scroll
	window.sr = ScrollReveal({duration: 2000});
	sr.reveal('.tech', 50);

	// Reveal name when scrolled down.
	$(document).scroll(()=>{
		if($(document).scrollTop() > $('#about').offset().top - 42){
			// console.log('Time to disappear!');
			$('.nav').css("background-color", "rgba(255, 255, 255, 0)");
			$('.option').css({"border": ".5px solid grey", "background-color": "rgba(255, 255, 255, 0.7)", "border-radius": "15px"});
			// $('.nav').animate({backgroundColor: "rgba(255, 255, 255, 0)"});
		}else{
			$('.nav').css("background-color", "rgba(255, 255, 255, 0.7)");
			// $('.nav').animate({backgroundColor: "rgba(255, 255, 255, 0.7)"});
			$('.option').css({"border": "none", "background-color": "rgba(255, 255, 255, 0)"});
		}
		if($(document).scrollTop() > $('#projects').offset().top - 50){
			$('.my-name').fadeIn();
		}else{
			$('.my-name').fadeOut();
		}

		// console.log(`document: ${$(document).scrollTop()}`);
		// console.log(`skills: ${$('.empty').offset().top - $(window).height()}`);
	});

	var posOrNegArray = [-1, 1]
	var posOrNeg1 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar1 = Math.random() * 80 * posOrNeg1;
	var posOrNeg2 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar2= Math.random() * 80 * posOrNeg2;
	var posOrNeg3 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar3 = Math.random() * 80 * posOrNeg3;
	var posOrNeg4 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar4= Math.random() * 80 * posOrNeg4;
	var posOrNeg5 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar5 = Math.random() * 80 * posOrNeg5;
	var posOrNeg6 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar6 = Math.random() * 80 * posOrNeg6;
	var posOrNeg7 = posOrNegArray[Math.floor(Math.random() * 2)]
	var randVar7 = Math.random() * 80 * posOrNeg7;
	$('.bee-1').backgroundMove({
		movementStrength: `${randVar1}`
	});
	$('.bee-2').backgroundMove({
		movementStrength: `${randVar2}`
	});
	$('.bee-3').backgroundMove({
		movementStrength: `${randVar3}`
	});
	$('.bee-4').backgroundMove({
		movementStrength: `${randVar4}`
	});
	$('.bee-5').backgroundMove({
		movementStrength: `${randVar5}`
	});
	$('.bee-6').backgroundMove({
		movementStrength: `${randVar6}`
	});
	$('.bee-7').backgroundMove({
		movementStrength: `${randVar6}`
	});

	$('#typed-text').typeIt({
		strings: ["My name is Eddie.", "I'm a Full Stack Web Developer in Atlanta, GA.",
			"(And I used to study honey bees.)"],
		speed: 50,
		autoStart: false
	});

	$('.tech').hover(function(){
		$(this).children('a').fadeIn();
		},
		function(){
			$(this).children('a').fadeOut();
	});

	$('.hover-to-display').hover(function(){
		$(this).children('.project-hover').fadeIn();
		},
		function(){
			$(this).children('div').fadeOut();
	});

	$('[data-toggle="tooltip"]').tooltip({animation: true});

});