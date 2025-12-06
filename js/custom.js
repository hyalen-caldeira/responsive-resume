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
        2: 'experience',
        3: 'technical',
        4: 'certificate',
        5: 'education',
        6: 'portfolio',
        7: 'contact'
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

// Pie Chart
// for skill chat jquary
$(document).ready(function(e) {
  //var windowBottom = $(window).height();
  var index=0;
  $(document).scroll(function(){
    var top = $('.technical').height()-$(window).scrollTop();
    console.log(top)
    // This make pie move when you hit this position on the page after scrolling
    if(top<-2500){
      if(index==0){

        setTimeout(function() {
          $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
        }, 500);

      }
      index++;
    }
  })
  //console.log(nagativeValue)
  });

  // chart loding
$(window).load(function() {
	var chart = window.chart = $('.chart').data('easyPieChart');
	$('.js_update').on('click', function() {
		chart.update(Math.random()*100);
	});
});