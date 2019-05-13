//  <!-- 商品轮播图 -->
var swiper = new Swiper('.swiper-container1', {
    // spaceBetween: 30,
});
//  < !--同类推荐 -->
var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 3,
});
//顶部
$('.tabs .object')[0].style.display = "block"
$('.tabs .object')[1].style.display = "none"
$('.tabs .object')[2].style.display = "none"
$('.title-table').tap(function () {
    for (var i = 0; i < $(this).siblings().length;i++){
        $(this)[0].style = "border-bottom: 0.13rem solid #76ac01;"
        $(this).siblings()[i].style = "border-bottom: 0.13rem solid white;"
    }
})
$('.title-table').tap(function () {
    if ($(this).index()==0){
        $('.tabs .object')[0].style.display = "block"
        $('.tabs .object')[1].style.display = "none"
        $('.tabs .object')[2].style.display = "none"
    } else if ($(this).index() == 1){
        $('.tabs .object')[1].style.display = "block"
        $('.tabs .object')[0].style.display = "none"
        $('.tabs .object')[2].style.display = "none"
    } else if ($(this).index() == 2){
        $('.tabs .object')[2].style.display = "block"
        $('.tabs .object')[0].style.display = "none"
        $('.tabs .object')[1].style.display = "none"
    }
})







// 商品渲染数据
function getRequest(str) {
    if (str == undefined) {
        var url = location.href; //获取url中"?"符后的字串
    } else {
        var url = str;
    }
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.slice(url.indexOf("?") + 1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest.itemid;
}

// console.log(getRequest(location.href));
// console.log(theRequest);



!function(){
    // console.log(location.href)
    // console.log(getRequest(location.href))
    var id = getRequest(location.href)
    console.log(id);
    $.ajax({
        type: 'POST',
        url: '../php/detail.php',
        data: 'id=' + id,
        success: function (data) {
            console.log(JSON.parse(data));
            console.log($('.p-price .sp1')[0].innerText);    
            console.log(JSON.parse(data)[0].price);
            
            $('.p-price .sp1')[0].innerText = '￥' + JSON.parse(data)[0].price
            // $('.p-price .sp1')
            console.log($('.swiper-slide1 img').attr('src'));
            $('.swiper-slide1 img').each(function(){
                $(this).attr('src',JSON.parse(data)[0].img)
            })
            
        }
    })
}()

// 商品详情评价互相切换



















