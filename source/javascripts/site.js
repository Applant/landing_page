$(function() {
  var $nav = $('nav');
  var $pressSection = $('#press');

  var breakpoint = $nav.offset().top;
  var navHeight = $nav.innerHeight();

  $(window).scroll(function() {
    if ($(window).scrollTop() < breakpoint) {
      $nav.removeClass('fixed top-0 left-0 right-0');
      $pressSection.css('margin-top', 0);
    } else {
      $nav.addClass('fixed top-0 left-0 right-0');
      $pressSection.css('margin-top', navHeight + 'px');
    }
  });
});
