//button up

(function () {
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 30);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

//smooth scroll for anchors

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

//btn overlay content 

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

//site loading

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('myPreloader');
    if (!preloader.classList.contains('cansel')) {
      preloader.classList.add('cansel');
    }
  }, 499)
};


//wow.js initialization

new WOW().init();

// mapbox

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxleC1qZXN1cyIsImEiOiJja3UyenZwOGQxMDE3MnhvMWtxcWU0MmlqIn0.IqIyQcpkLuN7gk0HjxCTAQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-100, 40],
  zoom: 0,
});

map.addControl(new mapboxgl.NavigationControl());

const marker1 = new mapboxgl.Marker({
  color: '#FF0000',
  draggable: true,
})
  .setLngLat([-100, 40])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      '<h1>USA</h1><p>Number of infected: 48 999 737</p><p>Number of cured: 38 799 986</p><p>Number of deaths: 798 551</p>'
    )
  )
  .addTo(map);

const marker2 = new mapboxgl.Marker({
  color: '#FF0000',
  draggable: true,
})
  .setLngLat([12.535400390625, 42.601619944327965])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      '<h1>Italy</h1><p>Number of infected: 4 968 341</p><p>Number of cured: 4 668 257</p><p>Number of deaths: 133 486</p>'
    )
  )
  .addTo(map);

const marker3 = new mapboxgl.Marker({
  color: '#FF0000',
  draggable: true,
})
  .setLngLat([101.75537109375, 35.42486791930558])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      '<h1>China</h1><p>Number of infected: 127 631</p><p>Number of cured: 119 004</p><p>Number of deaths: 5 697</p>'
    )
  )
  .addTo(map);

const marker4 = new mapboxgl.Marker({
  color: '#FF0000',
  draggable: true,
})
  .setLngLat([-3.955078125, 40.94671366508002])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      '<h1>Spain</h1><p>Number of infected: 5 121 100</p><p>Number of cured: 4 912 818</p><p>Number of deaths: 87 931</p>'
    )
  )
  .addTo(map);

const marker5 = new mapboxgl.Marker({
  color: '#FF0000',
  draggable: true,
})
  .setLngLat([10.0634765625, 51.17934297928927])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      '<h1>Germany</h1><p>Number of infected: 5 623 047</p><p>Number of cured: 4 775 300</p><p>Number of deaths: 100 796</p>'
    )
  )
  .addTo(map);

const marker6 = new mapboxgl.Marker({
  color: '#ff0000',
  draggable: true,
})
  .setLngLat([54.404296875, 32.76880048488168])
  .setPopup(
    new mapboxgl.Popup().setHTML(
      '<h1>Iran</h1><p>Number of infected: 6 097 672</p><p>Number of cured: 5 830 653</p><p>Number of deaths: 129 376</p>'
    )
  )
  .addTo(map);

//lazyload images

(async () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img.lazyload');
    images.forEach((img) => {
      img.src = img.dataset.src;
    });
  } else {
    const lazySizesLib = await import('..//js/lazysizes.min.js');
    lazySizes.init();
  }
})();

//counter

let blockTop = $('.subscribe-wrapper').offset().top, 
  wh = window.innerHeight;
  flagOne = true,
  flagTwo = true,
  flagThree = true,
  flagFour = true,
  flagFive = true,
  flagSix = true,

  //one counter
  counterOne = _ => {
    if(counterOne._countOne > 1000){
      counterOne._countOne = 0;
      flagOne = !flagOne;
      return;
    }
    $('.counter-number__one').text(counterOne._countOne++);
    setTimeout(counterOne, 5);
  };
  counterOne._countOne = 0;

 $(window).scroll((_) => {
   if (flagOne && blockTop < $(window).scrollTop() + wh) {
     flagOne = !flagOne;
     counterOne();
   }
 });

  //two counter
  counterTwo = (_) => {
    if (counterTwo._countTwo > 990) {
      counterTwo._countTwo = 0;
      flagTwo = !flagTwo;
      return;
    }
    $('.counter-number__two').text(counterTwo._countTwo++);
    setTimeout(counterTwo, 5);
  };
  counterTwo._countTwo = 0;

   $(window).scroll((_) => {
     if (flagTwo && blockTop < $(window).scrollTop() + wh) {
       flagTwo = !flagTwo;
       counterTwo();
     }
   });

   //three counter
     counterThree = (_) => {
       if (counterThree._countThree > 2000) {
         counterThree._countThree = 0;
         flagThree = !flagThree;
         return;
       }
       $('.counter-number__three').text(counterThree._countThree++);
       setTimeout(counterThree, 5);
     };
     counterThree._countThree = 0;

     $(window).scroll((_) => {
       if (flagThree && blockTop < $(window).scrollTop() + wh) {
         flagThree = !flagThree;
         counterThree();
       }
     });

      //four counter
     counterFour = (_) => {
       if (counterFour._countFour > 1200) {
         counterFour._countFour = 0;
         flagFour = !flagFour;
         return;
       }
       $('.counter-number__four').text(counterFour._countFour++);
       setTimeout(counterFour, 5);
     };
     counterFour._countFour = 0;

     $(window).scroll((_) => {
       if (flagFour && blockTop < $(window).scrollTop() + wh) {
         flagFour = !flagFour;
         counterFour();
       }
     });

      //five counter
     counterFive = (_) => {
       if (counterFive._countFive > 1500) {
         counterFive._countFive = 0;
         flagFive = !flagFive;
         return;
       }
       $('.counter-number__five').text(counterFive._countFive++);
       setTimeout(counterFive, 5);
     };
     counterFive._countFive = 0;

     $(window).scroll((_) => {
       if (flagFive && blockTop < $(window).scrollTop() + wh) {
         flagFive = !flagFive;
         counterFive();
       }
     });

      //six counter
     counterSix = (_) => {
       if (counterSix._countSix > 1350) {
         counterSix._countSix = 0;
         flagSix = !flagSix;
         return;
       }
       $('.counter-number__six').text(counterSix._countSix++);
       setTimeout(counterSix, 5);
     };
     counterSix._countSix = 0;

     $(window).scroll((_) => {
       if (flagSix && blockTop < $(window).scrollTop() + wh) {
         flagSix = !flagSix;
         counterSix();
       }
     });

//hamburger menu

$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $(this).toggleClass("active");
    $('.menu').slideToggle(300, function(){
      if($(this).css('display') === 'none'){
        $(this).removeAttr('style');
      }
    });
  });
});