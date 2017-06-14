$(function() {
  AOS.init();

  var $nav = $('nav');

  var breakpoint = $nav.offset().top;
  var navHeight = $nav.innerHeight();

  $(window).scroll(function() {
    if ($(window).scrollTop() <= breakpoint) {
      $nav.removeClass('fixed top-0 left-0 right-0');
      $nav.next().css('margin-top', 0);
    } else {
      $nav.addClass('fixed top-0 left-0 right-0');
      $nav.next().css('margin-top', navHeight + 'px');
    }
  });

  $('#specs-nav').click(function() {
    $('.specs-section').show();
    $('.what-section').hide();
  });

  $('#what-nav').click(function() {
    $('.what-section').show();
    $('.specs-section').hide();
  });
});
