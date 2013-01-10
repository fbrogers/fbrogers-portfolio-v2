$(function(){
	$('nav > ul > li > a').click(function(event){
		$(this).next('ul').not('.ignore').slideToggle('fast');
		event.preventDefault();
	});

	$('#change-bg').click(function(event){
		/*$('#background, body').css({
			'background-image': 'url(images/backgrounds/'+(Math.floor(Math.random()*max)+min)+'.jpg)'
		});*/

		var min = 1;
		var max = 70;
		var rand = Math.floor(Math.random()*max)+min;

		$('#background').animate({opacity: 0}, 'fast', function() {
			$(this).css({
				'background-image': 'url(images/backgrounds/' + rand + '.jpg)'
			}).animate({
				opacity: 1
			});
		});

		event.preventDefault();
	});
});