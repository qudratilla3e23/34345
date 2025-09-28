const son=document.getElementById("son");
const plusBtn=document.getElementById("plus-btn");
const minusBtn=document.getElementById("minus-btn");
const send=document.getElementById("send");
const input=document.getElementById("input");
const colorInput =document.getElementById("color-input");




send.addEventListener("click",()=>{
    if(input.value.trim() <1    ){
        alert("son kiriting:");
    }else{
        son.textContent=input.value
    }
})


plusBtn.addEventListener("click",()=>{
    son.textContent=+son.textContent+1;
})
minusBtn.addEventListener("click",()=>{
    son.textContent=+son.textContent-1;
})
colorInput.addEventListener("input",()=>{
    son.style.color=colorInput.value;
})