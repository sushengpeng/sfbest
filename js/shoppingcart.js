// 购物车商品渲染数据

!(function(){
    var uname="zhangfeiyue"

    $.ajax({
        url:"../php/shoppingcart.php",
        async: false,
        data:"username="+uname,
        success: function(data){
            // console.log(data)
        if(data=="false"){


             $(".carFullPage").css("display","none")
            $(".carEmptyPage").css("display","block")
            // console.log('无数据')
           } else{
           
            $(".carFullPage").css("display","block")
            $(".carEmptyPage").css("display","none")

            // console.log('有数据')
            const json = JSON.parse(data) 
            console.log(json)
            
            for(var i=0;i<json.length;i++){
               console.log(json[i][1].num)
            var str = " "
                var img=(json[i][0].img).split(",")[0]
                
            str+= `
            <li class="item clearfix">
            <div class="left fl">
                <span class="icon1 checked cbbox2"></span>
            </div>
            <div class="right clearfix">
                <div class="listimg fl">
                    <img src="${img}">
                </div>
                <div class="listname fl">
                    <div class="p-name">
                        <a href="###">${json[i][0].itemname}</a>
                    </div>
                    <div class="p-message clearfix">
                        <div class="price fl">
                            <i>￥<span>${json[i][0].price}</span></i>
                            <span>${json[i][0].weight}</span>
                        </div>
                        <div class="inputbox fr">
                            <a class="pAd">-</a>
                            <input type="number" min="1" max="200" value="${json[i][1].num}">
                            <a class="pAp">+</a>
                            <div class="del" data-getid='${json[i][0].id}'></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
            `
    
                $(".prolistCont").get(0).innerHTML+=str
    
            }
           }
       
        
        }
    })
})();

// 购物车商品下拉功能


!(function(){
    var myScroll = new IScroll('#wrapper');
})();



!(function(){

 
    function check(dom){
        if($(dom).hasClass("icon1")){
        
            $(dom).removeClass("icon1")
            $(".cbbox1").removeClass("icon1")
           
        }else{
          $(dom).addClass("icon1")
          if($(".cbbox2.icon1").length==$(".cbbox2").length){
              $(".cbbox1").addClass("icon1")
          }
        }
    }

    // 当点击勾选显示出对应的状态
    $(".cbbox2").tap(function(){
    
    check(this)
    sumprice()
    })
    $(".cbbox1").tap(function(){
        if($(".cbbox1").hasClass("icon1")){
            $(".cbbox1").removeClass("icon1")
            $(".cbbox2").removeClass("icon1")
        }else{
            $(".cbbox1").addClass("icon1")
            $(".cbbox2").addClass("icon1")
        }
        sumprice()
    })

    // 点击加时
    
    
   
   
    // 总数量 总价
function sumprice(){
    var totalnum=0
    var totalPrice=0

      $(".inputbox input").each(function(){
          if($(this).closest(".right").siblings(".left").find(".cbbox2").hasClass("icon1")){
               totalnum+=parseInt($(this).val())
               $(".gopay a span").text(totalnum)
            var   price = $(this).parent().siblings(".price").find("i span").text()
            totalPrice +=+($(this).val()*price)
               $(".totalPrice1 span").text(totalPrice.toFixed(2))    
          }
      })
      if(!$(".inputbox input").closest(".right").siblings(".left").find(".cbbox2").hasClass("icon1")){
        $(".gopay a span").text(0)
        $(".totalPrice1 span").text(0)  
      }
      
    }
    sumprice()

    var num
    // 点击加的时候
    $(".inputbox .pAp").tap(function(){
            num=parseInt($(this).siblings("input").val()) 
        num++
        if(num>200){
            num=200
            $(".tip").css("display","block").text("最多购买200件商品")
            setTimeout(() =>{
            $(".tip").css("display","none")
            },2000)
        }else{
            $(this).siblings("input").val(num)
        }
        sumprice()
    })

    // 当点击减得时候
     $(".inputbox .pAd").tap(function(){
        num=parseInt($(this).siblings("input").val()) 
        num--
        if(num<1){
            mun=1
            $(".tip").css("display","block").text("最少购买1件商品")
            setTimeout(() =>{
            $(".tip").css("display","none")
            },2000)
        }else{
            $(this).siblings("input").val(num)
        }
        
        sumprice()
     })

    //  当input框输入内容时候

    $(".inputbox input").change(function(){
        this.value = this.value.replace(/\D/g,'')
        if($(this).val()<1){
            $(this).val(1)
            $(".tip").css("display","block").text("最少购买1件商品")
            setTimeout(() =>{
            $(".tip").css("display","none")
            },2000)
        }else if($(this).val()>200){
            $(this).val(200)
            $(".tip").css("display","block").text("最多购买200件商品")
            setTimeout(() =>{
            $(".tip").css("display","none")
            },2000)
        }
        sumprice()
    })


    // 当点击右上角编辑出现对应的删除图标
    $("#goEdit").tap(function(){
        if(this.innerHTML==="编辑"){
            $(this).text("完成")
            $(".inputbox .del").css("display","block")
            $(".totalPrice1").css("display","none")
            $(".allcheck").css("display","block")
            $(".gopay a").css("display","none")
        }else{
            $(this).text("编辑")
            $(".inputbox .del").css("display","none")
            $(".totalPrice1").css("display","block")
            $(".allcheck").css("display","none")
            $(".gopay a").css("display","block")
        }
    })
    
    // 当用户未登录时，提示用户登录!

!(function(){
    const username='zhangfeiyue'
        if(username){
            $('.cart-login span').css('display','none')
            $('#wrapper').css('margin-top','-1rem')
        }else{
            $('.cart-login span').css('display','blcok')
            $('#wrapper').css('margin-top','0')
        }
})();

  
})()
!(function(){
      // 删除商品

      
        // 删除数据函数
        function remove(itemid,username,dom){
            $.ajax({
                url:'../php/del_cartinf.php',
                data:'itemid='+itemid+'&username='+username,
                success(data){
                    if(data){
                            dom.remove()
                               $(".tip").css("display","block").text("删除成功")
                            setTimeout(() =>{
                            $(".tip").css("display","none")
                            },500)
                    }
                }
            })
        }

    // 逐个删除
    $(".inputbox .del").tap(function(){
        const itemid = $(this).data("getid")
        const username = 'zhangfeiyue'
       var  _this=$(this).closest(".item")
      
       remove(itemid,username,_this)
    })
    

    // 批量删除
        $(".gopay").tap(function(){
             const username = 'zhangfeiyue'
         if($("#goEdit").text()==="完成"){  
            
          const lis=  $(this).closest('.ui-foot').siblings("#wrapper").find(".item")
                for(let i = 0 ; i<lis.length ; i++){
                    const cbitemid = lis.eq(i).find('.cbbox2')
                    const del = lis.eq(i).find('.del')

                    if(cbitemid.hasClass('icon1')){
                      const  itemid= del.data("getid") 

                      remove(itemid,username,lis.eq(i))
                    }
                }
            }
        })
})();