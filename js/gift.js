/*banner*/
!(function () {
    var swiper = new Swiper('.swiper-container1', {
        loop: true,
        pagination: {
            el: '.swiper-pagination1',
        },

        // autoplay:true,//等同于以下设置
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },

    });
})()

!(function () {
   $("li").tap(function(){
       $(this).addClass("active").siblings().removeClass("active");
    // console.log(1)
   })
})()











