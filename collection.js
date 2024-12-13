var container=document.getElementById("products")
var search=document.getElementById("search")
var productlist=container.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("h4").textContent

        if(productname.indexOf(enteredvalue)<0)
        {
          productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})
