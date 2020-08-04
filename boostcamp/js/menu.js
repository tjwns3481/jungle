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
});

// window.onload = function(){
//   document.createElement("h1");
//   document.getElementsByClassName("menuList").onclick = function(){
//     document.getElementsByClassName("menuList").style.display = "block";
//   }
// }
