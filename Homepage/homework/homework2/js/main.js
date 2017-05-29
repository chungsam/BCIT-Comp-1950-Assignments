/*
COMP1950
Instructor: Jeffrey Park
DTC Thur 6-9PM

Created by:
Sam Chung
*/

// Below code initially forked from here: https://codepen.io/k33k00/pen/ByeyVB
// Code was modified to use new HTML5 progress attribute

$(document).ready(function(){
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(), docheight = $('main').height(), winheight = $(window).height();
    var totalScroll = (wintop/(docheight-winheight))*100;
    $("progress").attr("value", totalScroll);
  });

});