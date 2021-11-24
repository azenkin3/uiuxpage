$(window).scroll(function(){
    var ws=$(this).scrollTop();
    if(ws>500){
        $('.wih').css("transform","translateX(0px)").css("opacity","1")
    }
});