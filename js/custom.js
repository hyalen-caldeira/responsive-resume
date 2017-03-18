/*
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
*/

// Somth page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60}, 750);
        return false;
      }
    }
  });
});

// for banner height js
var windowWidth = $(window).width();
var windowHeight = $(window).height();
$('#animazione').css({'width':windowWidth ,'height':windowHeight -"260" });
// $('#animazione').css({'width':windowWidth ,'margin-top':"35%" });

jQuery(function($) {
  $(document).ready( function() {
    $('.navbar-wrapper').stickUp({
      parts: {
        0: 'page-top',
        1: 'aboutme',
        2: 'technical',
        3: 'experience',
        4: 'education',
        5: 'portfolio',
        6: 'contact'
      },
      itemClass: 'menuItem',
      itemHover: 'active',
      topMargin: 'auto'
    });
  });

  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    $( ".navbar-collapse" ).addClass( "hideClass" );
  });


  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    $( ".navbar-collapse" ).addClass( "collapse" );
  });

  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    $( ".navbar-collapse" ).removeClass( "in" );
  });

  $( ".navbar-toggle" ).click(function() {
    $( ".navbar-collapse" ).removeClass( "hideClass" );
  });

});