;(function(w, d){
  var cookie = {}

  cookie.set = function (key, value, options) {
    var options = options || {} // 如果用户没有传递options参数，为了方式后面错误，则选择空对象作为默认值
    var expires = options.expires || "" // 如果对象中没有传递expires过期时间，则使用空字符串
    /* var path = options.path || "" // 如果没有传递path参数，则使用""
    path = path ? ';path=' + path : '' */
    var path = options.path ? ";path=" + options.path : ""

    /* var domain = options.domain || ""
    domain = domain ? ';domain=' + domain : "" */
    var domain = options.domain ? ";domain=" + options.domain : ""

    if (expires) { // 判断过期时间是否存在
      // 存在，则将其转换为日期对象的toUTCString格式
      expires = ";expires=" + new Date(Date.now() + expires * 24 * 60 * 60 * 1000).toUTCString()
    }      

    d.cookie = key + "=" + value + expires + path + domain  // 最后拼接成设置cookie的字符串形式
  }

  cookie.get = function (cookieName) {
    // 获取到所有的cookie
    var cookies = d.cookie
    // 将cookiename 修改成cookiename=
    cookieName += '='
    // 将cookies转换为数组
    cookies = cookies.split('; ')
    // 循环遍历cookies
    for(var i = 0;i<cookies.length;i++){
      // 判断cookiename是否在cookies[i] 中存在
      if(!cookies[i].indexOf(cookieName)){
        return cookies[i].slice(cookieName.length)
      }
    }
    return ""
  }

  /* 
    默认删除当前路径下的cookie
  
  
  */
  cookie.remove = function (key, options) {
    // 将过期时间设置到当前时间之前即可
    var options = options || {}
    // var expires = options.expires || "" // 因为过期时间减去一个固定的时间即可，因此不需要传递expires属性
    var path = options.path ? ";path=" + options.path : ""
    var domain = options.domain ? ";domain=" + options.domain : ""

    // 生成一个过期的时间
    var expires = ';expires=' + new Date(0).toUTCString()
    document.cookie = key + '=1' + expires + path + domain
  }
  w.cookie = cookie
}(window, document))


