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
    $(".p-cart").tap(function(e){
        e.stopPropagation() 
        return false;
    })
    //上拉加载
    mui.init({
        pullRefresh: {
            container: "#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            // down: {
            //     height: 50,//可选,默认50.触发下拉刷新拖动距离,
            //     auto: false,//可选,默认false.首次加载自动下拉刷新一次
            //     contentdown: "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
            //     contentover: "下拉释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
            //     contentrefresh: "下拉正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
            //     callback: pullfresh_function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            // },
            up: {
                height: 0,//可选.默认50.触发上拉加载拖动距离
                auto: false,//可选,默认false.自动上拉加载一次
                contentrefresh: "上拉正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '上拉没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: pullfresh_function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });
    function pullfresh_function() {
        //业务逻辑代码，比如通过ajax从服务器获取新数据；
        //注意：
        //1、加载完新数据后，必须执行如下代码，true表示没有更多数据了：
        //2、若为ajax请求，则需将如下代码放置在处理完ajax响应数据之后
        // axios.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312')
        //     .then(res=> {
        //         console.log(res);
        //     })
        alert(1)
        // alert(1)
        // mui('#refreshContainer').pullRefresh().endPulldown();
        // this.endPullupToRefresh(true | false);
    }
    if (mui.os.plus) {
        mui.plusReady(function() {
            setTimeout(function() {
                mui('#pullrefresh').pullRefresh().pullupLoading();
            }, 1000);

        });
    } else {
        mui.ready(function() {
            mui('#pullrefresh').pullRefresh().pullupLoading();
        });
    }
