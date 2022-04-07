
$(function(){

    menu();
    coverimage();
    maintab();
    outlink();










    const swiper = new Swiper('.main-swiper', {

        slidesPerView: 1,
        spaceBetween: 0,
        loop:true,

        navigation: {
            nextEl: '.main-next',
            prevEl: '.main-prev',
        },

        breakpoints: {
          1199: {
            slidesPerView: 3,
            spaceBetween: 4
          }
        }
      });




      const swiper2 = new Swiper('.banner-swiper', {
        autoplay:true,
        slidesPerView: 1,
        spaceBetween: 0,
        loop:true,

        navigation: {
            nextEl: '.banner-next',
            prevEl: '.banner-prev',
        }
      });


      $('.banner-pause').on('click',function(){
        swiper2.autoplay.stop();
        $(this).removeClass("active");
        $('.banner-play').addClass("active");
        
        return false;
       });

       $('.banner-play').on('click',function(){
         swiper2.autoplay.stop();
         $(this).removeClass("active");
         $('.banner-pause').addClass("active");
         
         return false;
        });
    
    


});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on("resize", function(){
    windowh = $(window).height();
    windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {


    $("button.main-menu").on("click", function () {
        $("nav#main-menu").toggleClass("menu");
        $("nav#main-menu").toggleClass("allMenu");
    });

    $("nav#main-menu button.close").on("click", function () {
        $("nav#main-menu").toggleClass("menu");
        $("nav#main-menu").toggleClass("allMenu");
    });

    // $("nav#main-menu h3 a").on("click", function (e) {
        
    //     $("nav#main-menu h3").removeClass("on");



    //     if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

    //         $(this).parent().addClass("on");
    //         e.preventDefault();

    //     }
    //     else {
    //         $("nav#main-menu h3 a").unbind();

    //     }
    // });

    $("nav#main-menu div.menus h3 a").on("mouseenter", function(){
        $("nav#main-menu div.menus>ul>li").removeClass("on");
        $(this).parent().parent().addClass("on");
    });

    $("nav#main-menu div.menus>ul>li ul").on("mouseleave", function(){
        $(this).parent().removeClass("on");
    });

}

/* ----- cover image ----- */ 
function coverimage() {


    $(".gallery-list div.pics").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });
}

/* ----- main tab ----- */ 
function maintab() {

    $(".main-info .tab-outline h3").on("click", function(){

        $(".main-info .tab-outline h3").removeClass("active");
        $(this).addClass("active");

        $(".main-info .tab-outline .tab-data").removeClass("active");
        $(".main-info .tab-outline ."+ $(this).attr("data") +"").addClass("active");

    });
}
/* ----- outlink ----- */ 
function outlink() {
    $(".agency-open").click(function() {
        console.log("클릭");
        $(this).toggleClass("on");
    });
}
