//  <!-- 商品轮播图 -->
var swiper = new Swiper('.swiper-container1', {
    // spaceBetween: 30,
});
//  < !--同类推荐 -->
var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
});
//顶部
$('.title-table').tap(function () {
    $(this)[0].style = "border-bottom: 0.13rem solid #76ac01;"
    // $(this)[0].addClass = ".gr-active"
    $('.object1')[0].style.display="none"
    console.log($('.object'));
    
    for (var i = 0; i < $(this).siblings().length;i++){
        $(this).siblings()[i].style = "border-bottom: 0.13rem solid white;"
    }   
})

















