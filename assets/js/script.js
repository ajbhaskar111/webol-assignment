document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    document.getElementById('menu-links').classList.toggle('mobile-menu');
  });

  // HEADER STICKY
  window.onscroll = function() {toggleStickyHeader()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function toggleStickyHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  // Slider script
  $(".responsive").slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
