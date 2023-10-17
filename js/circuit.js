let circuit_cons=document.querySelectorAll('.circuit_con')
let circuit_span=document.querySelectorAll('.circuit_segment')
let circuit_p=document.querySelectorAll('.circuit_segment1')
let circuit_p_1=document.querySelectorAll('.circuit_segment2')
let circuit_imgs=document.querySelectorAll('.circuit_img')
for(let i=0;i<3;i++){
    circuit_cons[i].addEventListener('mouseover',function(){
        this.style="cursor:pointer;"
        circuit_span[i].style="display:block"
        circuit_p[i].style="color:#fff"
        circuit_p_1[i].style="color:#fff"
    })
}
for(let i=0;i<3;i++){
    circuit_cons[i].addEventListener('mouseleave',function(){
        circuit_span[i].style="display:none"
        circuit_p[i].style="color:gray"
        circuit_p_1[i].style="color:gray"
    })
}
let act_a=document.querySelectorAll('.action_a')
let act_e=document.querySelectorAll('.action_explain')
let act_o=document.querySelectorAll('.opationa')
for(let i=0;i<4;i++){
    act_o[i].addEventListener('mouseover',function(){
        act_a[i].style='margin-top:200px'
        act_e[i].style='opacity:1'
    })
}
for(let i=0;i<4;i++){
    act_o[i].addEventListener('mouseleave',function(){
        act_a[i].style='margin-top:240px'
        act_e[i].style='opacity:0'
    })
}