var index=0
        //改变图片
        function ChangeImg(){
            index++
            var banner_image=document.getElementsByClassName('banner_img')
            if(index>=banner_image.length) index=0
            for(var i=0;i<banner_image.length;i++){
                banner_image[i].style.display='none'
            }
            banner_image[index].style.display='block'
        }
        //设置定时器
        setInterval(ChangeImg,2000)