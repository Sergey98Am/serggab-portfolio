$(document).ready(function() {
	$('.menu-toggle').click(function() {
		$(this).toggleClass('active');
		$('.menu-nav ').toggleClass('active-nav');
		$("body").toggleClass("over");
	});

	$('.toggle-btn').click(function() {
		$(this).toggleClass('act');
        $('.cat-items').toggleClass('act-its');
	});
	$('.menu-nav li').click(function() {
		$('.menu-nav ').removeClass('active-nav');
		$('.menu-toggle').removeClass('active');
		$("body").toggleClass("over");
	});

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 50) {
			$('.full-menu').css({ 'background-color': '#212121' });
		} else {
			$('.full-menu').css({ 'background-color': 'transparent' });
		}
	});

	
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > $('.section-1').offset().top - 150) {
			$('.about').css({ color: 'grey' });
		} else {
			$('.about').css({ color: '#fff' });
		}
		if ($(window).scrollTop() > $('.section-2').offset().top - 150) {
			$('.about').css({ color: '#fff' });
			$('.portfolio').css({ color: 'grey' });
		} else {
			$('.portfolio').css({ color: '#fff' });
		}
		if ($(window).scrollTop() > $('.footer').offset().top - 150) {
			$('.portfolio').css({ color: '#fff' });
			$('.contacts').css({ color: 'grey' });
		} else {
			$('.contacts').css({ color: '#fff' });
		}
	});

	$(".menu-nav li").on("click", function(e){
		e.preventDefault();
		var tg = $(e.target).attr("data-id");
		var t = "#" + tg;
		var ofs = $(t).offset().top;
		$("html, body").animate({scrollTop: ofs - 70},500)
	})

});
