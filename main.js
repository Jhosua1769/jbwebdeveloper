// $(document).ready(function(){

//     $(".nav-icon").click(function(){

//         $(".full-nav").addClass("open");
//     });

//     $(".nav-close").click(function(){

//         $(".full-nav").removeClass("open");
//     });

    
// });
// visibility: visible;
//     opacity: 1;

// let menu = document.querySelector('.nav-bar');
let containerMenu = document.querySelector('.navbar-expand-lg');

let activador2 = true;
let menu2 = document.querySelector('.full-nav');



function openmenu(){

    console.log('works so far!')
    menu2.style.visibility = "visible";
    menu2.style.opacity = "1";
    menu2.style.transition = "all 0.5s ease-in-out";
}

function closemenu(){

    console.log('closebutton works so far')
    menu2.style.visibility = "hidden";
    menu2.style.opacity = "0";
    menu2.style.transition = "all 0.5s ease-in-out";
}

// $(document).ready(function(){

//    $(window).scroll(function(){

//         var sc = $(window).scrollTop();
//         if(sc > 200){
//             $(".nav").addClass("sticky");

//         }
//         else{
//             $(".nav").removeClass("sticky");
            
//         }

//    });

//    $('.bxslider').bxSlider({
//     mode: 'horizontal',
//     moveSlides:1,
//     slideMargin:40,
//     infiniteLoop:true,
//     minSlides:1,
//     maxSlides:1,
//     speed:1200, 
//     });
    
