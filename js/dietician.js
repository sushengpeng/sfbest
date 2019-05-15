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

console.log(11111)