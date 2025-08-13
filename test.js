
// for(let i = 0; i<=5;i++){
//     for(let j=0;j<=i;j++){
//  console.log("*");
//     }
//     console.logln();
// }


// function printStarSquare() {
//   let pattern = "";

//   for (let i = 1; i <= 7; i++) {
  
//     for (let j = 1; j <= i; j++) {
//       pattern += "* ";
//     }
//     pattern += "\n"; 
//   }

//   console.log(pattern);
// }

// printStarSquare();  

// console.clear();
// let a="";
// for(let i=1;i<=4;i++){
//   for(let j=1;j<=i;j++){
//     // console.log("*");
//     a=a+"*";
//   }
//   a=a+"\n";
// }
// console.log(a);

// console.clear();
// let b="";
// for(let i=0;i<=5;i++){
//   for(let j=i;j<=i;j++){
//     b=b+" ";
//   }
//   for(let k=0;k<5;k++){
//     b=b+"*";
//   }
//   b=b+"\n";
// }
// console.log(b);

// console.clear();
// let b = "";
// for (let i = 0; i <= 5; i++) {
  
//   for (let j = i; j < 5; j++) {
//     b = b + " ";
//   }
  
//   for (let k = 0; k < i; k++) {
//     b = b + " *";
//   }
//   b = b + "\n";
// }
// console.log(b);
// ---------------------------------------------------------------------------------------

// let a=10;
// function ab(){
//   let a=20;
//   var c=10;
//   var c=2;
//   console.log(a);
// }
// console.log(a);
// console.log(a);
// ab();
console.clear();
// function outer(){
//   var name="aditya";
// return function inner(){
//   console.log(name);
// }
// return inner();
// }

// var z=outer();
// z();

// function hello(callback){
//   console.log("hello");
//   callback();
// }
// function world(){
//   console.log("world");
// }

// hello(world);

// const user=[
//   {firstname: "Aditya", lastname:"Vyas", age:24},
//   {firstname: "Riddhima", lastname:"Sharma", age:20},
//   {firstname: "Aryaman", lastname:"Sharma", age:20},
//   {firstname: "Rahul", lastname:"Prajapat", age:24}
// ];

// function allFirst(user){
//   return firstname;
// }

// const output = user.filter((x) => x.age>22).map((x)=>x.firstname);
// console.log(output);

// const out1=user.reduce(function(acc,curr){
// if(curr.age>22){
//   acc.push(curr.firstname);
// }
// return acc;
// },[]);
// console.log(out1);
// ----------------------------------------------------------------------------------------
// const fs = require('fs');
// const { json } = require('stream/consumers');

// const  obj=[{
//   name:"Aditya Vyas",
//   age: 24,
//   city:"khategaon",
//   isCoder:true,
//   skills:["html","css","js"],
//    adress:{
//     state:"MP",
//     Country:"India"
//   },
// },
// {
//   name:"Rahul Prajapat",
//   age: 24,
//   city:"sandal",
//   isCoder:false,
//   skills:["bs","cs","ps"],
//    adress:{
//     state:"HP",
//     Country:"India"
//   },
// },
// {
//   name:"Radha ji",
//   age: 24,
//   city:"barsana",
//   isCoder:true,
//   skills:["love","wisdon","knowldege"],
//    adress:{
//     state:"UP",
//     Country:"India"
//   },
// }];





// const save=JSON.stringify(obj,null,2);

// fs.writeFile('user.json',save,(err)=>{
//   if(err){
//     console.log("error"+err);
//   }else{
//     console.log("sucess"+err);
//   }
// });

// ------------------------------------------------------------------------------------------

// fs.readFile('user.json','utf8',(err,data)=>{
// if(err){
//   console.log("error reading"+err);
//   return;
// }

// const user=JSON.parse(data);
// console.log(user[0].name);
// })
// -----------------------------------------------------------------------------------------

// fetch('user.json').then(Response=>Response.json()).then(data=>{
//   console.log(data[2].name);
// })
//  .catch(error => {
//     console.error(" Error loading JSON:", error);
//   }); 

  // ----------------------------------------------------------------------------------------

// const word="hello";
// const char=[...word];
// console.log(char[4]);

// const obj={
//   name: "aditya",
//   age:24,
//   address:{
// city:"khategaon",
// distt:"dewas",
// state:"MP"
//   }
// };

// const {name,...restproperty}=obj;
// console.log(name);
// console.log(restproperty);

// const arr=[1,2,3,4,5];
// const [a,b,...rest]=arr;
// console.log(a);
// console.log(rest);

// const [c,d]=arr;
// console.log(d);

// const arr2=[...arr,12,13,14];
// console.log(arr2);

// const newarry=[...arr,...arr2];
// console.log(newarry);

// console.log(obj.address.distt);

// ---------------------------------------------------------------------------------------

// Promise

// const cart=["jeans","shirt","pant"];

// createOrder(cart).then(function(orderId){
  
//   return orderId;
// })
// .then(function(orderId){
//  return proceedToPayment(orderId);
// })

