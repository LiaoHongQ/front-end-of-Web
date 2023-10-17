let head_li=document.querySelectorAll('.H_N_li')
let head_div=document.querySelector('.Nav_head_second')
let logo=document.querySelector('#logo')
let head_a=document.querySelectorAll('.A_Nav')
for(let i=0;i<head_li.length;i++){
    head_li[i].addEventListener('mouseover',function(){
        logo.src='./img/HQ1.png'
    })
    head_li[i].addEventListener('mouseleave',function(){
        logo.src='./img/HQ.png'
    })
}