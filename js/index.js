const bannerImg = [
    ['./imgs/index_tab2.jpg'],
    ['./imgs/index_tab3.jpg'],
    ['./imgs/index_tab4_1.jpg', './imgs/index_tab4_2.jpg'],
    ['./imgs/index_tab5.jpg'],
    ['./imgs/index_tab6_1.jpg', './imgs/index_tab6_2.jpg'],
    ['./imgs/index_tab7_1.jpg', './imgs/index_tab7_2.jpg', './imgs/index_tab7_3.jpg'],
    ['./imgs/index_tab8_1.jpg', './imgs/index_tab8_2.jpg', './imgs/index_tab8_3.jpg'],
    ['./imgs/index_tab9_1.jpg', './imgs/index_tab9_2.jpg', './imgs/index_tab9_3.jpg']
]
// 全局变量用于存储class,和改模块对应的num
let itemclass, lastItemId
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
$(".tab2").hide()
$(".total-tab-box").on("touchend", "li", function () {
    lastItemId = 0;
    itemclass = $(this).text()
    console.log(itemclass)
    $('.copyright').show()
    let copyright = `
    <div class="copyright">北京顺丰电子商务有限公司 | 客服电话：9533858<br>北京市公安局顺义分局备案11011302000890号<br>
        <a href="http://www.miibeian.gov.cn" class="footer-link">京ICP备12011349号</a> |
        <a href="http://www.sfbest.com/www/174/461.html" class="footer-link">企业营业执照</a>
        <br>Copyright© 顺丰优选 sfbest.com 版权所有
    </div>
    `
    if (itemclass != '为你优选') {
        $(".tab1").hide()
        $(".tab2").show()
        let _this = this
        //    console.log(1) 
        let str = ''
        $('.mui-scroll').html(str)
        $(this).css({
            "color": "#0f9029",
            "border-bottom": "0.128rem solid #0f9029"
        }).siblings().css({
            "color": "black",
            "border-bottom": "0"
        })
        $.ajax({
            url: './php/class.php',
            data: 'class=' + this.innerHTML,
            async: false,
            success: function (data) {
                // console.log(data)
                const itemdata = JSON.parse(data)
                $('.mui-scroll').append('<ul class="list "mui-table-view mui-table-view-chevron"></ul>')
                for (let key in itemdata) {
                    //每次遍历将商品id赋给num，直到最后一次num中保存的是最后一个商品的id
                    lastItemId = itemdata[key].id
                    str =
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
                    $('.mui-scroll').find('.list')[0].innerHTML += str
                }
                str = ''
                bannerImg[$(_this).data('id')].map((url) => {
                    str += `
                        <li class="swiper-slide">
                            <img src="${url}" alt="">
                        </li>
                        `
                })
                str = `
                    <div class="swiper-container">
                        <ul class="swiper-wrapper imglist">
                        ` + str + `
                        </ul>
                        <div class="swiper-pagination"></div>
                    </div>
                    `
                $('.mui-scroll').prepend(str)

            }
        })
        $('.copyright').hide()
        $('.mui-scroll')[0].innerHTML += copyright
    } else {
        $(".tab1").show()
        $(".tab2").hide()
    }

    $.ajax({
        url: 'js/global.js?id=' + Math.random()
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
//上拉加载
mui.init({
    pullRefresh: {
        container: "#refreshContainer",
        //下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
        // down: {
        //     height: 50,//可选,默认50.触发下拉刷新拖动距离,
        //     auto: false,//可选,默认false.首次加载自动下拉刷新一次
        //     contentdown: "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
        //     contentover: "下拉释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
        //     contentrefresh: "下拉正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
        //     callback: pullfresh_function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        // },
        up: {
            height: 50, //可选.默认50.触发上拉加载拖动距离
            auto: false, //可选,默认false.自动上拉加载一次
            contentrefresh: "上拉正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore: '上拉没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
            callback: pullfresh_function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        }
    }
});

var count = 0;

function pullfresh_function() {
    mui('#refreshContainer').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
    $.ajax({
        url: './php/lazy.php',
        data: 'class=' + itemclass + '&itemid=' + lastItemId,
        async: false,
        success: function (data) {           
            if (data) {
                console.log('没有数据了')
            } else {
                var lazydata = JSON.parse(data)
                for (let key in lazydata) {
                    //每次遍历将商品id赋给num，直到最后一次num中保存的是最后一个商品的id
                    lastItemId = lazydata[key].id
                    str =
                        `
                            <li>
                                <a href="detail.html?itemid=${lazydata[key].id}">
                                    <div class="p-img"><img class="" src="${lazydata[key].img.split(',')[0]}"
                                            data-original="./imgs/lazy.png"
                                            style="display: block;"></div>
                                    <div class="p-info">
                                        <div class="p-name omit2"><span class="zy">自营</span>${lazydata[key].itemname}</div>
                                        <div class="p-lable"><span class="sp1">满返</span></div>
                                <div class="p-price">￥${lazydata[key].price}<span></span></div>
                                        <div class="p-cart" productid="${lazydata[key].id}" minnum="1" type="0" state="1" ispresale="0" businessmodel="1"
                                            addprice="${lazydata[key].price}"></div>
                                    </div>
                                </a>
                            </li>
                            `
                    // console.log($('.tab2').find('.list')[0])
                    $('.mui-scroll').find('.list')[0].innerHTML += str
                    $.ajax({
                        url: 'js/global.js?id=' + Math.random()
                    })
                }
            }

        }
    })
    // alert(1)
    // mui('#refreshContainer').pullRefresh().endPulldown();
    try {
        mui('#refreshContainer').pullRefresh().endPulldownToRefresh(); //refresh completed
    } catch {

    }

}
if (mui.os.plus) {
    mui.plusReady(function () {
        setTimeout(function () {
            try {
                mui('#refreshContainer').pullRefresh().pullupLoading();
            } catch {

            }
        }, 1000);

    });
} else {
    mui.ready(function () {
        try {
            mui('#refreshContainer').pullRefresh().pullupLoading();
        } catch {

        }

    });
}