$(window).scroll(function () {
    if ($(window).scrollTop() >= 160) {
       $(".sticky-header").addClass("on");
   	$('body').addClass('scrolled-top');
    } else {
       $(".sticky-header").removeClass("on");
         $('body').removeClass('scrolled-top');
    }
 });
  // $(document).ready(function () {
         // Add class on scroll
       //  $(window).scroll(function () {
         //   if ($(this).scrollTop() > 0) {
            
         //   } else {
              
         //   }
      //   });
    //  });