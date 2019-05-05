var http = require('http') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
var url = 'https://m.sfbest.com/product/info/325325' //输入任何网址都可以
 
http.get(url,function(res){  //发送get请求
  var html=''
  res.on('data',function(data){
    html += data  //字符串的拼接
  })
  res.on('end',function(){
    console.log(html)
    })
}).on('error',function(){
  console.log('获取资源出错！')
})
// var arr=[
//     {
//         itemname:asda,
//         price:asdad,
//         weight: ,
//         commun: ,
//         feild: ,
//         brand: ,
//         gift: ,
//         img:,
//         class:
//     },

// ]