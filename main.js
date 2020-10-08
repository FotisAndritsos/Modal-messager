const btn = document.getElementById('btn');
const message = document.getElementById('inmessage');
const cl = document.querySelector('.cl');
const mes = document.querySelector('.mes');
const overlay = document.querySelector('.overlay');
const mod = document.querySelector('.mod');
const niaou = document.querySelector('.niaou');
const form = document.querySelector('form');



const showMessage = () =>{
    inc = message.value;
    mes.textContent = '"' + inc + '"';
    mod.classList.toggle("active");
    overlay.classList.toggle("active");
}


form.addEventListener('submit', evt => {
    evt.preventDefault();
    showMessage();
})



cl.addEventListener('click',() =>{
    mod.classList.remove("active");
    overlay.classList.remove("active");
    message.value = "";
})
