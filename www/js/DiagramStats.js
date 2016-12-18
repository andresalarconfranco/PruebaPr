(function ( $ ) {
    //Inicialize a DataTransfer Widget
    $.fn.stats = function( options ) {

        // Default options
        var settings = $.extend({
        }, options );

        // Apply options
        this.append('<div id="stats" class="center">' +
                      '<div id="values" class="center">' +
                      '</div>' +
                      '<div id="labels">' +
                      '</div>' +
                    '</div>');

        $.each(options, function(i, e){
          $.each(e, function(index, topic) {
            $("#labels").append(
              '<div id="lb_' +
              topic.name +
              '" class="left cuadrados center">' +
              '<hr id="hr_' +
              topic.name +
              '">' +
              '<h2 class="topics">' +
              topic.name +
              "</h2>" +
              '<h2 class="topics topicsVal">' +
              topic.value +
              "%</h2>" +
              '</div>'
            );
            $('#hr_' + topic.name).css('color', topic.color);
          });
        });

        return this;
    };

    //Inicialize a canvas component
    $.fn.setCanvas = function (options) {
      var colors = [];
      var points = [];
      var totalFiles = 0;
      var totalSpace = 0;
      $.each(options, function(i, e){
        $.each(e, function(index, topic) {
          totalFiles = totalFiles + topic.numFiles;
          totalSpace = totalSpace + topic.wFiles;
          colors.push(topic.color);
          var point = {
            label: topic.name,
            y: topic.value
          };
          points.push(point);
        });
      });

      CanvasJS.addColorSet("colores", colors);

    	var chart = new CanvasJS.Chart("values",
    	{
        colorSet: "colores",
        title:{
          text: "Data Transfer",
          fontColor: "grey"
        },
        subtitles:[
    		{
    			text: totalFiles + " Files",
          verticalAlign: "center",
          fontColor: "grey",
          fontSize: 8,
          fontFamily: "'Baloo Thambi', cursive",
          dockInsidePlotArea: true
    		},
        {
          text: totalSpace + " Gb",
          verticalAlign: "center",
          fontColor: "orange",
          fontSize: 8,
          fontFamily: "'Baloo Thambi', cursive"
        }
        ],
    		data: [
      		{
            fillOpacity: .5,
            radius: "80%",
            innerRadius: "55%",
      			type: "doughnut",
      			dataPoints: points
      		}
    		]
    	});
    	chart.render();
    }
}( jQuery ));
