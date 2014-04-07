$(function(){
	var rand = 1;

	function randoCalrissian(current){
		var max = 8;
		var rando = Math.floor(Math.random()*max)+1;
		return current == rando ? randoCalrissian(current) : rando;
	}

	function changeBackground(){
		//range and random choice
		rand = randoCalrissian(rand);

		//animate the background change by fading out the old and fading in the new
		$('body').css('background-image', 'none');
		$('.background').animate(
			{ opacity: 0 }, 'fast',
			function(){
				$(this).css('background-image', 'url(images/backgrounds/' + rand + '.jpg)').animate(
					{ opacity: 1 }, 'fast',
					function(){
						$('body').css('background-image', 'url(images/backgrounds/' + rand + '.jpg)');
					}
				);
			}
		);
	}

	$('span.menu-item').not('.ignore').click(function(event){
		$(this).next('ul:first').slideToggle('fast');
		event.preventDefault();
	});

	$('.change-bg').click(function(event){
		changeBackground(rand);
		event.preventDefault();
	});
	
	if(document.images){
		img1 = new Image();
		img2 = new Image();
		img3 = new Image();
		img4 = new Image();
		img5 = new Image();
		img6 = new Image();
		img7 = new Image();
		img8 = new Image();

		img1.src = "images/backgrounds/1.jpg";
		img2.src = "images/backgrounds/2.jpg";
		img3.src = "images/backgrounds/3.jpg";
		img4.src = "images/backgrounds/4.jpg";
		img5.src = "images/backgrounds/5.jpg";
		img6.src = "images/backgrounds/6.jpg";
		img7.src = "images/backgrounds/7.jpg";
		img8.src = "images/backgrounds/8.jpg";
	}
});