(function ( $ ) {
    //Inicialize a DataProfile Widget
    $.fn.account = function( options ) {

      // Default options
      var settings = $.extend({
      }, options );

      // Apply options
      this.append('<div id="acGeneral" class="center">' +
                    '<div id="acCheckin" class="left block cell">' +
                      '<div class="fa fa-map-marker upperCase"> chekc in'+
                      '</div>' +
                    '</div>' +
                    '<div id="acEvents" class="left block cell">' +
                      '<div class="fa fa-heart upperCase"> events'+
                      '</div>' +
                    '</div>' +
                    '<div id="acAccount" class="left block cell">' +
                      '<div class="fa fa-user upperCase"> account'+
                      '</div>' +
                    '</div>' +
                    '<div id="acSettings" class="left block cell">' +
                      '<div class="fa fa-cogs upperCase"> settings'+
                      '</div>' +
                    '</div>' +
                    '<div class="clear"></div>' +
                  '</div>');

        return this;
    };
}( jQuery ));
