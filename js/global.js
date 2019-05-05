//规定网页的字体大小
!(function () {
    function resize() {
        var html = document.documentElement;
        var w = html.getBoundingClientRect().width;
        // 如果html宽度大于750，按照750的原稿尺寸显示
        w = w > 750 ? 750 : w;
        var fontSize = w / 16; //7.5指的是设计稿的尺寸为750，如果设计稿的尺寸为828，那么应该是w/8.28
        console.log(fontSize)
        html.style.fontSize = fontSize + "px";
    }
    resize();
    window.onresize = function () {
        //在苹果手机上会有闪屏效果
        setTimeout(function () {
            resize();
        }, 300)
    };
})();
// ! function (a) {
//     function b() {
//         var b, c, e, i, f = a.document,
//             g = f.documentElement,
//             h = g.getBoundingClientRect().width;
//         b || c || (i = !!a.navigator.appVersion.match(/AppleWebKit.*Mobile.*/), b = a.devicePixelRatio, e = a.devicePixelRatio, b = i ? b : 1, c = 1 / b), g.style.fontSize = h >= 960 ? "40px" : 320 >= h ? "20px" : 20 * (h / 320) + "px"
//     }
//     a.addEventListener("resize", function () {
//         b()
//     }), b()
// }(window);