        

      
  
        $(window).scroll(function () {
        var ws = $(this).scrollTop();
        if (matchMedia("screen and (min-width: 600px)").matches) {
        
       
       /* whats , 테이블 설정 600px 이상 */
        if (ws > 400) {
            $('article').css("transform", "translateX(0px)").css("opacity", "1")
        }

        if (ws > 1000) {
            $('table').css("transform", "translateX(0px)").css("opacity", "1")
        }

        /* service include wrapa*/
        if (ws > 1650) {
            $('.texta').css("transform", "translateY(0px)").css("opacity", "1")
        }
        if (ws > 1650) {
            $('.photoa').css("transform", "translateY(0px)").css("opacity","1")
        }
        /* service include wrapb*/
        if (ws > 2100) {
            $('.textb').css("transform", "translateY(0px)").css("opacity", "1")
        }
        if (ws > 2100) {
            $('.photob').css("transform", "translateY(0px)").css("opacity","1")
        }
        /* service include wrapc*/
        if (ws > 2350) {
            $('.textc').css("transform", "translateY(0px)").css("opacity", "1")
        }
        if (ws > 2350) {
            $('.photoc').css("transform", "translateY(0px)").css("opacity","1")
        }
/* service include wrapc*/
        if (ws > 2800) {
            $('.text1').css("transform","translateX(0px)").css("opacity","1")
        }

        if (ws > 2800) {
            $('.photo1').css("transform","translateY(0px)").css("opacity","1")
        }
/* service include wrapc*/
        if (ws > 2950) {
            $('.text2').css("transform","translateX(0px)").css("opacity","1")
        }
        if (ws > 2950) {
            $('.photo2').css("transform","translateY(0px)").css("opacity","1")
        }
/* service include wrapc*/
        if (ws > 3100) {
            $('.text3').css("transform","translateY(0px)").css("opacity","1")
        }
        if (ws > 3100) {
            $('.photo3').css("transform","translateY(0px)").css("opacity","1")
        }
  /* service include wrapc*/        
        if (ws > 3800) {
            $('.text4').css("transform","translateX(0px)").css("opacity","1")
        }
        if (ws > 3800) {
            $('.photo4').css("transform","translateY(0px)").css("opacity","1")
        }
/* service include wrapc*/
        if (ws > 3950) {
            $('.text5').css("transform","translateX(0px)").css("opacity","1")
        }
        if (ws > 3950) {
            $('.photo5').css("transform","translateY(0px)").css("opacity","1")
        }
       
       

        }else{

 /* service include wrapc*/
            if (ws > 500) {
            $('.at1').css("transform", "translateX(0px)").css("opacity", "1")
        }

        if (ws > 800) {
            $('.at2').css("transform", "translateX(0px)").css("opacity", "1")
        }

        if (ws > 1000) {
            $('.at3').css("transform", "translateX(0px)").css("opacity", "1")
        }

        if (ws > 1800) {
            $('table').css("transform", "translateX(0px)").css("opacity", "1")
        }

          /* service include wrapa*/
          if (ws > 5500) {
            $('.texta').css("transform", "translateY(0px)").css("opacity", "1")
        }
        if (ws > 5500) {
            $('.photoa').css("transform", "translateY(0px)").css("opacity","1")
        }
        /* service include wrapb*/
        if (ws > 5950) {
            $('.textb').css("transform", "translateY(0px)").css("opacity", "1")
        }
        if (ws > 5950) {
            $('.photob').css("transform", "translateY(0px)").css("opacity","1")
        }
        /* service include wrapc*/
        if (ws > 6300) {
            $('.textc').css("transform", "translateY(0px)").css("opacity", "1")
        }
        if (ws > 6300) {
            $('.photoc').css("transform", "translateY(0px)").css("opacity","1")
        }
 /* service include wrapc*/
        if (ws > 7150) {
            $('.text1').css("transform","translateX(0px)").css("opacity","1")
        }
        if (ws > 7150) {
            $('.photo1').css("transform","translateY(0px)").css("opacity","1")
        }
 /* service include wrapc*/
        if (ws > 7450) {
            $('.text2').css("transform","translateX(0px)").css("opacity","1")
        }
        if (ws > 7450) {
            $('.photo2').css("transform","translateY(0px)").css("opacity","1")
        }
         /* service include wrapc*/
        if (ws > 7800) {
            $('.text3').css("transform","translateY(0px)").css("opacity","1")
        }
        if (ws > 7800) {
            $('.photo3').css("transform","translateY(0px)").css("opacity","1")
        }
     
        /* service include wrapc*/
        if (ws > 8600) {
            $('.text4').css("transform","translateX(0px)").css("opacity","1")
        }
        if (ws > 8600) {
            $('.photo4').css("transform","translateY(0px)").css("opacity","1")
        }
        /* service include wrapc*/
        if (ws > 8900) {
            $('.text5').css("transform","translateX(0px)").css("opacity","1")
        }
        if (ws > 8900) {
            $('.photo5').css("transform","translateY(0px)").css("opacity","1")
        } 
    }     

    }); 
