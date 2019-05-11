// < !--轮播图 开始-- >
var swiper = new Swiper('.swiper-container1', {
    pagination: {
        el: '.swiper-pagination1',
        loop:true,
    },
    autoplay: true,//等同于以下设置
});
// < !--国际精选 -->
var swiper = new Swiper('.swiper-container2', {
        slidesPerView: 3,
        spaceBetween: 30,
});
var swiper = new Swiper('.swiper-container3', {
        slidesPerView: 4.5,
});
//     < !--分类开始 -->
$('.swiper-slide3').tap(function () {
        // $(this)[0].style.backgroundColor = 'rgba(97,49,192)'
        // for (var i = 0; i < 5; i++) {
        //         $(this).siblings()[i].style.backgroundColor = 'rgba(116,65,217)'
        // }
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.keyword').show()
})

console.log($('.swiper-slide3'))
$('.swiper-slide3').eq(0).tap(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.keyword1').hide()
        $('.keyword1').siblings().hide()
})
$('.swiper-slide3').eq(1).tap(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.keyword1').show()
        $('.keyword1').siblings().hide()

})
$('.swiper-slide3').eq(2).tap(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.keyword2').show()
        $('.keyword2').siblings().hide()
})
$('.swiper-slide3').eq(3).tap(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.keyword3').show()
        $('.keyword3').siblings().hide()
})
$('.swiper-slide3').eq(4).tap(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.keyword4').show()
        $('.keyword4').siblings().hide()
})
$('.swiper-slide3').eq(5).tap(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.keyword5').show()
        $('.keyword5').siblings().hide()
})
$('.keyword span').tap(function(){
        console.log($(this));
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
})
$(document).scroll(function () {   //页面加载时，获取滚动条初始高度
        var distance = $(window).scrollTop();  //获取滚动条初始高度的值 ：0
        if (distance >= 2102.875) {  //当滚动条高度为0时
                $('.swiper-container3').css({
                        position: 'fixed',
                        top:'0'+'px',
                })
        } else{
                $('.swiper-container3').css({
                        position: 'static',
                })
        }
})
// 母婴食品
// $('.keyword span').tap(function(){
//         // $(this)[0].style.border='2px solid #7441d9'
//         // console.log($(this)[0]);
//         $(this)[0].addClass='on'

//         // $(this)[0].style.color='#7441d9'
//         var len=$(this).siblings()
//         // // console.log(len.length)
//         for (var i = 0; i < len.length; i++) {
//                 $(this).siblings()[i].style.border = '1px solid #dcdcdc'
//                 $(this).siblings()[i].style.color = 'black'
//         }  
// })
// $('.mtop-in1').tap(function(){
// })

$('.swiper-slide3').tap(function(){
        if ($(this).text() !='热卖推荐'){
                $.ajax({
                        type: 'POST',
                        url: './php/class.php',
                        data: 'class=' + $(this).text(),
                        success: function (data) {
                                // console.log(JSON.parse(data));  
                                // console.log($('.p-col-two ul li').length);
                                const information = JSON.parse(data)
                                console.log(information);
                                const length = $('.p-col-two ul li').length
                                // console.log(length);
                                // console.log($('.p-col-two ul li a div img').attr('src') );
                                $('.p-col-two ul li a div img').each(function (index) {
                                        // console.log($(this));
                                        $(this).attr('src', information[index].img)
                                })
                                $('.goProduct .p-name').each(function (index) {
                                        // console.log($(this));
                                        // console.log($(this).text());
                                        
                                        $(this).text(information[index].itemname)
                                })
                                $('.p-bottom .p-price .sp').each(function (index){
                                        // console.log($(this));
                                        // console.log($(this).text());
                                        $(this).text(information[index].price)
                                })
                                $('.p-col-two ul li a').each(function (index) {
                                        // console.log($(this));
                                        console.log($(this).attr('href', 'detail.html?itemid'+'=' +information[index].id));
                                })


                        }
                })
        }
})







































