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
!function(){
    var id = getRequest(location.href)
    let imgurl=''
    $.ajax({
        type: 'POST',
        url: './php/detail.php',
        data: 'id=' + id,
        success: function (data) {
            const information = JSON.parse(data)
            let box = information[0].img.split(',')
            box.map(res=>{
                imgurl += `
                <div class="swiper-slide adver1 swiper-slide1 swiper-slide-active" style="width: 358px;">
                <img src=${res}>
                </div>
                `
            })
            $('.wrapper').html(imgurl)
            $('.p-price .sp1')[0].innerText = '￥' +information[0].price
            console.log(information);
            
            $('.p-place-country')[0].innerText = information[0].field
            $('.p-name')[0].innerText = information[0].itemname
            $('.p-info-price')[0].innerText = information[0].comnum
            $('.spc')[0].innerText = information[0].weight
            // $('.p-price .sp1')
            // console.log($('.swiper-slide1 img').attr('src'));
            // $('.swiper-slide1 img').each(function(){
            //     $(this).attr('src',information[0].img)
            // })
            // console.log(information[0].img.split(','));
            // if(box.length==1){
            //     console.log(true);
            // }
            
            
            
        }
    })
}()
!function(){
    let conunt=0;
    $('.addshoppingcart').tap(function(){
        // conunt=conunt++;
        console.log(111);   
    })
    $('.cart-bg span')[0].innerText = conunt
    
}()























