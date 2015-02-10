 var documentHeight = 0;
  var topPadding = 15;
  $(function() {
      var offset = $("#cssmenu").offset();
      documentHeight = $(document).height();
      $(window).scroll(function() {
          var sideBarHeight = $("#cssmenu").height();
          if ($(window).scrollTop() > offset.top) {
              var newPosition = ($(window).scrollTop() - offset.top) + topPadding;
              $("#cssmenu").stop().animate({
                  marginTop: newPosition - 15
              });
          } else {
              $("#cssmenu").stop().animate({
                  marginTop: 0
              });
          };
      });
  });

$( "#menulabel" ).click(function() {
  $("#cssmenu").toggleClass( "show" );
  $("#menulabel").toggleClass( "active" );
});
/*$( "#cssmenu" ).mouseout(function() {
  $("#cssmenu").toggleClass( "show" );
});*/