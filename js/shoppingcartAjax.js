!(function(){
    var uname="zhangfeiyue"

    $.ajax({
        url:"../php/shoppingcart.php",
        async: false,
        data:"username="+uname,
        success: function(data){
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
                        <div class="del"></div>
                    </div>
                </div>
            </div>
        </div>
    </li>

        `
            $(".prolistCont").get(0).innerHTML+=str


        }
        }
    })
})();

$.ajax({
    url:'js/shoppingcart.js',
    datatype:'script',
    success:function(){
        console.log(1)
    }
})
