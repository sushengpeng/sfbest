/*返回主页面*/ 
!(function(){
  $(".header-back").tap(function(){
    // console.log(111)
    // history.go(-1)
  })
})()

/*banner*/
!(function () {
    var swiper = new Swiper('.swiper-container1', {
        loop: true,
        pagination: {
            el: '.swiper-pagination1',
        },
        // autoplay:true,//等同于以下设置
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },

    });
})()

// var lastItemId
// var itemclass
!(function () {
    $("li").tap(function () {
      // itemclass= $(this).text()
        $(this).addClass("active").siblings().removeClass("active");
        if( $(this).text()!='全部'){
            $.ajax({
                type: "POST",
                url: "./php/gift_class.php",
                data: "class=" + $(this).text(),
                success: function (result) {
                    // console.log(result);
                    var data = JSON.parse(result);
                    // console.log(data);
                    var str="";
                    for(var i=0;i<data.length;i++){
                      lastItemId=data[i].id
                   
                        str+=` 
                        <a href="detail.html?item=${data[i].id}" class="gift_list">
                          <div class="jscroll">
                            <div class="jscroll-inner">
                              <div class="gift_item">
                                <div class="gift_img">
                                  <img src="${data[i].img}" alt="">
                                </div>
                                <div class="gift_info">
                                  <div class="gift_title omit1">${data[i].itemname}</div>
                                  <div class="gift_desc omit1">${data[i].des}</div>
                                  <div class="gift_bottom">
                                    <div class="gift_price">￥${data[i].price} 
                                      <span class="gray">${data[i].weight}</span>
                                    </div>
                                    <div class="gift_send">送给Ta</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      `
                      
                    }  
                    $(".substance").html(str);    
                }
            })
        }else{
          ajax()
        }

    })
})()

function ajax(){
    $.ajax({
        type: "POST",
        url: "./php/gift.php",
        data: "gift=" + 1,
        success: function (result) {
            // console.log(result);
            var data = JSON.parse(result);
            // console.log(data);
            var str="";
            for(var i=0;i<data.length;i++){
              // lastItemId=data[i].id
              // console.log(lastItemId)
                str+=` 
                  <a href="detail.html?item=${data[i].id}" class="gift_list">
                    <div class="jscroll">
                      <div class="jscroll-inner">
                        <div class="gift_item">
                          <div class="gift_img">
                            <img src="${data[i].img}" alt="">
                          </div>
                          <div class="gift_info">
                            <div class="gift_title omit1">${data[i].itemname}</div>
                            <div class="gift_desc omit1">${data[i].des}</div>
                            <div class="gift_bottom">
                              <div class="gift_price">￥${data[i].price} 
                                <span class="gray">${data[i].weight}</span>
                              </div>
                              <div class="gift_send">送给Ta</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                `
            }  
            // console.log(str)
            $(".substance").html(str);    
        }
    })
  }
  ajax();
//上拉加载
// mui.init({
//   pullRefresh: {
//       container: "#refreshContainer",
//       // 下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
//       // down: {
//       //     height: 50,//可选,默认50.触发下拉刷新拖动距离,
//       //     range : 10,//可选 默认100px,控件可下拉拖拽的范围
//       //     offset : 30, //可选 默认0px,下拉刷新控件的起始位置
//       //     auto: false,//可选,默认false.首次加载自动下拉刷新一次
//       //     contentdown: "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
//       //     contentover: "下拉释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
//       //     contentrefresh: "下拉正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
//       //     callback: pullfresh_function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
//       // },
//       up: {
//           height: 50, //可选.默认50.触发上拉加载拖动距离
//           auto: false, //可选,默认false.自动上拉加载一次
//           // contentrefresh: "上拉正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
//           // contentnomore: '上拉没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
//           callback: pullfresh_function //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
//       }
//   }
// });

// function pullfresh_function() {
// console.log(1)
// console.log(itemclass,lastItemId)
//   $.ajax({
//       url: './php/lazy.php',
//       data: 'class=' + itemclass + '&itemid=' + lastItemId,
//       async: false,
//       success: function (data) {           
//           if (data==0) {
//               mui('#pullrefresh').pullRefresh().endPullupToRefresh(true)//参数为true代表没有更多数据了。
//               console.log('没有数据了')
//           } else {
//               var lazydata = JSON.parse(data)
//               for (let key in lazydata) {
//                   //每次遍历将商品id赋给num，直到最后一次num中保存的是最后一个商品的id
//                   lastItemId = lazydata[key].id
//                   str =
//                       `
//                       <a href="detail.html?itemid=${lazydata[i].id}" class="gift_list">
//                       <div class="jscroll">
//                         <div class="jscroll-inner clearfix">
//                           <div class="gift_item clearfix">
//                             <div class="gift_img">
//                               <img src="${lazydata[i].img}" alt="">
//                             </div>
                
//                             <div class="gift_info" >
//                               <div class="gift_title omit1">${lazydata[i].itemname}</div>
//                               <div class="gift_desc omit1">${lazydata[i].des}</div>
//                               <div class="gift_bottom">
//                                 <div class="gift_price">￥${lazydata[i].price} <span class="gray">${lazydata[i].weight}</span></div>
//                                 <div class="gift_send" >送给Ta</div>
//                               </div>
//                             </div>
                
//                           </div>
//                         </a>
//                       </div>
                
//                     </a>
//                           `
                
//                   // $(".substance").html(str); 
//                   $(".substance").get(0).innerHTML += str; 
//                   // $('.mui-scroll').find('.substance')[0].innerHTML += str
                 
//               }
//           }
//           mui('#refreshContainer').pullRefresh().endPulldownToRefresh(); //refresh completed
//       }
//   })
 

// }






