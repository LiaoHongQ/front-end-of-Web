$('.sfq1').hover(function(){
    $(this).stop().animate({
    width:'650px'
},1000).siblings().stop().animate({
        width:'50'
},1000)
})
