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
!(function () {
    $("li").tap(function () {
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
                        str+=` <div class="gift_list">
                        <div class="jscroll">
                          <div class="jscroll-inner clearfix">
                            <div class="gift_item clearfix">
                              <div class="gift_img">
                                <img src="${data[i].img}" alt="">
                              </div>
                  
                              <div class="gift_info" >
                                <div class="gift_title omit1">${data[i].itemname}</div>
                                <div class="gift_desc omit1">${data[i].des}</div>
                                <div class="gift_bottom">
                                  <div class="gift_price">￥${data[i].price} <span class="gray">${data[i].weight}</span></div>
                                  <div class="gift_send" >送给Ta</div>
                                </div>
                              </div>
                  
                            </div>
                          </div>
                        </div>
                  
                      </div>`
                    }  
                    $("#substance").html(str);    
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
                str+=` <div class="gift_list">
                <div class="jscroll">
                  <div class="jscroll-inner clearfix">
                    <div class="gift_item clearfix">
                      <div class="gift_img">
                        <img src="${data[i].img}" alt="">
                      </div>
          
                      <div class="gift_info" >
                        <div class="gift_title omit1">${data[i].itemname}</div>
                        <div class="gift_desc omit1">${data[i].des}</div>
                        <div class="gift_bottom">
                          <div class="gift_price">￥${data[i].price} <span class="gray">${data[i].weight}</span></div>
                          <div class="gift_send" >送给Ta</div>
                        </div>
                      </div>
          
                    </div>
                  </div>
                </div>
          
              </div>`
            }  
            $("#substance").html(str);    
        }
    })
  }
  ajax();







