(function($) {
  "use strict"; // Start of use strict

  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });

    $(document).scroll(function () {
      var $nav = $(".navigation");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $("#sidebar-wrapper").removeClass("active");
    });

    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
      if ($(this).scrollTop() > 250) {
        if (!fixed) {
          fixed = true;
          $('#to-top').show("slow", function() {
            $('#to-top').css({
              position: 'fixed',
              display: 'block'
            });
          });
        }
      } else {
        if (fixed) {
          fixed = false;
          $('#to-top').hide("slow", function() {
            $('#to-top').css({
              display: 'none'
            });
          });
        }
      }
    });
  }); // end DOM ready
})(jQuery); // End of use strict
