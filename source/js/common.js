$(function () {
  menu();
  coverimage();
  maintab();
  outlink();
  grapgtab();
  growtab();
  maincroptab();

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
  });

  $('nav#main-menu button.close').on('click', function () {
    $('nav#main-menu').toggleClass('menu');
    $('nav#main-menu').toggleClass('allMenu');
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

// main crop tab


function maincroptab() {
  
  //무
  $('.crop-box .crop-btn01').on('click', function () {
    // 작물 탭
    $('.crop-tab01').removeClass('active');
    $('.crop-tab02').removeClass('active');
    $('.crop-tab03').removeClass('active');
    $('.crop-tab04').removeClass('active');
    $('.crop-tab05').removeClass('active');
    $('.crop-tab06').removeClass('active');

    $('.crop-tab01').addClass('active');
    // 버튼 탭
    $('.crop-btn01').removeClass('on');
    $('.crop-btn02').removeClass('on');
    $('.crop-btn03').removeClass('on');
    $('.crop-btn04').removeClass('on');
    $('.crop-btn05').removeClass('on');
    $('.crop-btn06').removeClass('on');

    $('.crop-btn01').addClass('on');
  });

  //마늘
  $('.crop-box .crop-btn02').on('click', function () {
    // 작물 탭
    $('.crop-tab01').removeClass('active');
    $('.crop-tab02').removeClass('active');
    $('.crop-tab03').removeClass('active');
    $('.crop-tab04').removeClass('active');
    $('.crop-tab05').removeClass('active');
    $('.crop-tab06').removeClass('active');

    $('.crop-tab02').addClass('active');
    // 버튼 탭
    $('.crop-btn01').removeClass('on');
    $('.crop-btn02').removeClass('on');
    $('.crop-btn03').removeClass('on');
    $('.crop-btn04').removeClass('on');
    $('.crop-btn05').removeClass('on');
    $('.crop-btn06').removeClass('on');

    $('.crop-btn02').addClass('on');
  });

  //당근
  $('.crop-box .crop-btn03').on('click', function () {
    // 작물 탭
    $('.crop-tab01').removeClass('active');
    $('.crop-tab02').removeClass('active');
    $('.crop-tab03').removeClass('active');
    $('.crop-tab04').removeClass('active');
    $('.crop-tab05').removeClass('active');
    $('.crop-tab06').removeClass('active');

    $('.crop-tab03').addClass('active');
    // 버튼 탭
    $('.crop-btn01').removeClass('on');
    $('.crop-btn02').removeClass('on');
    $('.crop-btn03').removeClass('on');
    $('.crop-btn04').removeClass('on');
    $('.crop-btn05').removeClass('on');
    $('.crop-btn06').removeClass('on');

    $('.crop-btn03').addClass('on');
  });

  //양파
  $('.crop-box .crop-btn04').on('click', function () {
    // 작물 탭
    $('.crop-tab01').removeClass('active');
    $('.crop-tab02').removeClass('active');
    $('.crop-tab03').removeClass('active');
    $('.crop-tab04').removeClass('active');
    $('.crop-tab05').removeClass('active');
    $('.crop-tab06').removeClass('active');

    $('.crop-tab04').addClass('active');
    // 버튼 탭
    $('.crop-btn01').removeClass('on');
    $('.crop-btn02').removeClass('on');
    $('.crop-btn03').removeClass('on');
    $('.crop-btn04').removeClass('on');
    $('.crop-btn05').removeClass('on');
    $('.crop-btn06').removeClass('on');

    $('.crop-btn04').addClass('on');
  });

  //양배추
  $('.crop-box .crop-btn05').on('click', function () {
    // 작물 탭
    $('.crop-tab01').removeClass('active');
    $('.crop-tab02').removeClass('active');
    $('.crop-tab03').removeClass('active');
    $('.crop-tab04').removeClass('active');
    $('.crop-tab05').removeClass('active');
    $('.crop-tab06').removeClass('active');

    $('.crop-tab05').addClass('active');
    // 버튼 탭
    $('.crop-btn01').removeClass('on');
    $('.crop-btn02').removeClass('on');
    $('.crop-btn03').removeClass('on');
    $('.crop-btn04').removeClass('on');
    $('.crop-btn05').removeClass('on');
    $('.crop-btn06').removeClass('on');

    $('.crop-btn05').addClass('on');
  });

  //브로콜리
  $('.crop-box .crop-btn06').on('click', function () {
    // 작물 탭
    $('.crop-tab01').removeClass('active');
    $('.crop-tab02').removeClass('active');
    $('.crop-tab03').removeClass('active');
    $('.crop-tab04').removeClass('active');
    $('.crop-tab05').removeClass('active');
    $('.crop-tab06').removeClass('active');

    $('.crop-tab06').addClass('active');
    // 버튼 탭
    $('.crop-btn01').removeClass('on');
    $('.crop-btn02').removeClass('on');
    $('.crop-btn03').removeClass('on');
    $('.crop-btn04').removeClass('on');
    $('.crop-btn05').removeClass('on');
    $('.crop-btn06').removeClass('on');

    $('.crop-btn06').addClass('on');
  });
}

// graph tab
function grapgtab() {
  // 기온
  $('.select-box2 .btn-box .graph-temp').on('click', function () {
    // 그래프 탭
    $('.graph-tab01').removeClass('active');
    $('.graph-tab02').removeClass('active');
    $('.graph-tab03').removeClass('active');

    $('.graph-tab01').addClass('active');

    // 버튼 탭
    $('.graph-temp').removeClass('on');
    $('.graph-water').removeClass('on');
    $('.graph-sunshine').removeClass('on');

    $('.graph-temp').addClass('on');
  });

  //강수
  $('.select-box2 .btn-box .graph-water').on('click', function () {
    $('.graph-tab01').removeClass('active');
    $('.graph-tab02').removeClass('active');
    $('.graph-tab03').removeClass('active');

    $('.graph-tab02').addClass('active');

    // 버튼 탭
    $('.graph-temp').removeClass('on');
    $('.graph-water').removeClass('on');
    $('.graph-sunshine').removeClass('on');

    $('.graph-water').addClass('on');
  });

  //일조
  $('.select-box2 .btn-box .graph-sunshine').on('click', function () {
    $('.graph-tab01').removeClass('active');
    $('.graph-tab02').removeClass('active');
    $('.graph-tab03').removeClass('active');

    $('.graph-tab03').addClass('active');

    // 버튼 탭
    $('.graph-temp').removeClass('on');
    $('.graph-water').removeClass('on');
    $('.graph-sunshine').removeClass('on');

    $('.graph-sunshine').addClass('on');
  });
}

// grow tab
function growtab() {
  // 정식기
  $('.grow-area .grow-box .grow-btn01').on('click', function () {
    // 표 탭
    $('.grow-tab01').removeClass('active');
    $('.grow-tab02').removeClass('active');
    $('.grow-tab03').removeClass('active');
    $('.grow-tab04').removeClass('active');

    $('.grow-tab01').addClass('active');

    // 버튼 탭
    $('.grow-btn01').removeClass('on');
    $('.grow-btn02').removeClass('on');
    $('.grow-btn03').removeClass('on');
    $('.grow-btn04').removeClass('on');

    $('.grow-btn01').addClass('on');
  });

  // 영양생장기
  $('.grow-area .grow-box .grow-btn02').on('click', function () {
    // 표 탭
    $('.grow-tab01').removeClass('active');
    $('.grow-tab02').removeClass('active');
    $('.grow-tab03').removeClass('active');
    $('.grow-tab04').removeClass('active');

    $('.grow-tab02').addClass('active');

    // 버튼 탭
    $('.grow-btn01').removeClass('on');
    $('.grow-btn02').removeClass('on');
    $('.grow-btn03').removeClass('on');
    $('.grow-btn04').removeClass('on');

    $('.grow-btn02').addClass('on');
  });

  // 생식생장기
  $('.grow-area .grow-box .grow-btn03').on('click', function () {
    // 표 탭
    $('.grow-tab01').removeClass('active');
    $('.grow-tab02').removeClass('active');
    $('.grow-tab03').removeClass('active');
    $('.grow-tab04').removeClass('active');

    $('.grow-tab03').addClass('active');

    // 버튼 탭
    $('.grow-btn01').removeClass('on');
    $('.grow-btn02').removeClass('on');
    $('.grow-btn03').removeClass('on');
    $('.grow-btn04').removeClass('on');

    $('.grow-btn03').addClass('on');
  });

  // 수확기
  $('.grow-area .grow-box .grow-btn04').on('click', function () {
    // 표 탭
    $('.grow-tab01').removeClass('active');
    $('.grow-tab02').removeClass('active');
    $('.grow-tab03').removeClass('active');
    $('.grow-tab04').removeClass('active');

    $('.grow-tab04').addClass('active');

    // 버튼 탭
    $('.grow-btn01').removeClass('on');
    $('.grow-btn02').removeClass('on');
    $('.grow-btn03').removeClass('on');
    $('.grow-btn04').removeClass('on');

    $('.grow-btn04').addClass('on');
  });
}
