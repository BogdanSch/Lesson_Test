; (function ($) {
  "use strict";

  $(document).ready(function () {
    $('.testimonials__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 700,
      autoplay: false,
      autoplaySpeed: 2000,
      appendDots: '.testimonials__dots',
      // prevArrow: '.links-slider-prev',
      // nextArrow: '.links-slider-next',
    });
  });

  $(document).ready(function () {
    $('.news__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 700,
      autoplay: true,
      autoplaySpeed: 2000,
      appendDots: '.news__dots',
      vertical: true,
      // prevArrow: '.links-slider-prev',
      // nextArrow: '.links-slider-next',
    });
  });

  // tab - start
  $(document).ready(function () { // Ждём загрузки страницы
    $(".tabs__menu li").click(function () { // Событие нажатия на элемент меню вкладок
      if (!$(this).hasClass("active")) { // Проверка, не нажали ли мы на уже активный пункт
        let i = $(this).index(); // Получаем порядковый номер нажатого пункта, отстче идет от 0 (0,1,2)
        $(".tabs__menu li.active").removeClass("active"); // Удаляем активный класс у прошлого пункта меню
        $(".about--clinic .active").hide().removeClass("active"); // Скрываем и удаляем активный класс у прошлого контейнера с содержимым
        $(this).addClass("active"); // Добавляем нажатому пункту меню активный класс
        $($(".about--clinic").children(".about__tabs")[i]).fadeIn(1000).addClass("active"); // Показываем и добавляем активный класс соответствующему контейнеру
      }
    });
  });
  // tab - end
})(jQuery);