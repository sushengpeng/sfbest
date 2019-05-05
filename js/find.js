!(function(){
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween:10,
        pagination: {
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