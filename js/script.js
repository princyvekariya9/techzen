$(document).ready(function(){
  // project_slider 
  $('#project_slider').owlCarousel({
    items:3,
    margin:30,
    loop:true,
    nav:false,
    dots:true,
})
  // testimonial 
  $('#testimonial').owlCarousel({
    items:1,
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    smartspeed:5000,
})

  // testimonial 
  $('#slider').owlCarousel({
    items:3,
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    smartspeed:5000,
})

$('.nav_img a').click(function(){
  $('.nav_img a').removeClass('active');
  $(this).addClass('active');
})

    AOS.init();
  });

    // scrolling
        
    $(window).scroll(function(){
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 100) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
    

   // loader start
   $(document).ready(function(){
    setTimeout(function(){
        $('.preloader').fadeOut();
    },2000);
})
//loader end

// accodion
$(function() {
  // (Optional) Active an item if it has the class "is-active"	
  $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();
  
  $(".accordion > .accordion-item").click(function() {
      // Cancel the siblings
      $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
      // Toggle the item
      $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
  });
});


//Scroll back to top
(function($) { "use strict";

$(document).ready(function(){"use strict";
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })
    });
})(jQuery);

// counter start
$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 2000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
});

// counter end

// accordian start services detail
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});
// accordian end services detail