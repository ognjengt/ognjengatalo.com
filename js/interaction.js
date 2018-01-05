$(document).ready(function(){
  $(".main").onepage_scroll({
    animationTime: 800
  });

  writeName();

  // $('.hero-btn').on('click', function() {
  //   $('.main').moveDown();
  // })

})


function writeName() {
  setTimeout(function(){
    $(function(){
    $(".typeName").typed({
      strings: ["Ognjen ^50 Gatalo"],
      typeSpeed: 50,
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
      typeSpeed: 10,
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
  showBrief().then(firstPop).then(secondPop).then(thirdPop).then(fourthPop).then(showButton).then(clearMenu);
  
}

function showBrief() {
  return new Promise(function(resolve, reject) {
    $('.brief').addClass('animated fadeInUp');
    resolve('done');
  })
  
}

function firstPop() {
  
  setTimeout(function(){
    $('.menu-icon').addClass('animated fadeInUp');
    $('.firstPop').addClass('animated fadeInUp');
  }, 300)
}

function secondPop() {
  setTimeout(function(){
    $('.secondPop').addClass('animated fadeInUp');
  }, 600)
}

function thirdPop() {
  setTimeout(function(){
    $('.thirdPop').addClass('animated fadeInUp');
  }, 800)
}

function fourthPop() {
  setTimeout(function(){
    $('.fourthPop').addClass('animated fadeInUp');
  }, 1000)
}

function showButton() {
  setTimeout(function(){
    $('.hero-btn').fadeIn(1000);
  }, 1300)
}

function clearMenu() {
  setTimeout(function(){
    $('.menu-icon').css('opacity','1');
    $('.menu-icon').removeClass('animated fadeInUp');
  }, 1500)
}