// .then(function(paymentInfo){
// console.log(paymentInfo);
// })
// .catch(function(err){
//   console.log(err.message);
// });
// function createOrder(cart){
//  const pr= new Promise(function(resolve,reject){
//  if(!validateCart(cart)){
//   const err= new Error("Card is not Valid");
//   reject(err);
//  }
//   const orderId=12345;
//   if(orderId){
//   resolve(orderId);
//   }
//  });
//  return pr;
// }


// function validateCart(cart){
// return true;
// }


// function proceedToPayment(orderId){
// return new Promise(function(resolve,reject){
//   resolve("payment successfull");
// })
// }

// ---------------------------------------------------------------------


// const cart=["jeans","pant","shirt"];


// async function placeOrder(){
// try{
// const done=await createOrder(cart);
// // console.log(done);
// const paymentInfo1= await proceedToPay(done);
// console.log(paymentInfo1);
// }
// catch(err){
// console.log(err.message);
// }
// }
// placeOrder();


// function createOrder(cart){
//   const pr=new Promise(function(resolve,reject){
//     if(validateCart(cart)){
//       const mess="valid cart"
//       resolve(mess);
//     }
//     const err= new Error("cart is not valid");
//     reject(err);
//   });
//   return pr;
// }

// function validateCart(cart){
//   return true;
// }
// function proceedToPay(done){
//  return new Promise(function(resolve,reject){
//   resolve("payment Done");
//  });
// }

// -----------------------------------------------------------------------------------


// let fullname =function(hometown,state){
//     console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state);
//   }

// const data={
//   firstname:"Aditya",
//   lastname:"Vyas"
// } 
// fullname.call(data,"khategaon","MP");  


// const data1={
//   firstname:"Sachin",
//   lastname:"Tendulkar"
// }
// fullname.call(data1,"mumbai","MH"); 

// ------------------------------------------------------------------------------------


// var box=document.getElementById("div1");
// var inp=document.querySelector("body");
// var left=0;
// var up=0;
// inp.addEventListener("keydown",(e)=>{
//   console.clear();
//  switch(e.key){
//   case "ArrowRight":
//     left=left+5;
//     break;
    
//   case "ArrowLeft":
//     left=left-5;
//     break;
    
//   case "ArrowDown":
//     up=up+5;
//     break;
    
//   case "ArrowUp":
//     up=up-5;
//     break;
  
//     default: console.log("wrong key");
//  }
//  console.log("left "+left);
//  console.log("up "+up);
// console.log(e.key);
// box.style.marginLeft=left+"px";
// box.style.marginTop=up+"px";
// });



// box.addEventListener("mousedown",(e)=>{
//   console.clear();
// var ctrl=e.button;
// console.log("mouse x: "+ctrl);
// var bgc;
// switch(ctrl){
//  case 0: 
//  bgc="lightblue";
//  break;
//  case 1: 
//  bgc="pink";
//  break;
//  case 2:
//   bgc="orangered";
//   break;
//   default:
//     bgc="black";
// }
// console.log(bgc);
// box.style.backgroundColor= bgc;

// });

// console.log("px from top: "+box.offsetTop);
// console.log("px from left: "+box.offsetLeft);
// -----------------------------------------------------------------------------------
class hello{
 constructor(){
  console.log("I am in constructor");
 }
  message(){
    console.log("Hello everyone");
    
  }
 static jai(){
  console.log("jai ho");
 }
}
let ob=new hello();
ob.message();
hello.jai();

// -------------------------------------------------------------------------------------

// // forbrowser
// fetch("readme.txt").then((Response)=> Response.text())
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error.message));

// --------------------------------------------------------------------------
// forjson

// fetch("user.json").then((Response)=> Response.text())
// .then((data)=>{
//   let data2=JSON.parse(data);
//    let [a,b,c]=data2;
//         console.log(a.city);
// })
// .catch((error)=>console.log(error.message));


// ---------------------------------------------------------------------------------

// fornode
// const fs=require('fs');

// fs.readFile("readme.txt","utf8",(err,data)=>{
//   if(err){
//     console.log(err.message);
//   }else{
//         console.log(data);
//   }
// });
// -----------------------------------------------------------------------------------

// forJson
// const fs=require('fs');

// fs.readFile("user.json","utf8",(err,data)=>{
//   if(err){
//     console.log(err.message);
//   }else{
//     let data1=JSON.parse(data);
//         let [a,b,c]=data1;
//         console.log(a);
//   }
// });
// -----------------------------------------------------------------------------------

let newdata=[{
  name: "copy",
  data: "dummy"
}];

// fetch("user.json",{
//   method:"PUT",
//   body: JSON.stringify(newdata),
//   headers:{
//     "contant-type":"application/json; charset=UTF-8",
//   },
// })
//   .then((response)=>response.json())
//   .then((json)=>console.log(json))
//   .catch((error)=>console.log(error));
//   --------------------------------------------------------------------------------------

// upload via node

// let fs=require('fs');

// let newData1=JSON.stringify(newdata,null,2);

// fs.writeFile("user.json",newData1,(err)=>{
//   if(err){
//     console.log("failed to upload data");
//   }else{
//     console.log("done uploading");
//   }
// });
// --------------------------------------------------------------------------------------