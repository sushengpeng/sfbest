const bannerImg=[
    ['./imgs/index_tab2.jpg'],
    ['./imgs/index_tab3.jpg'],
    ['./imgs/index_tab4_1.jpg','./imgs/index_tab4_2.jpg'],
    ['./imgs/index_tab5.jpg'],
    ['./imgs/index_tab6_1.jpg','./imgs/index_tab6_2.jpg'],
    ['./imgs/index_tab7_1.jpg','./imgs/index_tab7_2.jpg','./imgs/index_tab7_3.jpg'],
    ['./imgs/index_tab8_1.jpg','./imgs/index_tab8_2.jpg','./imgs/index_tab8_3.jpg'],
    ['./imgs/index_tab9_1.jpg','./imgs/index_tab9_2.jpg','./imgs/index_tab9_3.jpg']
]
// brand
var mySwiper = new Swiper($(".brand-wrapper"), {
    // autoplay: true, //可选选项，自动滑动
    slidesPerView: 3,
})
//头部导航
var mySwiper0 = new Swiper($(".swiper-container")[0], {
    loop: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    pagination: {
        clickable: true,
    },
})
$(".total-tab-box").on("tap", "li", function () {
    if ($(this).text() != '为你优选') {
        $(".tab1").hide()
        $(".tab2").show()
        $(".copyright").show()
        let str=''
        $('.tab2').html(str)
        $.ajax({
            url: './php/class.php',
            data: 'class=' + this.innerHTML,
            async: false,
            success: function (data) {
                // console.log(data)
                const itemdata = JSON.parse(data)
                $('.tab2').append('<ul class="list"></ul>')
                for (let key in itemdata) {
                    str= 
                    `
                    <li>
                        <a href="detail.html?itemid=${itemdata[key].id}">
                            <div class="p-img"><img class="" src="${itemdata[key].img.split(',')[0]}"
                                    data-original="./imgs/lazy.png"
                                    style="display: block;"></div>
                            <div class="p-info">
                                <div class="p-name omit2"><span class="zy">自营</span>${itemdata[key].itemname}</div>
                                <div class="p-lable"><span class="sp1">满返</span></div>
                        <div class="p-price">￥${itemdata[key].price}<span></span></div>
                                <div class="p-cart" productid="${itemdata[key].id}" minnum="1" type="0" state="1" ispresale="0" businessmodel="1"
                                    addprice="${itemdata[key].price}"></div>
                            </div>
                        </a>
                    </li>
                    
                    `
                    // console.log($('.tab2').find('.list')[0])
                    $('.tab2').find('.list')[0].innerHTML+=str
                }   
            }
        })        
        str=''
        bannerImg[$(this).data('id')].map((url)=>{
            str+=`
            <li class="swiper-slide">
                <img src="${url}" alt="">
            </li>
            `  
        })
        str=`
            <div class="swiper-container">
                <ul class="swiper-wrapper imglist">
                `+str+`
                </ul>
                <div class="swiper-pagination"></div>
            </div>
            `
        $('.tab2').prepend(str)
        let tabBanner = new Swiper($(".tab2 .swiper-container"), {
            autoplay: true, //可选选项，自动滑动
            pagination: {
                el: $('.tab2 .swiper-pagination'),
                clickable: true,
            },
        })
        if(bannerImg[$(this).data('id')].length==1){
            $('.tab2 .swiper-pagination').hide()
        }
        // console.log(str)
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
    $.ajax({
        url:'js/global.js?id='+Math.random()
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
