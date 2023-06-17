
AOS.init();
new WOW().init();
$(document).ready(function($){
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
$("#countdown").countdown360({
  radius      : 60.5,
  seconds     : 20,
  strokeWidth : 20,
  fillStyle   : '#0276FD',
  strokeStyle : '#003F87',
  fontSize    : 50,
  fontColor   : '#FFFFFF',
  autostart: false,
  onComplete  : function () { console.log('completed') }
}).start()

$("#stop").on("click", function () {
  $("#countdown").countdown360({
    radius      : 60.5,
    seconds     : 20,
    strokeWidth : 20,
    fillStyle   : '#0276FD',
    strokeStyle : '#003F87',
    fontSize    : 50,
    fontColor   : '#FFFFFF',
    autostart: false,
    onComplete  : function () {}
  }).stop()
})
})
$(document).ready(function(){
$('.number-normal .data').rollNumber({
  number: 123456, 
  fontStyle: {    
    'font-size': 100, 
    color: '#FF0000',    
   
  }
})
$diy = $('.number-diy .data');
$diy.rollNumber({
  number: $diy[0].dataset.number, 
  speed: 500, 
  interval: 200,
  rooms: 9,
  space: 110,
  symbol: ',', 
  fontStyle: {
    'font-size': 102,
    'font-family': 'LetsgoDigital',
  }
})
$('.svg-test').svgTimer();
});

$(document).ready(function(){
  // $('.slick_slider').slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 3
  // });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }

      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      },

      
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  
});
  $(document).ready(function() {
    var mixer = mixitup("#mixing", {
       animation: {
          duration: 300
      }
      });
    })
    
    $(document).ready(function() {
      $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 10000, // How many particles will be generated: one particle every n pixels
        dotColor: '#666666',
        lineColor: '#666666',
        particleRadius: 7, // Dot size
        lineWidth: 1,
        curvedLines: false,
        proximity: 100, // How close two dots need to be before they join
        parallax: true,
        parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
        onInit: function() {},
        onDestroy: function() {}
      });
      $("#num1").countMe(40,65);
      });


