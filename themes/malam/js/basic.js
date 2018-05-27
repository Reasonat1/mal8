(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

        // hamburger menu


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

        $(".layout-center").unbind('click').bind('click', function (e) {
            $("body").removeClass("open-menu");
            $("body").addClass("close-menu");
        });

 

        // webform - in line form
        $(".contact-form input").on("focus",function(){
            $(this).parent().addClass("focus");
         });

        $(".contact-form input").each(function(){
            if($(this).val() == ''){
              $(this).parent().removeClass("focus");
            }
            else{
              $(this).parent().addClass("focus");
            }
        });

        $(".contact-form input").blur(function(){
            if($(this).val() == ''){
              $(this).parent().removeClass("focus");
            }
            else{
              $(this).parent().addClass("focus");
            }
        });



     }
  };

})(jQuery, Drupal);




document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementsByTagName("INPUT");
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                var message = Drupal.t('Please fill out this field');
                e.target.setCustomValidity(message);
                $(this).parent().addClass("ERROR");
            }
        if (e.target.validity.typeMismatch) {
          var message = Drupal.t('Please fill out a valid email');
          $(this).parent().addClass("ERROR");
        e.target.setCustomValidity(message);
        }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }

})