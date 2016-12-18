//Inicialize DataTransfer Widget Load
function loadDataTransfer(idElement) {
  var url = "http://www.json-generator.com/api/json/get/ceYrcBXoMO?indent=2";
  $.getJSON(url, function(datos) {
      var lista = datos.topics.topic;

      $( '#' + idElement ).stats({
        lista
      });

      $( '#' + idElement ).setCanvas({
        lista
      });
    });
  $("#DataTransfer").removeAttr("onclick");
  $("#DataTransfer").attr("onclick", "closeLoadDataTransfer('W1');");
}

//Close a widget
function closeLoadDataTransfer(idElement){
  $("#" + idElement).children().remove();
  $("#DataTransfer").removeAttr("onclick");
  $("#DataTransfer").attr("onclick", "loadDataTransfer('W1');");
}
