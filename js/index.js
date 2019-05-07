// $(window).scroll(function(){
//     console.log($(".top-box").offset().top)
//     console.log($(window).scrollTop())
// })
// brand
var mySwiper = new Swiper($(".brand-wrapper"), {
    // autoplay: true, //可选选项，自动滑动
    slidesPerView: 3,
})
//头部导航
var mySwiper0 = new Swiper($(".swiper-container")[0], {
    // loop: true,
    // slidesPerView: 'auto',
    // slideToClickedSlide: true,
    // pagination: {
    //     clickable: true,
    // },
})
$(".total-tab-box").on("tap", "li", function () {
    if ($(this).index() != 0) {
        $(".tab1").hide()
        $(".tab2").show()
        $(".copyright").show()
    } else {
        $(".tab1").show()
        $(".tab2").hide()
    }
    $(this).css({
        "color": "#0f9029",
        "border-bottom": "0.128rem solid #0f9029"
    }).siblings().css({
        "color": "black",
        "border-bottom": "0"
    })
})
//头部banner图部分
var mySwiper1 = new Swiper($(".swiper-container")[1], {
    autoplay: true, //可选选项，自动滑动
    pagination: {
        el: $('.swiper-pagination')[0],
        clickable: true,
    },
})
//优选快报
var mySwiper2 = new Swiper($(".swiper-container")[2], {
    autoplay: true, //可选选项，自动滑动
    direction: 'vertical',
})
// banner-two
var mySwiper3 = new Swiper($(".swiper-container")[3], {
    autoplay: true, //可选选项，自动滑动
    pagination: {
        el: $('.swiper-pagination')[1],
        clickable: true,
    },
})
// banner-three
var mySwiper4 = new Swiper($(".swiper-container")[4], {
    // autoplay: true, //可选选项，自动滑动
    slidesPerView: 1,
    spaceBetween: 12,
    // loop:true
    // effect:"cube"
})
// 当季美食
var mySwiper5 = new Swiper($("#5"), {
    autoplay: true, //可选选项，自动滑动
    pagination: {
        el: $('.swiper-pagination')[2],
        clickable: true,
    },
})
var mySwiper6 = new Swiper($("#6"), {
    slidesPerView: 2,
    spaceBetween: 6,
})
var mySwiper7 = new Swiper($("#10"), {
    slidesPerView: 1,
    pagination: {
        el: $('.swiper-pagination')[3],
        clickable: true,
    },
})
