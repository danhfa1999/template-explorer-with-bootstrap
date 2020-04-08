(function ($) {
   'use strict'
   var footerFixed = function () {
      var footerHeight = $('#footer').outerHeigh();
      $('.footer-fixed #wrappper').css('pading-bottom', footerHeight);
      $('#footer').css('height', footerHeight);
   };
   $(function () {
      footerFixed();
   });
})();