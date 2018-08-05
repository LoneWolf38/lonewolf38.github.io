$(document).ready(function () {
  $('a.blog-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed'))
    {
      $('.panel-cover').css('max-width', 'none')
      $('.panel-cover').css('width', '100%')
     $('.panel-cover').css('background-position', 'center')
     return
    }
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
     $('.panel-cover').css('max-width', 'none')
      $('.panel-cover').css('width', '100%')
     $('.panel-cover').css('background-position', 'center')
     $('.panel-cover').addClass('animated slideInLeft')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '//' && window.location.pathname !== '//index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
