
let arr=JSON.parse(localStorage.getItem("items"))
//console.log(arr);

display(arr)

function display(arr){
    let sum=0;
    let myOuter=document.getElementById("cart");
    myOuter.innerHTML=null;
   

    arr.forEach(function(el,index){
        sum=sum+el.price;
       let total=document.getElementById("cart_total").textContent=Number(sum);
        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=el.name;
        let img=document.createElement("img");
        img.src=el.image;
        let price=document.createElement("p");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="remove";
        btn.addEventListener("click",function(){
            remove(index);
        })

        div.append(img,name,price,btn);
        myOuter.append(div);

    })
}

function remove(index){
    arr.splice(index,1);
    localStorage.setItem("items",JSON.stringify(arr));
    display(arr);
}