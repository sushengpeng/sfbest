




$(window).scroll(function () {

    const arr = []
    const wh = $(window).height()
    $('.spcil-banner').each(function () {
        arr.push($(this).offset().top - wh)
    })
        for (let i = 0; i <arr.length; i++){
            if($(this).scrollTop() > arr[i]/2 && !$(".spcil-banner").eq(i).hasClass("loaded")){
                const kind = $('.spcil-banner').eq(i).attr('classify')
                    $.ajax({
                    url: '../php/taste.php',
                    data: 'kind='+kind,
                    beforeSend:function(){
                        $(".spcil-banner").eq(i).addClass("loaded")
                    },
                    success (data) {
                        const json = JSON.parse(data)
                        for( var k = 0; k<json.length; k++){

                            var img=(json[k].img).split(",")[0]
                            var str = ''
                            str += 
                            `
                                <li>
                                    <a>
                                        <img src="${img}" alt="">
                                        <p>${json[k].itemname}</p>
                                        <p class="price"><span>${json[k].price}</span> <!-- <span>买赠</span> --></p>
                                        <div>立即抢购</div>
                                    </a>
                            </li>
                            `
                            $('.productList ul').eq(i).get(0).innerHTML += str

                        }
                    }
                })
            }
        
        }
})