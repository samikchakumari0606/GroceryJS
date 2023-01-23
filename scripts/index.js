// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items



async function getData(){
    let res=await fetch(`https://grocery-mock-api.herokuapp.com/items`);
    let data=await res.json();
    appendData(data.data)
    console.log("data",data);

}
getData();


function appendData(data){
    let container=document.getElementById("items");
  container.innerHTML=null;
    data.forEach(function(el){

        let div=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=el.name;
        let img=document.createElement("img");
        img.src=el.image;
        let price=document.createElement("p");
        price.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="add to cart";
        btn.addEventListener("click",function(){
         
            addToCart(el)

        })

        div.append(img,name,price,btn);
        container.append(div)

    })
}


let arr=JSON.parse(localStorage.getItem("items"))||[]
function addToCart(el){
    arr.push(el)
    localStorage.setItem("items",JSON.stringify(arr));
    document.getElementById("item_count").textContent=Number(arr.length);

}