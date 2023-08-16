
const inputField=document.querySelector("#inputField");

document.getElementById("addBtn").addEventListener("click",function(){

const inputText=inputField.value;

if(inputText ==""){

    alert("add some text toDo list");
    return;
}else{

    
let textContainer= document.querySelector("#text-container");


let newElm=document.createElement("ul");
newElm.innerHTML=`

<div class="flex justify-between p-3 mb-2 bg-black text-yellow-400">  <div> ${inputField.value}</div>  <i  class="text-red-600 fa-solid fa-trash"></i> </div>
`
textContainer.appendChild(newElm)
inputField.value="";

newElm.querySelector("i").addEventListener("click",function(){

   newElm.remove();

})
}


})