$(function() {
  $header = $('#header');
  var headerHeight = $header.height();

  var updateHeaderTransparent = function($header) {
    if ($(window).scrollTop() > 50) {
      $header.removeClass('translucent-header');
    } else {
      $header.addClass('translucent-header');
    }
    var activeId = $(document.elementFromPoint(0, headerHeight + 1)).parents('section').attr('id');
    var $acriveMenu = $header.find("li [data-target='#" + activeId + "']");
    if ($acriveMenu.length != 0 && !$acriveMenu.hasClass('active')) {
      $header.find('li .active').removeClass('active')
      $acriveMenu.addClass('active');
    }
  }

  $(window).on('scroll', function(e) {
    updateHeaderTransparent($header);
  });

  $('.js-link').on('click', function(e) {
    var $link = $(e.currentTarget);
    var target = $link.data('target');
    $("html, body").animate({ scrollTop: $(target).offset().top - headerHeight }, 600);
  });

  updateHeaderTransparent($header);
});

