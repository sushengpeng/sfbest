//规定网页的字体大小
function resize() {
    var html = document.documentElement;
    var w = html.getBoundingClientRect().width;
    // 如果html宽度大于750，按照750的原稿尺寸显示
    w = w > 750 ? 750 : w;
    var fontSize = w / 16; //7.5指的是设计稿的尺寸为750，如果设计稿的尺寸为828，那么应该是w/8.28
    // console.log(fontSize)
    html.style.fontSize = fontSize + "px";
}
resize();
window.onresize = function () {
    //在苹果手机上会有闪屏效果
    setTimeout(function () {
        resize();
    }, 300)
};
//获取url中的数据
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
    return theRequest;
}
//获取cookie
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
//设置cookie
function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}
//添加到购物车
// console.log($('.tab2').find(".p-cart"))
let loginstatus = getCookie('username')?true:false
window.localStorage.shopping = ''
let shoppingcart = window.localStorage.shopping
// console.log(loginstatus)
$(".p-cart").on("touchend",function () {
<<<<<<< HEAD
    let itemid = $(this).attr('productid') || getRequest()
=======
    let itemid = $(this).attr('productid')
>>>>>>> c57185cd69a16d84ac39647abd8ec492a4d587f3
    let username = 'zhangfeiyue'
    let num = $('.num').text() || 1 //有num的时候传入num中的数据，没有默认为1
    if(loginstatus){
        $.ajax({
            url:'./php/movetocart.php',
            data:'itemid='+itemid+'&username='+username+'&num='+num,
            beforeSend:function(){
                //添加前出现的效果
            },
            success:function(data){
                let msg
                console.log(data)
                if(data){
                    msg='添加成功'
                }else{
                    msg='添加失败'
                }
                console.log(msg)
            }
        })
        return false;
    }else{
        window.localStorage.shopping +=itemid+','
    }
})
const viewHeight = document.documentElement.clientHeight
function lazyload() {
    var eles = document.querySelectorAll(("img[data-lazy]"));
    Array.prototype.forEach.call(eles, function(item, index) {
        if (item.dataset.lazy == "")
            return;
        var rect = item.getBoundingClientRect(); //这个元素相对于左上角的位置  
        // console.log(rect.bottom + ":" + rect.top);
        if (rect.bottom >= 0 && rect.top < viewHeight) {
            //当元素顶部小于可视高度时，请求图片资源
            ! function() {
                var img = new Image();
                img.src = item.dataset.lazy;
                img.onload = function() {
                    item.src = img.src;
                }
                item.removeAttribute('data-lazy');
                // item.removeAttribute('lazyload');
            }()
        }
    })
}
lazyload(); //首屏
document.addEventListener("scroll", lazyload);