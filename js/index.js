// $(document).ready(function() {
//   // 화면이 준비되면 헤더가 로딩되도록 한다.
//   $("header").load("header.html");
// })

const hambuger = document.querySelector(".hambuger");
const btnTop = document.querySelector(".btn-top");

$(document).ready(function() {
  // drawer menu click: target
  $(".dmenu:first-child").click(function() {
      $("body, html").stop().animate({
          scrollTop: 0
      }, 1000);
    $(".bg-wrap").fadeOut(500);
    $(".drawer").toggleClass("drawer-on");
    hambugerAni();
  });
  $(".dmenu:nth-child(2)").click(function() {
        $("body, html").stop().animate({
            scrollTop: 700
        }, 1000);
    $(".bg-wrap").fadeOut(500);
    $(".drawer").toggleClass("drawer-on");
    hambugerAni();
  });
  $(".dmenu:nth-child(3)").click(function() {
        $("body, html").stop().animate({
            scrollTop: 1100
        }, 1000);
    $(".bg-wrap").fadeOut(500);
    $(".drawer").toggleClass("drawer-on");
    hambugerAni();
  });
  $(".dmenu:nth-child(4)").click(function() {
        $("body, html").stop().animate({
            scrollTop: 3000
        }, 1000);
    $(".bg-wrap").fadeOut(500);
    $(".drawer").toggleClass("drawer-on");
    hambugerAni();
  });
});

function btnTopClick() {
  $("body, html").stop().animate({
    scrollTop: 0	
  }, 1000);
}

function hambugerAni(){
  $(".hambuger .bar").eq(0).toggleClass("slash");
  $(".hambuger .bar").eq(1).toggleClass("hidden");
  $(".hambuger .bar").eq(2).toggleClass("backslash");
}

function huambugerClick() {
  if ($(".hambuger .bar").eq(0).hasClass("slash")) {
    $(".bg-wrap").fadeOut(500);
  } else {
    $(".bg-wrap").fadeIn(500);
  }
  $(".drawer").toggleClass("drawer-on");
  hambugerAni();
}

function init() {
  // 햄버거 메뉴 클릭 이벤트
  hambuger.addEventListener("click", huambugerClick);
  // btn Top 클릭 이벤트
  btnTop.addEventListener("click", btnTopClick);
}

init()
