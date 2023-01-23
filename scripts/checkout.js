/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/

function mySubmit(n,num,a){
    this.name=n;
    this.number=num;
    this.address=a;
}

function submit(){

    let name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let address=document.getElementById("address").value;

    let obj=new mySubmit(name,number,address);
    console.log("obj",obj);

}
 /*
  setTimeout(function(submit){
    alert("Your order is accepted ")
  },0)


  setTimeout(function(submit){
    alert("Your order is being Packed ")
  },3000)


  setTimeout(function(submit){
    alert("Your order is in transit  ")
  },8000)

  setTimeout(function(submit){
    alert("Your order is out for delivery ")
  },10000)

  setTimeout(function(submit){
    alert("Order delivered")
  },12000)

*/