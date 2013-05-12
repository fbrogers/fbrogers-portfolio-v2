$(function(){
	var rand = 1;

	function randoCalrissian(current){
		var rando = Math.floor(Math.random()*10)+1;
		if(current == rando) return randoCalrissian(current);
		else return rando;
	}

	function changeBackground(){
		//range and random choice
		rand = randoCalrissian(rand);

		//animate the background change by fading out the old and fading in the new
		$('.background').animate({ opacity: 0 }, 'fast', function(){
			$(this).css({
				'background-image': 'url(images/backgrounds/' + rand + '.jpg)'
			}).animate({ opacity: 1 });
		});		
		$('body').css('background-image', 'url(images/backgrounds/' + rand + '.jpg)');
	}

	$('span.menu-item').not('.ignore').click(function(event){
		$(this).next('ul:first').slideToggle('fast');
		event.preventDefault();
	});

	$('.change-bg').click(function(event){
		changeBackground(rand);
		event.preventDefault();
	});
	
	//preload bg images
	if(document.images){
		img1 = new Image();
		img2 = new Image();
		img3 = new Image();
		img4 = new Image();
		img5 = new Image();
		img6 = new Image();
		img7 = new Image();
		img8 = new Image();
		img9 = new Image();
		img10 = new Image();

		img1.src = "images/backgrounds/1.jpg";
		img2.src = "images/backgrounds/2.jpg";
		img3.src = "images/backgrounds/3.jpg";
		img4.src = "images/backgrounds/4.jpg";
		img5.src = "images/backgrounds/5.jpg";
		img6.src = "images/backgrounds/6.jpg";
		img7.src = "images/backgrounds/7.jpg";
		img8.src = "images/backgrounds/8.jpg";
		img9.src = "images/backgrounds/9.jpg";
		img10.src = "images/backgrounds/10.jpg";
	}
});