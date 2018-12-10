
      
// 轮播图
$('.banner').terseBanner({auto:4000}); 


// table切换
$('.table-btn').on('click','.merit-img',function(){
  $('.table').addClass('hiden')
  $('.table-btn').removeClass('color')
  $('.sjx').addClass('vis-hid')
  $('.table').eq($(this).attr('data-index')-1).removeClass('hiden')
  $('.table-btn').eq($(this).attr('data-index')).addClass('color')
  $('.sjx').eq($(this).attr('data-index')-1).removeClass('vis-hid')
})


$('.move-table').on('click',function(){
	$('.merit-icon').find('img').removeClass('rotate180')
	$('.merit-icon').eq($(this).attr('data-index')-1).find('img').toggleClass('rotate180')
	$('.move-table').find('.merit-nav-header').removeClass('color')
	$(this).find('.merit-nav-header').toggleClass('color')

	$('.move-table1').removeClass('height0')
	$(this).next().toggleClass('height0')
})



// // $('#svga').pauseAnimations()
// $('.svga').on('mouseout',function(){
// 	$(this).find('.animate').setAttribute('bur',null)
// 	// $(this).unpauseAnimations()
// })
// $('.svga').on('mouseover',function(){
// 	console.log($(this).find())
// 	// $(this).find('.animate').setAttribute('bur','10s')
// 	// console.log(1)
// 	// $(this).pauseAnimations()
// })

// console.log($('.svga').find('.animate'))