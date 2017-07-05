$(function() {
  initStickyNav();
  initPressSlider();
  bindAtreeNav();
  bindHamburger();

  AOS.init();
});

function initStickyNav() {
  var $nav = $('nav');

  var breakpoint = $nav.offset().top;
  var navHeight = $nav.innerHeight();

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop <= breakpoint) {
      $nav.removeClass('fixed top-0 left-0 right-0');
      $nav.next().css('margin-top', 0);
    } else {
      $nav.addClass('fixed top-0 left-0 right-0');
      $nav.next().css('margin-top', navHeight + 'px');
    }
  });
}

function initPressSlider() {
  var slides = $('#press-slider > div');

  slides.each(function() {
    $(this).css({ opacity: 0 });
  });

  $(slides[0]).css({ opacity: 1 });

  var i = 0;
  setInterval(function() {
    $(slides[i]).animate({ opacity: 0, 'margin-left': '-100%' }, 200);

    i++;
    if (i >= slides.length) {
      i = 0;
    }

    $(slides[i]).css({ opacity: 0, 'margin-left': '100%' });
    $(slides[i]).animate({ opacity: 1, 'margin-left': '0' }, 200);
  }, 5000);
}

function bindAtreeNav() {
  $('#specs-nav').click(function() {
    $('.specs-section').show();
    $('.what-section').hide();
  });

  $('#what-nav').click(function() {
    $('.what-section').show();
    $('.specs-section').hide();
  });
}

function bindHamburger() {
  $('#hamburger').click(function() {
    $('#menu').toggleClass('open');
  });
}
