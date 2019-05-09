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

    // 删除商品

        // 无商品是显示购物车为空

        function showpage(){
            if($(".item").length===0){
                $(".carFullPage").css("display","none")
                $(".carEmptyPage").css("display","block")
            }
        }


    $(".inputbox .del").tap(function(){
        $(this).closest(".item").remove()
        showpage()
    })
    $(".gopay").tap(function(){
        if($("#goEdit").text()==="完成"){
            $(".item").remove()
        }
        showpage()
    })
})()

