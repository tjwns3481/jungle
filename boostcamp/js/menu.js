$(document).ready(function () {
  $(".menuBar").prepend("<div class='menuList_bg'></div>");

  // $(window).resize(function () {
  //   var winWidth = $(window).width();

  //   if (winWidth >= 1024) {
  //     $('menuList_bg').css('display','none');
  //   };
  // });

  // $(window).resize(function (){
  //   var width_size = window.outerWidth;
  //   if (width_size >= 1024) {
  //     $('.menuList_bg').hide();
  //   }
  //   else {
  //     $('.menuList_bg').show();
  //   }
  // });

  $(window).resize(function () {
    var width_size = $(window).width();
    if (width_size >= 1024) {
      $(".menuList_bg").hide();
      $(".menuList").css("display", "block");
    } else {
      $(".menuList_bg").show();
      
    }
  });
  $(".menu-trigger").on("click", function () {
    $(".menuList").slideDown();
    $(".menuList_bg").show();
    // $(".menuList").css("display", "block");
  });

  $(".menuList>div").on("click", function () {
    $(".menuList").slideUp();
    $(".menuList_bg").hide();
    // $(".menuList").css("display", "none");
  });

  $(".topBanner_closeIcon").on("click", function () {
    $(".topBanner").slideUp();
  });

  $(".blind1").on("click", function () {
    $(".topBanner").slideUp();
  });
  
  // window.onresize = function () {
  //   if ($(window).width() > 1024) {
  //     var headerHeight = 64;
  //   } else {
  //     headerHeight = 0;
  //   }
  // };
  
  $("#menu1").on("click", function () {
    $("html, body").animate({ scrollTop: $("#section1").offset().top }, "slow");
  });

  $("#menu2").on("click", function () {
    $("html, body").animate({ scrollTop: $("#section2").offset().top }, "slow");
    console.log("dddd");
  });

  $("#menu3").on("click", function () {
    $("html, body").animate({ scrollTop: $("#section3").offset().top }, "slow");
  });

  $("#menu4").on("click", function () {
    $("html, body").animate({ scrollTop: $("#section4").offset().top }, "slow");
  });

  $("#menu5").on("click", function () {
    $("html, body").animate({ scrollTop: $("#section5").offset().top }, "slow");
  });

  
  // var didScroll;
  // var lastSxcrollTop = 0;
  // var delta = 645;
  // var navbarHeight = $('header').outerHeight();

  // $(window).scroll(function(event){
  //   didScroll = true;
  // });
  // setInterval(function(){
  //   if(didScroll){
  //     hasScrolled();
  //     didScroll = false;
  //   }
  // }, 1350);
  // function hasScrolled(){
  //   var st = $(this).scrollTop();
  //   if (Math.abs(lastScrollTop-st) <= delta)
  //   return;
  //   if (st > lastScrollTop && st > navbarHeight){
  //     $('header').removeClass('nav-down').addClass('nav-up');
  //   } else {
  //     if (st + $(window).height() < $(document).height()) {
  //       $('header').removeClass('nav-up').addClass('nav-down');
  //     }
  //   }
  //   lastSctollTop = st;
  // }
  
  var scrollheight = $(window).scroll(function(){
    console.log($(window).scrollTop());
  });
  
});


// window.onload = function(){
//   document.createElement("h1");
//   document.getElementsByClassName("menuList").onclick = function(){
//     document.getElementsByClassName("menuList").style.display = "block";
//   }
// }
