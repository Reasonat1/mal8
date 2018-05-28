(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

    var max_mobile_screen = 768;
    var is_mobile = ($(window).width() <= max_mobile_screen);

        /*****  hamburger menu  ********/

        $("body").addClass("close-menu");
        
        $("#hamburger-icon").unbind('click').bind('click', function (e) {
          if ($("body").hasClass("open-menu")){
            $("body").removeClass("open-menu");
            $("body").addClass("close-menu");
          }
          else {
            $("body").addClass("open-menu");
            $("body").removeClass("close-menu");
          }
        });


/********  link active   ***********/

     var path = window.location.href; 
     $('a').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });
     

/********  scroll ********/

        var scroll_pos = 0;
        $(document).scroll(function(e) {
            scroll_pos = $(this).scrollTop();
            if(scroll_pos > 0) {
              $("body").addClass('scroll');
              $("body").removeClass('not-scroll');
            }
            else {
              $("body").removeClass('scroll');
              $("body").addClass('not-scroll');
            }
        });

        var screenTop = $(document).scrollTop();
        if (screenTop > 0){
              $("body").addClass('scroll');
        } else{
              $("body").addClass('not-scroll');
        }

/*****  form  ********/

        $("input").on("focus",function(){
            $(this).parent().addClass("focus");
         });

        $("input").each(function(){
            if($(this).val() == ''){
              $(this).parent().removeClass("focus");
            }
            else{
              $(this).parent().addClass("focus");
            }
        });

        $("input").blur(function(){
            if($(this).val() == ''){
              $(this).parent().removeClass("focus");
            }
            else{
              $(this).parent().addClass("focus");
            }
        });

        var form = $('form')
        var navbar = $('header')
        form.find(':input').on('invalid', function (event) {
            var input = $(this)
            var first = form.find(':invalid').first()
            if (input[0] === first[0]) {
                var navbarHeight = navbar.height() + 50
                var elementOffset = input.offset().top - navbarHeight
                var pageOffset = window.pageYOffset - navbarHeight
                if (elementOffset > pageOffset && elementOffset < pageOffset + window.innerHeight) {
                    return true
                }
                $('html,body').scrollTop(elementOffset)
            }
        });

/******  front *********/

if($('body').hasClass('path-frontpage')){

    if(!is_mobile){
        $('main article').css({'height': $(window).height()+'px'});
    }

    $(window).resize(function() {
      if(!is_mobile){
          $('main article').css({'height': $(window).height()+'px'});
      } else{
          $('main article').css({'height': "auto"});
      }
    });

    $('.scroll-button span').on('click',function (e) {
      $("html, body").animate({ scrollTop: $("#second").offset().top},1000);
    });

}




    }

  }

})(jQuery, Drupal);


/****  success story gallery - hp  *******/

jQuery(function(){  
  if (jQuery("#block-views-block-success-stories-block-1 .view-content .views-row").length != '1') { 
    jQuery('#block-views-block-success-stories-block-1 .view-content').owlCarousel({
      autoplay:false,
      loop:true,
      margin:21,
      nav: true,
      dots: false,
      items:3,
      responsive: {
          0: {
            items: 1
          },
          480: {
            items: 2
          },
          768: {
            items: 3
          }
        }
    }); 
  }
})