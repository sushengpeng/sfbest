//errorId 是错误提示的消息框  在登录验证（用户名，密码，验证码）时都有用到
errorId = document.getElementById("error_prompt");
// 用户名验证
function checkName() {
    // console.log(errorId);
    var user = $("#username").val();
    var reg = /^[1][0-9]{10}|[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    if (user == "") {
        errorId.innerHTML = "用户名不能为空";
        errorId.style.display = "block";
        setTimeout(() => {
            errorId.style.display = "none";
        }, 1500)
    } else if (reg.test(user) == false) {
        errorId.innerHTML = "用户名输入有误";
        errorId.style.display = "block";
        setTimeout(() => {
            errorId.style.display = "none";
        }, 1500)
        return false;
    } else { return true }
}

// 密码验证
function checkPwd() {
    var pwd = $("#password").val();
    var reg = /^[a-zA-Z0-9]{6,16}$/;
    if (pwd == "") {
        errorId.innerHTML = "密码不能为空";
        errorId.style.display = "block";
        setTimeout(() => {
            errorId.style.display = "none";
        }, 1500)
    } else if (reg.test(pwd) == false) {
        errorId.innerHTML = "密码输入有误";
        errorId.style.display = "block";
        setTimeout(() => {
            errorId.style.display = "none";
        }, 2000)
        return false;
    } else { return true }
}

// 验证码绘制方法
var show_num = [];
draw(show_num);
// 点击验证码的时候 随机生成新的验证码
$("#canvas").on('click', function () {
    draw(show_num);
})
// 验证验证码
function checkCanvas() {
    var val = $("#verification").val().toLowerCase();  //转换成小写
    var verify = $("#verification").val();
    var num = show_num.join("");
    if (val == '') {
        errorId.innerHTML = '请输入验证码！';
        errorId.style.display = "block";
        setTimeout(() => {
            errorId.style.display = "none";
        }, 2000)
    } else if (val == num) {
        return true;
    } else {
        errorId.innerHTML = '验证码错误！';
        errorId.style.display = "block";
        setTimeout(() => {
            errorId.style.display = "none";
        }, 2000)
        $("#verification").val('');
        draw(show_num);
        return false;
    }
}
// 登录验证  点击登录按钮时发起AJAX向后台访问数据并验证
$(function () {
    $(".login-btn").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        // console.log(username);
        // console.log(password);
        $.ajax({
            url: "../php/login.php",
            type: "GET",
            data: "username=" + username + "&password=" + password,
            success: function (data) {
                if (data == "验证通过") {
                    setCookie("username", username, 1);
                    setCookie("password", password, 1);
                    // if () {
                    location.href = "../myself.html";
                    // } else {
                    // location.href = "../shoppingcart.html";
                    // }
                } else {
                    errorId.innerHTML = '用户名或密码错误！';
                    errorId.style.display = "block";
                    setTimeout(() => {
                        errorId.style.display = "none";
                    }, 2000)
                }
            }
        })
        return false;
    })
})
// 验证码的显示方法
function draw(show_num) {
    var canvas_width = $('#canvas').width();
    var canvas_height = $('#canvas').height();
    var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
    var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length;//获取到数组的长度
    for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt.toLowerCase();
        var x = 10 + i * 18;//文字在canvas上的x坐标
        var y = 22 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";
        context.translate(x, y); //设置坐标
        context.rotate(deg);        //设置旋转角度
        context.fillStyle = randomColor(); //调用randomcolor 随机生成颜色
        context.fillText(txt, 0, 0);
        // context.fillText(text,x,y,maxWidth);
        // text	规定在画布上输出的文本。
        // x	开始绘制文本的 x 坐标位置（相对于画布）。
        // y	开始绘制文本的 y 坐标位置（相对于画布）。
        // maxWidth	可选。允许的最大文本宽度，以像素计。
        context.rotate(-deg);
        context.translate(-x, -y);
    }
    for (var i = 0; i <= 5; i++) { //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}
function randomColor() {//得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}


// 手机短信验证登陆
function checkPhone() {
    var user = $("#phone").val();
    var reg = /^[1][0-9]{10}$/;
    if (user == "") {
        errorId.innerHTML = "手机号不能为空";
        errorId.style.display = "block";
        setTimeout(() => {
            errorId.style.display = "none";
        }, 1500)
    } else if (reg.test(user) == false) {
        errorId.innerHTML = "手机号输入有误";
        errorId.style.display = "block";
        setTimeout(() => {
            errorId.style.display = "none";
        }, 1500)
        return false;
    } else { return true }
}