(function ($) {

 init()
 var flag = true;
 function init() {
  var ww = $(window).width()
  if ( ww>767 && flag ) {
     $('.logoNav .nav').show()
     $('.depth1 > li').removeClass('on')
     $('.open_nav, .close_nav, .depth2').hide()
     $('html').addClass('pc').removeClass('mobile')
     flag = false
  } else if ( ww<=767 && !flag ) {
     $('.open_nav').show()
     $('.logoNav .nav, .depth2').hide()
     $('html').addClass('mobile').removeClass('pc')
     flag = true
  }
}

init()

$(window).on('resize', function(){
  init()
})


  $("#containerBox").load("main.html");

  // 모바일화면에서 1단계메뉴 클릭했을때 2단계메뉴 보이게 하기
  $(".depth1 > li").on('click', function(){
      if ( $('html').hasClass('mobile') ) {
        $(this).toggleClass('on')
        $(this).find('.depth2').stop().slideToggle(300)
        $(this).siblings().each(function(){
            if (  $(this).css('display') === 'block' ) {
              $(this).find('.depth2').slideUp(300)
              $(this).removeClass('on')
            }
        })
      }
  })

  // pc화면에서 1단계메뉴에 호버했을때 2단계메뉴 보이게 하기
  $('.depth1 > li').hover(
    function(){
      if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideDown(300)
      }
    },
    function(){
      if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideUp(300)
      }
    }
  )




  $(".login a, h1 a").on("click", function (e) {
    e.preventDefault();
    var url = $(this).attr("href");
    $("#container").remove();
    $("#containerBox").load(url);
  });

  // 햄버거버튼 클릭시 네비박스 나타나기
  $('.logoNav .open_nav').on('click', function(){
    $(this).next().stop().slideDown(300)
    $(this).hide()
    $(this).nextAll('.close_nav').css({display:'block'})
  })

  // 닫기버튼 클릭시 네비박스 사라지기
  $('.logoNav .close_nav').on('click', function(){
    $(this).prev().stop().slideUp(300)
    $(this).hide()
    $(this).prevAll('.open_nav').css({display:'block'})
    $('.depth2').hide()
    $('.logoNav .nav .depth1 > li').removeClass('on')
  })


  


})(jQuery);
