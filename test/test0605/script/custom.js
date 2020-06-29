

//    $(".nav > ul >li").mouseover(function(){
//        $(this).find(".submenu").stop().slideDown(200)
//    });
//    $(".nav > ul >li").mouseout(function(){
//        $(this).find(".submenu").stop().slideUp(200)
//    });
          
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown()
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp()
    });
   
        // const slideWarp = $(".slide-warp")
        // const slideImg = $(".slide-img")
        // const slides = $(".slides")

        // setInterval(function(){
        //     slideImg.animate({left:"-1000px"},400 , function(){
        //         $(".slides:first-child").appendTo(slideImg)
        //         slideImg.css("left", "")
        //     })
        // },3000);

        //        const slideWarp = $(".slide-warp")
        //        const slideImg = $(".slide-img")
        //        const slides = $(".slides")
        //
        //        setInterval(function(){
        //            slideImg.animate({left:"-1000px"},400,function(){
        //                $(".slides:first-child").appendTo(slideImg)
        //                slideImg.css("left","")
        //            });
        //        },3000);


    const slideWarp = $(".slide-warp")
    const slideImg = $(".slide-img")
    const slides = $(".slides")
    
    
    setInterval(function(){
        slideImg.animate({left:"-1000px"},400,function(){
            $(".slides:first-child").appendTo(slideImg)
            slideImg.css("left","")
        });
    },3000);

//탭메뉴

var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();


tabBtn.click(function(event){
    event.preventDefault();
    var target = $(this);
    var index = target.index();
    //alert(index);
    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display","none");
    tabCont.eq(index).css("display","block");
});

//var tabBtn = $(".tab-btn > ul >  li");
//var tabCont = $(".tab-cont > div");
//
//tabCont.hide().eq(0).show();
//
//tabBtn.click(function(event){
//    event preventDefaulf();
//    var target = $(this);
//    var index = target.index();
//    tabBtn.removeClass("active");
//    target.addClass("active");
//    tabCont.css("display", "none");
//    tabCont.eq(index).css("display","block");
//});



// //레이어 팝업
// $("#content1 .cont2").click(function(){
//     $(".layer").show();
// });
// $(".layer .close").click(function(){
//     $(".layer").hide();
// });

// $("#content1 .cont1").click(function(){
//     $(".layer").show(300);
// });
// $(".layer .close").click(function(){
//     $(".layer").hide(300);
// });

// $("#content1 .cont2").click(function(){
//     $(".layer").show(300);
// })
// $(".layer .close").click(function(){
//     $(".layer").hide(300);
// });

$("#content1 .cont2").click(function(){
    $(".layer").show(300);
});
$(".layer .close").click(function(){
    $(".layer").hide(300);
});

$("content1 .cont2").click(function(){
  $(".layer").show(300);
  });
$("content1 .cont2").click(function(){
    $(".layer").hide(300);
})












