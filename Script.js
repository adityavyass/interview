var element;
const a=document.getElementById("header12");
// element=document.getElementById("header12").innerHTML;
// document.querySelector("#header12").innerHTML="<h1>wow</h1>";
// document.querySelector("#header12").setAttribute("class","xyx");
// document.querySelector("#header12").style.backgroundColor="tan";
// document.querySelector("#header12").className= "abcd xyx";
// element=document.querySelector("#header12").className;
// element=document.getElementById("header12").innerHTML;
// --------------------------------------------------------------------------------
// document.querySelector("#header12").addEventListener("click",change);
// document.querySelector("#header12").addEventListener("mouseenter",onMouseEnter);
// console.log(element);

// function change(){
//     document.querySelector("#header12").style.background="green";
//     // document.getElementById("header12").style.color="lightblue";
//     document.querySelector("#header12").removeEventListener("mouseenter",onMouseEnter)
//    document.querySelector("#header12").style.color="lightblue";

// }
// function onMouseEnter() {
//   document.getElementById("header12").style.color = "white";
// }

// ---------------------------------------------------------------------------------------


// document.getElementById("header12").addEventListener("mouseover",bcd);
// document.querySelector("#header12").addEventListener("click",abc);
// function abc(){
// document.querySelector("#header12").classList.remove("abcd");
// document.getElementById("header12").classList.add("xyx");
// document.getElementById("header12").removeEventListener("mouseover",bcd);
// }
// function bcd(){
//     document.querySelector("#header12").classList.add("abcd");
    
// }
// -----------------------------------------------------------------------------------------

// a.addEventListener("mouseover",abc);
// a.addEventListener("click",bca);
// // function abc(){
// //     a.classList.add("abcd");
// // }
// function bca(){
//     // a.classList.remove("abcd");
//     a.classList.toggle("xyx");
// }


// ----------------------------------------------------------------------------------------------

// document.getElementsByClassName("outer")[0].parentElement.style.background="lightblue";
// // document.getElementsByClassName("outer")[0].children[2].style.background="orangered";

// const ch=document.getElementsByClassName("outer")[0].children;
// for(var i=0;i<=ch.length;i++){
//     if(i==1 || i==3){

//     }else{
//     ch[i].style.background="orangered";
//     }
// }

// ---------------------------------------------------------------------------------------------------

document.getElementsByClassName("outer")[0].parentElement.style.background="lightblue";
const ch=document.getElementsByClassName("outer")[0].firstElementChild.style.background="#A084CA";
document.getElementsByClassName("outer")[0].lastElementChild.style.background="#749BC2";

var chi=document.getElementsByClassName("outer")[0].firstChild;
console.log(chi);
var c=document.getElementsByClassName("outer")[0].children[2];
c.nextElementSibling.style.border="5px solid yellow";
c.previousElementSibling.style.border="5px solid yellow";
console.log(c);
c.style.background="#FFEEAF";

// ----------------------------------------------------------------------------------------------------------

// var newElement=document.createElement("h2");
// var newText=document.createTextNode("THIS is INFORMATION");

// newElement.appendChild(newText);
// console.log(newElement);

// document.getElementById("test").appendChild(newElement);

// var target=document.getElementById("test");
// target.insertBefore(newElement,target.children[0]);

// ----------------------------------------------------------------------------------------------------/

var target=document.getElementById("test");
var newHTML="<h2>Good Information</h2>";
target.insertAdjacentHTML("beforeend",newHTML);
var newText="hello hi how are you";
target.insertAdjacentText("beforeend",newText);
// -----------------------------------------------------------------------------------------------------------

var target1=document.getElementById("list");

var newElement1= document.createElement("li");
var newText1= document.createTextNode("Not Fruit");

newElement1.appendChild(newText1);
var oldElement=target1.children[4];
var oldElement1=target1.children[0];

target1.replaceChild(newElement1,oldElement);
target1.removeChild(oldElement1);

// ----------------------------------------------------------------------------------------------------------------

var target2=document.querySelector("#list").children[0];

var last=document.getElementById("list2").children[1];

var copy=target2.cloneNode(true);

document.getElementById("list2").insertBefore(copy,last);

// ----------------------------------------------------------------------------------------------------------------------

var parentEle=document.getElementById("outest");
var target3=document.getElementsByClassName("child")[2];
var find=parentEle.contains(target3);
console.log(find);

// --------------------------------------------------------------------------------------------------------------------------

var target4=document.getElementsByClassName("child")[2];

// var check1=target4.hasAttribute("id");
var check1=target4.hasChildNodes();
console.log("___________________________________")
console.log(check1);

// -------------------------------------------------------------------------------------------------

var elem=document.getElementById("fname");
var ele=document.getElementById("lname");
elem.addEventListener("focus",focusfunction);
elem.addEventListener("blur",blurfunction);
ele.addEventListener("focus",focusfunction);
ele.addEventListener("blur",blurfunction);
function focusfunction(elem,ele){
    this.style.background="lightgrey";
}
function blurfunction(ele,ele){
     this.style.background="";
}
function changefunction(hell){
var x=hell.value;
document.getElementById("chng").innerHTML=x;
}
function inputfunction(hell){
    var x=hell.value;
    document.getElementById("chng").innerHTML=x;
}
function selectfunction(hell){
 var x=hell.value;
    document.getElementById("chng").innerHTML=x;
}

function submitbutton(){
    var x=document.getElementById("fname").value;
    alert("hello "+x)
}

var av=0;
var i=setInterval(Anim,50);

function Anim(){
    av=av+10;

if(av==500){
clearInterval(i);
}else{
var targ=document.getElementById("box");
    targ.style.width=av+"px";
}


    
}