$(function () {
  menu();
  coverimage();
  maintab();
  outlink();
  grapgtab();
  submenu();
  mobileSubMenu();
  weathertab();
  intromenu();
  notivetab()
  pasttab()
  modalshow()
  modalclose()

  const swiper = new Swiper('.main-swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    navigation: {
      nextEl: '.main-next',
      prevEl: '.main-prev',
    },

    breakpoints: {
      1199: {
        slidesPerView: 3,
        spaceBetween: 4,
      },
    },
  });

  const swiper2 = new Swiper('.banner-swiper', {
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    navigation: {
      nextEl: '.banner-next',
      prevEl: '.banner-prev',
    },
  });

  new Swiper('.news-swiper', {
    direction: 'vertical', // 수직 슬라이드
    autoplay:{
      delay : 3000,
      disableOnInteraction: false
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    
  })

  $('.banner-pause').on('click', function () {
    swiper2.autoplay.stop();
    $(this).removeClass('active');
    $('.banner-play').addClass('active');

    return false;
  });

  $('.banner-play').on('click', function () {
    swiper2.autoplay.stop();
    $(this).removeClass('active');
    $('.banner-pause').addClass('active');

    return false;
  });





});



/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on('resize', function () {
  windowh = $(window).height();
  windowW = $(window).width();
});

/* ----- menu ----- */
function menu() {
  $('button.main-menu').on('click', function () {
    $('nav#main-menu').toggleClass('menu');
    $('nav#main-menu').toggleClass('allMenu');
    $('.main').addClass('on')
  });

  $('nav#main-menu button.close').on('click', function () {
    $('nav#main-menu').toggleClass('menu');
    $('nav#main-menu').toggleClass('allMenu');
    $('.main').removeClass('on')
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

  $('nav#main-menu div.menus h3 a').on('mouseenter', function () {
    $('nav#main-menu div.menus>ul>li').removeClass('on');
    $(this).parent().parent().addClass('on');
  });

  $('nav#main-menu div.menus>ul>li ul').on('mouseleave', function () {
    $(this).parent().removeClass('on');
  });
}

/* ----- cover image ----- */
function coverimage() {
  $('.gallery-list div.pics').each(function () {
    $(this).css('background', "url('" + $(this).find('img').attr('src') + "') no-repeat center / cover");
  });
}

/* ----- main tab ----- */
function maintab() {
  $('.main-info .tab-outline h3').on('click', function () {
    $('.main-info .tab-outline h3').removeClass('active');
    $(this).addClass('active');

    $('.main-info .tab-outline .tab-data').removeClass('active');
    $('.main-info .tab-outline .' + $(this).attr('data') + '').addClass('active');
  });
}
/* ----- outlink ----- */
function outlink() {
  $('.agency-open').click(function () {
    console.log('클릭');
    $(this).toggleClass('on');
  });
}

  // 인트로 메뉴
  function intromenu(){
    $(".main-intro .container ul li a").on('mouseover',function(){
      $(this).children('h3').addClass('on')
    })
    $(".main-intro .container ul li a").on('mouseleave',function(){
      $(this).children('h3').removeClass('on')
    })
  }

  // 서브메뉴 온 오프
  function submenu(){
    $('.menu-title').on('mouseover',function(){
      $('.menus').addClass('active')
      $('.menus-sub').addClass('active')
    })
    $('#main-menu').on('mouseleave',function(){
      $('.menus').removeClass('active')
      $('.menus-sub').removeClass('active')
    })
  }
  
  // mobile sub menu
  function mobileSubMenu() {
    $('.menus .menu-title').on('click',function(){
      $(this).parent().children('.menus-sub').toggleClass('on')
      $(this).children('span').toggleClass('on')
    })
    
  }

  // sub-weather
  function weathertab(){
    $(".weather-radio #radio01").on('click',function(){
      $('.sub-weather-tab01,.sub-weather-tab02').removeClass('on')
      $('.sub-weather-tab01').addClass('on')
    })
    $(".weather-radio #radio02").on('click',function(){
      $('.sub-weather-tab01,.sub-weather-tab02').removeClass('on')
      $('.sub-weather-tab02').addClass('on')
    })
  }

// graph tab
function grapgtab() {
  //기온
  $('.select-box2 .btn-box .graph-temp').on('click',function(){
    $('.select-box2 .btn-box button').removeClass('on')
    $('.select-box2 .btn-box .graph-temp').addClass('on')

    $('.graph-area .graph').removeClass('on')
    $('.graph-area .graph-tab01').addClass('on')
  })

//강수
  $('.select-box2 .btn-box .graph-water').on('click',function(){
    $('.select-box2 .btn-box button').removeClass('on')
    $('.select-box2 .btn-box .graph-water').addClass('on')

    $('.graph-area .graph').removeClass('on')
    $('.graph-area .graph-tab02').addClass('on')
  })

//일조
  $('.select-box2 .btn-box .graph-sunshine').on('click',function(){
    $('.select-box2 .btn-box button').removeClass('on')
    $('.select-box2 .btn-box .graph-sunshine').addClass('on')

    $('.graph-area .graph').removeClass('on')
    $('.graph-area .graph-tab03').addClass('on')
  })
}

// notice tab
function notivetab() {
  // tab01 
  $('.notice-group .notice-01').on('click',function(){
    $('.notice-tab02').removeClass('on')
    $('.notice-tab01').addClass('on')
  })
  // tab02
  $('.notice-group .notice-02').on('click',function(){
    $('.notice-tab01').removeClass('on')
    $('.notice-tab02').addClass('on')
  })
}

// past tab
function pasttab(){
  // tab01
  $('.observe-box .observe-01').on('click',function(){
    $('.place-tab02').removeClass('on')
    $('.place-tab01').addClass('on')
  })
  // tab02
  $('.observe-box .observe-02').on('click',function(){
    $('.place-tab01').removeClass('on')
    $('.place-tab02').addClass('on')
  })
}

// modalshow
function modalshow(){
  $('.request .modal-show').on('click',function(){
    $('.sub-notice .modal').addClass('show')
    $('.sub-notice .modal-backdrop').addClass('show')
    $('body').addClass('hidden')
  })
}

// modalclose
function modalclose(){
  $('.modal-btn .modal-close').on('click',function(){
    $('.sub-notice .modal').removeClass('show')
    $('.sub-notice .modal-backdrop').removeClass('show')
    $('body').removeClass('hidden')
  })
}