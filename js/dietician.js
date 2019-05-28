//发起ajax
mui.ajax('../php/class.php',
   {
      data: {
         class: "补钙",
      },
      success: function (data) {
         
         const obj=JSON.parse(data)
         console.log(obj)
         const ul=document.querySelector("ul")
         console.log(ul)
         for(let i=0;i<obj.length;i++){
            console.log(obj[i])
         var str=`
         <li>
            <div class="p-img">
              <img src="${obj[i].img}">
            </div>
            <div class="p-info">
              <div class="p-lable">
                <span class="sp2">多倍积分</span>
                <span class="sp1">满返</span>
              </div>
              <div class="p-name omit1">
              ${obj[i].itemname}
              </div>
              <div class="p-describe"></div>
              <div class="p-format">${obj[i].weight}</div>
            </div>
            <div class="p-price">
            ${obj[i].price}
            </div>
          </li>
         `
         ul.innerHTML+=str
         }
      },
   }
)

//  mui.init({
//    pullRefresh: {
//        container: "#refreshContainer",
//        up: {
//            height: 50, //可选.默认50.触发上拉加载拖动距离
//            auto: false, //可选,默认false.自动上拉加载一次
//            contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
//            contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
//            callback: pullfresh_function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
//        }
//    }
// });
// var count = 0;

// function pullfresh_function() {
//    $.ajax({
//        url: './php/lazy.php',
//        data: 'class=' + itemclass + '&itemid=' + lastItemId,
//        async: false,
//        success: function (data) {           
//            if (data==0) {
//                mui('#pullrefresh').pullRefresh().endPullupToRefresh(true)//参数为true代表没有更多数据了。
//                console.log('没有数据了')
//            } else {
//                var lazydata = JSON.parse(data)
//                for (let key in lazydata) {
//                    //每次遍历将商品id赋给num，直到最后一次num中保存的是最后一个商品的id
//                    lastItemId = lazydata[key].id
//                    str =
//                        `
//                        <li>
//                        <div class="p-img">
//                          <img src="${lazydata[i].img}">
//                        </div>
//                        <div class="p-info">
//                          <div class="p-lable">
//                            <span class="sp2">多倍积分</span>
//                            <span class="sp1">满返</span>
//                          </div>
//                          <div class="p-name omit1">
//                          ${lazydata[i].itemname}
//                          </div>
//                          <div class="p-describe"></div>
//                          <div class="p-format">${lazydata[i].weight}</div>
//                        </div>
//                        <div class="p-price">
//                        ${lazydata[i].price}
//                        </div>
//                      </li>
//                     `
//                     ul.innerHTML+=str
//                    $.ajax({
//                        url: 'js/global.js?id=' + Math.random()
//                    })
//                }
//            }
//            mui('#refreshContainer').pullRefresh().endPulldownToRefresh(); //refresh completed
//        }
//    })
// }
