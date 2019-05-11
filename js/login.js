//---------------------验证码代码块
$(function () {
    var show_num = [];
    draw(show_num);
    // 点击验证码的时候 随机生成新的验证码
    $("#canvas").on('click', function () {
        draw(show_num);
    })
    // 登陆按钮点击时的验证
    $(".login-btn").on('click', function () {
        var user =$("#username").val();
        var userId = $("#error_prompt");
        // console.log(user);
        var reg = /^[1][0-9]{10}|[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        if (user == "") {
            // console.log('user' + "111");
            userId.innerHTML = "用户名不能为空";
            userId.style.display = "block";
            setTimeout(() => {
                userId.style.display = "none";
            }, 1500)
        } else if (reg.test(user) == false) {
            // console.log('user' + "222");
            userId.innerHTML = "用户名输入有误";
            userId.style.display = "block";
            setTimeout(() => {
                userId.style.display = "none";
            }, 1500)
            return false;
        } else {
            var pwd = $("#password").val();
            var pwdId = $("#error_prompt");
            var reg = /^[a-zA-Z0-9]{6,16}$/;
            if (pwd == "") {
                pwdId.innerHTML = "密码不能为空";
                pwdId.style.display = "block";
                setTimeout(() => {
                    pwdId.style.display = "none";
                }, 1500)
            } else if (reg.test(pwd) == false) {
                pwdId.innerHTML = "密码输入有误";
                pwdId.style.display = "block";
                setTimeout(() => {
                    pwdId.style.display = "none";
                }, 1500)
                return false;
            } else {
                var val = $("#verification").val().toLowerCase();  //转换成小写
                // console.log(val);
                var verify = $("#verification").val();
                var verifyId =$("#error_prompt");
                var num = show_num.join("");
                if (val == '') {
                    verifyId.innerHTML = '请输入验证码！';
                    verifyId.style.display = "block";
                    setTimeout(() => {
                        userId.style.display = "none";
                    }, 1500)
                } else if (val == num) {
                    $("#verification").val('');
                    draw(show_num);
                    return true;
                } else {
                    verifyId.innerHTML = '验证码错误！';
                    verifyId.style.display = "block";
                    setTimeout(() => {
                        userId.style.display = "none";
                    }, 1500)
                    $("#verification").val('');
                    draw(show_num);
                    return false;
                }
                return true;
            }
            return true;
        }
    })
})
$(function () {
    $(".login-btn").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();
        console.log(username);
        console.log(password);
        $.ajax({
            url: "../php/login.php",
            // type: "GET",
            data: "username=" + username + "&password=" + password,
            success: function (data) {
                if (data == "验证通过") {
                    cookie.set("username", username, 1);
                    cookie.set("password", password, 1);
                    location.href = "../myself.html";
                } else {
                    alert("密码或用户名输入错误");
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