let footer_icon=document.querySelectorAll('.f_icon')
        let icon_array=['./img/twitter_b.png','./img/goole.png','./img/sina_r.png','./img/WeChat_gr.png']
        let icon_arr=['./img/twitter.png','./img/goole_g.png','./img/sina.png','./img/weChat.png']
        for(let i=0;i<4;i++){
            footer_icon[i].addEventListener('mouseover',function(){
                this.src=icon_array[i]
            })
        }
        for(let i=0;i<4;i++){
            footer_icon[i].addEventListener('mouseleave',function(){
                this.src=icon_arr[i]
            })
        }