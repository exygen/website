jQuery(function($) {

  $("a[href^=#]").on("click", function(event) {
    event.preventDefault();
    var $link = $(this);
    var $target = $($link.attr("href"));
    $("html,body").animate({
      scrollTop: $target.offset().top
    }, 660);
  });

  setTimeout(function() {
    $("body").removeClass("is-loading").addClass("is-loaded");
    $(".pre-loader").fadeOut();
    $window.trigger('scroll');
  }, 800);


  var $window = $(window);
  $window.on("scroll", function() {
    $("section").each(function(index, section) {
      var $section = $(section);
      var sectionTop = $section.offset().top;
      var sectionBottom = $section.offset().top + $section.height();
      if ($window.scrollTop() >= sectionTop && $window.scrollTop() < sectionBottom) {
        $section.addClass('current');
      } else {
        $section.removeClass('current').removeClass('animate');
      }
    });

    $("section:in-viewport(200)").do(function() {
      $(this).addClass('animate');
      console.log('trigger animation for ' + $(this).attr("id"));
      var $navItem = $("nav a[href=#" + $(this).attr("id") + "]");
      $('nav a').removeClass('current');
      $navItem.addClass('current');
    });
  });

});
