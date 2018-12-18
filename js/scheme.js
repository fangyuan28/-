$(window).scroll(function(){
	if($(this).scrollTop()>464){
		$('.nav').css(
			{
				'position':'fixed',
				'background':'#fff',
				'top':'0px',
			}
		)
		$('.nav a').css('color','#222')
	}else{
		$('.nav').css(
			{
				'position':'absolute',
				'background':'rgba(0,0,0,.7)',
				'bottom':'0px',
				'top':'null',
			}
		)
		$('.nav a').css('color','#fff')
	}
})

$('.table-color').on('click',function(){
	$('.table-color').removeClass('color')
	 $(this).addClass('color')
})








