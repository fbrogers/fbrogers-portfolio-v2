$(function(){
	$('nav > ul > li[class!="ignore"] > a').click(function(event){
		$(this).next('ul:first').slideToggle('fast');
		event.preventDefault();
	});

	$('#change-bg').click(function(event){
		//range and random choice
		var rand = Math.floor(Math.random()*70)+1;

		//animate the background change by fading out the old and fading in the new
		$('#background').animate({ opacity: 0 }, 'fast', function(){
			$(this).css({
				'background-image': 'url(images/backgrounds/' + rand + '.jpg)'
			}).animate({ opacity: 1 });
		});

		event.preventDefault();
	});

	//prevent blanks from firing
	$('.ignore a[href="#"]').click(function(){
		event.preventDefault();
	});
});