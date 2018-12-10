
// table切换
$('.nav').on('click','span',function(){
  $('.nav span').removeClass('current')
  $('.table').addClass('hiden')
  $('.nav span').eq($(this).attr('data-index')-1).addClass('current')
  $('.table').eq($(this).attr('data-index')-1).removeClass('hiden')
})


$(window).scroll(function(){
  if($(this).scrollTop()>464){
    $('.nav').css(
      {
        'position':'fixed',
        'background':'#fff',
        'top':'0px',
      }
    )
    $('.nav span').css('color','#222')
  }else{
    $('.nav').css(
      {
        'position':'absolute',
        'background':'rgba(0,0,0,.7)',
        'bottom':'0px',
        'top':'null',
      }
    )
    $('.nav span').css('color','#fff')
  }
})


$('.move-table').on('click',function(){
  $('.merit-icon').find('img').removeClass('rotate180')
  $('.merit-icon').eq($(this).attr('data-index')-1).find('img').toggleClass('rotate180')
  $('.move-table').find('.merit-nav-header').removeClass('color')
  $(this).find('.merit-nav-header').toggleClass('color')

  $('.move-table1').removeClass('height0')
  $(this).next().toggleClass('height0')
})