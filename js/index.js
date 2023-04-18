$(function(){


    /* hamburger open */ 
    $("#hd .h").click(function(){
        $("#ham").toggleClass("open");
    });

            

    /* logo sub menu open */ 
    $("#hd > h1 > a").click(function(){
        $(".logo_m").toggleClass("open");
    });


    /* main banner slide */ 
    $("#slide").slick({
        dots: true,
        autoplay : true,
        infinite : true,
        autoplaySpeed : 4000,
        slidesToShow : 1,
        slidesToScroll : 1,
        arrows : false,
        adaptiveHeight: true,
        // responsive : [
        //     {
        //         breakpoint : 640,
        //         settings : {
        //             slidesToShow : 1,
        //             slidesToScroll : 1
        //         }
        //     }
        // ]
    });



    /* what's new slide */ 
    $("#new").slick({
        dots: true,
        autoplay : true,
        infinite : true,
        autoplaySpeed : 4000,
        slidesToShow : 1,
        slidesToScroll : 1,
        arrows : false,
        adaptiveHeight: true,
        responsive : [
            {
                breakpoint : 640,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1
                }
            }
        ]
    });

    

 
    /* event banner slide */ 
    $("#event > ul").slick({
        centerMode : true,
        slide : "li",

        infinite : true,
        autoplay : true,
        autoplaySpeed : 3000,
        slidesToShow : 3,
        slidesToScroll : 1,
        speed : 3000,
        arrows : false,
        pauseOnHover : true,
        draggable : true,
        touchMove : true,
        
        dots : false,
        // responsive : [
        //     {
        //         breakpoint : 641,
        //         settings : {
        //             slidesToShow : 3,
        //             slidesToScroll : 1
        //         }
        //     }
        // ]
    });



    /* popup - close */ 

    
});