$(document).ready(function () {
  $(".skills-area .counter").counterUp({
    delay: 10,
    time: 2000
  });
  
  $('.circlechart').circlechart(); // Initialization

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      nav: true,
      dots: false,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      autoWidth: true,
    });

    $('.bars').click(function() {
      $('.main-menu').slideToggle();
    });

});