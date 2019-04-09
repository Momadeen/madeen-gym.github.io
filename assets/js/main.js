$(document).ready(function(){
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 4000,
        },
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
          },
          loop: true,
          effect: 'fade',
      });

      
      var slider_info = $('.slider-info');
      $(slider_info).hide();

      $('div.swiper-slide').each( function(){
          if($(this).hasClass('swiper-slide-active')) {
            $(slider_info).delay(500).fadeIn(1000);
            $(this).find('.swiper-slide-next .slider-info').fadeOut();
          }
      });



      AOS.init({
        duration: 1400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
      });
});

$(document).ready(function(){

  'use strict';

  $( '.gallery' ).click( function( e ) {
    e.preventDefault();
    $.swipebox( [
      { href:'madeen-gym.github.io/assets/img/gallery-1.jpg', title:'My Caption' }, 
      { href:'madeen-gym.github.io/assets/img/gallery-2.jpg', title:'My Second Caption' },
      { href:'assets/img/gallery-3.jpg', title:'My Second Caption' },
      { href:'assets/img/gallery-4.jpg', title:'My Second Caption' },
      { href:'assets/img/gallery-5.jpg', title:'My Second Caption' },
      { href:'assets/img/gallery-6.jpg', title:'My Second Caption' },
      { href:'assets/img/gallery-7.jpg', title:'My Second Caption' },
      { href:'assets/img/gallery-8.jpg', title:'My Second Caption' }
    ], {
        useCSS : true, // false will force the use of jQuery for animations
        useSVG : true, // false to force the use of png for buttons
        initialIndexOnArray : 0, // which image index to init when a array is passed
        hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
        removeBarsOnMobile : true, // false will show top bar on mobile devices
        hideBarsDelay : 3000, // delay before hiding bars on desktop
        videoMaxWidth : 1140, // videos max width
        beforeOpen: function() {}, // called before opening
        afterOpen: null, // called after opening
        afterClose: function() {}, // called after closing
        loopAtEnd: false // true will return to the first image after the last image is reached );
    } );
  } );

  $(".comp-image").twentytwenty();



 
});

$(window).bind('scroll', function(){
    // fixed navbar with scroll
  var navHeight = $('#header .navbar').height();

  if($(window).scrollTop() > navHeight){
    $('#header .navbar').addClass('fixednav');
    $('#header .navbar-brand').addClass('new-brand');
    $('.collapse ul li a').css('color', '#2d2d2d');
  } else {
    $('#header .navbar').removeClass('fixednav').fadeIn(5000);
    $('#header .navbar-brand').removeClass('new-brand', 1000).fadeIn(5000);
    $('.collapse ul li a').css('color', '#d6d6d6');
  }

});

$(window).resize(function(){
  if($(window).width() = 600) {
    var navHeight = $('#header .navbar').height();

    if($(window).scrollTop() > navHeight){
      $("#header .navbar").fadeOut();
    }
  }
});

function playVideo() {

  var video = document.getElementById('youtube').src;
  video = video+'&autoplay=1';

  document.querySelector('.play-btn-2').addEventListener("click", function(){
    document.querySelector('.video-box #video-2').style.display = 'block';
    $('#video-2').fadeIn('slow');
  });
  document.querySelector('.play-btn-1').addEventListener("click", function(){
    document.querySelector('.video-box #video-1').style.display = 'block';
    $('#video-1').fadeIn('slow');
  });
  
};

function closeVideo(){
  document.querySelector('.video-box #video-1').style.display = 'none';
  document.querySelector('.video-box #video-2').style.display = 'none';

};

$(document).ready(function(){

//
  var checkbox;
  checkbox = document.getElementById("checkbox");
  
  $('input#checkbox').on('click', function(){
    if(checkbox.checked == true) {
      // change ui color
      $('h6.annualy').css('color', '#FFF');
      // change price text
      document.querySelector('span.price-1').innerHTML = "99";
      document.querySelector('span.price-2').innerHTML = "149";

      // change the time
        let time = document.querySelectorAll('.time-1');
          if(time[0].innerHTML === "MONTHLY") {
            time[0].innerHTML = "YEARLY"
          }
          if(time[1].innerHTML === "MONTHLY") {
            time[1].innerHTML = "YEARLY"
          }
      
      // change feature


    } else {
      $('h6.annualy').css('color', 'rgb(190, 190, 190)');
      document.querySelector('span.price-1').innerHTML = "12";
      document.querySelector('span.price-2').innerHTML = "19";

      let time = document.querySelectorAll('.time-1');
      if(time[0].innerHTML === "YEARLY") {
        time[0].innerHTML = "MONTHLY"
      }
      if(time[1].innerHTML === "YEARLY") {
        time[1].innerHTML = "MONTHLY"
      }

    }
  });

    // loading page
  $("#loading").delay(1000).fadeOut(1000);   
});


$(document).on('load', function(){

  
});