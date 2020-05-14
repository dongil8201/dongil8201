var mySwiper = new Swiper ('#banner .swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    infinite: true
  });

  var mySwiper2 = new Swiper ('.story .swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
  });