$(document).ready(function(){
  $('.slide-in-left').animate({'opacity':'1', 'left': '0'},800);
  $('.slide-in-right').animate({'opacity':'1', 'right': '0'},800);

  $(function() {
      $(window).scroll( function(){
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          $('.fade-in-block').each( function(i){
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();

              if( bottom_of_window > bottom_of_object ){
                  $(this).animate({'opacity':'1'},800);
              }
          });

          $('.fade-in-top').each( function(i){
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();

              if( bottom_of_window > bottom_of_object ){
                  $(this).animate({'opacity':'1', "top":'0'},800);
              }
          });

          $('.tele-pic04').each( function(i){
              var bottom_of_object = $(this).offset().top + $(this).outerHeight();

              if( bottom_of_window > bottom_of_object ){
                  $(this).animate({'opacity':'1', 'right': '0'},800);
              }
          });

          $('.slide-in-bottom').each( function(i){
              var bottom_of_object = $(this).offset().top;

              if( bottom_of_window > bottom_of_object ){
                  $(this).animate({'bottom':'-2%', 'opacity':'1'},800);
              }
          });

      });
  });
});
