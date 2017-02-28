$(document).ready(function ($) {
    
    $('.location-selector button#dropdown').click(function(e) {
      $('.locations-dropdown').slideToggle(200, function() {});
  	});
    
    //hamburger
    
    $(function(){
      var speed   = 300,
          button  = $('#menu-button'),
          overlay = $('#overlay'),
          menu    = $('#hamburger-menu');
    
      button.on('click',function(e){
        if(overlay.hasClass('open')) {
          animate_menu('close');
        } else {
          animate_menu('open');
        }
      });
    
      overlay.on('click', function(e){
        if(overlay.hasClass('open')) {
          animate_menu('close');
        }
      });
    
      $('a[href="#"]').on('click', function(e){
        e.preventDefault();
      });
    
      function animate_menu(menu_toggle) {
        if(menu_toggle == 'open') {
          overlay.addClass('open');
          button.addClass('on');
          menu.addClass('open');
          overlay.animate({opacity: 1}, speed);
          menu.animate({width: "100%"}, speed);
        }
    
        if(menu_toggle == 'close') {
          button.removeClass('on');
          overlay.animate({opacity: 0}, speed);
          overlay.removeClass('open');
          menu.removeClass('open');
          menu.animate({width: "0"}, speed);
        }
      }
    });

});