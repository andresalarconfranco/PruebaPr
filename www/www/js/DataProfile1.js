(function ( $ ) {
    //Inicialize a DataProfile Widget
    $.fn.profile1 = function( options ) {

        // Default options
        var settings = $.extend({
        }, options );

        // Apply options
        this.append('<div id="general" class="center">' +
                      '<div id="dataPr1" class="left">' +
                      '</div>' +
                      '<div id="dataDes1" class="left">' +
                      '</div>' +
                      '<div class="clear"></div>' +
                      '<div id="options">' +
                      '</div>' +
                    '</div>');

        $.each(options, function(i, e){
            $("#dataPr1").append(
              '<div id="miniImg">' +
                '<img src="' +
                e.miniImage +
                '" class="minimg">' +
              '</div>'
            );

            $("#dataDes1").append(
              '<h1 id="namePr1">' +
                e.name +
              '</h1>' +
              '<h4 id="descPr1">' +
                e.fallowers +
              '</h4>'
            );

            $("#options").append(
              '<ul>' +
                '<li id="editUser" class="block">' +
                '<a href="#editUser" class="left">Edit user</a>' +
                '<div class="fa fa-user-o right"></div>' +
                '<div class="clear"></div>' +
                '</li>' +
                '<li id="webStats" class="block">' +
                '<a href="#editUser" class="left">Web statistics</a>' +
                '<div class="fa fa-line-chart right"></div>' +
                '<div class="clear"></div>' +
                '</li>' +
                '<li id="uploadSett" class="block">' +
                '<a href="#editUser" class="left">Upload settings</a>' +
                '<div class="fa fa-sliders right"></div>' +
                '<div class="clear"></div>' +
                '</li>' +
                '<li id="events" class="block">' +
                '<a href="#editUser" class="left">Events</a>' +
                '<div class="fa fa-map-marker right"></div>' +
                '<div class="clear"></div>' +
                '</li>' +
              '</ul>'
            );
        });

        return this;
    };
}( jQuery ));
