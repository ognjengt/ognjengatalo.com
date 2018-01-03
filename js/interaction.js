$(document).ready(function(){
  $(".main").onepage_scroll({
    animationTime: 800
  });

  writeName();

  $('.hero-btn').on('click', function() {
    $('.main').moveDown();
  })

})


function writeName() {
  setTimeout(function(){
    $(function(){
    $(".typeName").typed({
      strings: ["Ognjen ^100 Gatalo"],
      typeSpeed: 60,
      showCursor: true,
      cursorChar: "|",
      callback: writeTitle
      });
    });
  },500)
}

function writeTitle() {
  setTimeout(function(){
    $(function(){
    $(".typeTitle").typed({
      strings: ["Software Engineer / Web Developer"],
      typeSpeed: 12,
      showCursor: true,
      cursorChar: "|",
      callback: removeCursor
      });
    });
  },100)
}

function removeCursor() {
  setTimeout(function() {
    $('.typed-cursor').css({
      "animation":"none"
    }).fadeOut();

  },100);
  $('.brief').fadeIn();
}