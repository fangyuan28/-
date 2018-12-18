
var flag=false,lan
if(localStorage.getItem('language')){
  lan=localStorage.getItem('language')
}else{
  lan='zh'
}



$('.language').on('click',function(){
  flag=true
  
  if(localStorage.getItem('language')=='en'){
    lan='zh'
  }else{
    lan='en'
  }
  lang()
})
// 初始化语言
lang()


function lang(){
  
  $('[data-localize]').each(function(){
      var me = $(this);
      var p = me.attr('data-localize').split('.')[0];
      var m = me.attr('data-localize').split('.')[1] || me.attr('data-localize');   //文字的标识
      //选取语言文字
      switch(lan){
          case 'zh':
              var t = p=='con' ? (zh.con[m] || zh[m]) : zh.val[m];  //这里cn[m]中的cn是上面定义的json字符串的变量名，m是json中的键，用此方式读取到json中的值
              break;
          case 'en':
              var t = p=='con' ? en.con[m] || en[m] : en.val[m];
              break;
          default:
              var t = '';
      }

      if(t==undefined) return true;   //如果还是没有就跳出

      //文字放置位置有（html,val等，可以自己添加）
    switch(p){
        case 'con':
            me.html(t);
            break;
        case 'val':
          console.log(t)
          $(me.context).attr('placeholder',t)
            // me.context.placeholder(t);
            break;
        default:
            me.html(t);
    }
  });
  if(flag){
    localStorage.language = localStorage.getItem('language') == 'zh' ? 'en' : 'zh'
  }
  // localStorage.language = localStorage.getItem('language') == 'zh' ? 'en' : 'zh'

}





// 浮窗返回顶部
if($('.top-img')){
  $('.top-img').on('click',function(){
    $("html,body").animate({scrollTop:"0px"}, 500);
  })
}

// 手机端nav
$('.san').on('click',function(){
  console.log(1)
  $('.header-nav').removeClass('flex al-ce')
  $('.header-nav').toggleClass('move-hiden')
})



// if(localStorage.getItem('PCGWName')){
//   $('.login span').text(localStorage.getItem('PCGWName'))
// }