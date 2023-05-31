const buttom =document.getElementById('buttom');
const span = document.getElementById('span');
const  form=document.getElementById('form');
let page1 =document.getElementById('page1');
let page2 =document.getElementById('output_screen');
buttom.onclick=()=>  {   
    const emaile =document.getElementById('email').value.trim();
    const test= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;   
        if(emaile.match(test)){
            page1.style.display=" none";
            page2.style.display=" block";
            span.textContent=emaile;
        }else{
            text.style.display=" block";
            emaile.style.borderColor = "red";
            emaile.style.backgroundColor=" rgba(255, 0, 0, 0.2)";
        }
};