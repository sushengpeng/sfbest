//优选厨房--商品列表
!(function(){
    var optimization = new Swiper('.brand-product', {
        slidesPerView: 3,
        spaceBetween: 30,
        width: window.innerWidth,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
})()
// 头部tab
!(function () {
    $(".menuSpan").tap(function(){
        const c1=$(this).index()
        $(".jscroll-inner").eq(c1).addClass("find-tive").siblings().removeClass("find-tive")
        $(".menuSpan").eq(c1).addClass("find-active").siblings().removeClass("find-active")
    })
 })()


 //发起ajax
//  $.ajax({
//    url:"../php/class.php",
//    data:{class:"补钙"},
//    dataType:"json",
//    success:function(data){
//           console.log(data)
//    }
//  })