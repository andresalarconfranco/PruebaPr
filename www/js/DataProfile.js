(function ( $ ) {
    //Inicialize a DataProfile Widget
    $.fn.profile = function( options ) {

        // Default options
        var settings = $.extend({
        }, options );

        // Apply options
        this.append('<div id="general" class="center">' +
                      '<div id="bckPr" class="bckImg">' +
                      '</div>' +
                      '<div id="dataPr" class="left">' +
                      '</div>' +
                      '<div id="dataDes" class="left">' +
                      '</div>' +
                      '<div class="clear"></div>' +
                      '<div id="notifications">' +
                      '</div>' +
                    '</div>');

        $.each(options, function(i, e){
            $("#bckPr").append(
                '<img class="bckImg" src="' +
                e.backgroundImage +
                '" alt="Foto de portada de perfil">'
            );

            $("#dataPr").append(
              '<div id="miniImg">' +
                '<img src="' +
                e.miniImage +
                '" class="minimg">' +
              '</div>'
            );

            $("#dataDes").append(
              '<h1 id="namePr">' +
                e.name +
              '</h1>' +
              '<h4 id="descPr">' +
                e.description +
              '</h4>'
            );

            $("#notifications").append(
              '<div id="viewPr" class="left fa fa-eye noti">' +
              '<div class="data left">' +
                e.views +
              '</div>' +
              '</div>' +
              '<div id="commPr" class="left fa fa-comment noti">' +
              '<div class="data left">' +
                e.comments +
              '</div>' +
              '</div>' +
              '<div id="likesPr" class="left fa fa-heart noti">' +
              '<div class="data left">' +
                e.likes +
              '</div>' +
              '</div>' +
              '<div class="clear"></div>'
            );
        });

        return this;
    };
}( jQuery ));
