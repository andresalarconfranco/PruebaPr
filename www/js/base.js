$(document).ready(function () {
  changeLang('en');
});

//Inicialize DataTransfer Widget
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

//Close DataTransfer widget
function closeLoadDataTransfer(idElement){
  $("#" + idElement).children().remove();
  $("#DataTransfer").removeAttr("onclick");
  $("#DataTransfer").attr("onclick", "loadDataTransfer('W1');");
}

//Change the app language
function changeLang(idLang) {
  $(".opLanSel").removeClass("opLanSel").addClass("opLan");
  $("#" + idLang).removeClass("opLan").addClass("opLanSel");
  languageLoad(idLang);
}

//Load Language
function languageLoad(idLang) {
  var url = "";
  var diccionary = "";
  if (idLang === 'en'){
    url = "http://www.json-generator.com/api/json/get/bQDbnGJYuq?indent=2";
  } else {
    url = "http://www.json-generator.com/api/json/get/bNXgipNMoi?indent=2";
  }

  $.getJSON(url, function(datos) {
      if (idLang === 'en'){
        diccionary = datos.en;
      } else {
        diccionary = datos.es;
      }
      $.i18n.load(diccionary);
      setValues();
    });
}

//Set labels values
function setValues(){
  $('#Photo').text($.i18n._('photo'));
  $('#Audio').text($.i18n._('audio'));
  $('#Video').text($.i18n._('video'));
  $('#editUser a').text($.i18n._('editUser'));
  $('#webStats a').text($.i18n._('webStats'));
  $('#uploadSett a').text($.i18n._('uploadSett'));
  $('#events a').text($.i18n._('events'));
}

//Inicialize DataProfile Widget
function loadDataProfile(idElement) {
  var url = "http://www.json-generator.com/api/json/get/cfrSIoZfUy?indent=2";
  $.getJSON(url, function(datos) {
      var prf = datos.person;

      $( '#' + idElement ).profile({
        prf
      });
    });

    $("#DataProfile").removeAttr("onclick");
    $("#DataProfile").attr("onclick", "closeLoadDataProfile('W2');");
}

//Close DataProfile widget
function closeLoadDataProfile(idElement){
  $("#" + idElement).children().remove();
  $("#DataProfile").removeAttr("onclick");
  $("#DataProfile").attr("onclick", "loadDataProfile('W2');");
}

//Inicialize DataProfile1 Widget
function loadDataProfile1(idElement) {
  var url = "http://www.json-generator.com/api/json/get/cqnmIwRvma?indent=2";
  $.getJSON(url, function(datos) {
      var prf = datos.person;

      $( '#' + idElement ).profile1({
        prf
      });
    });

    $("#DataProfile1").removeAttr("onclick");
    $("#DataProfile1").attr("onclick", "closeLoadDataProfile1('W3');");
}

//Close DataProfile widget
function closeLoadDataProfile1(idElement){
  $("#" + idElement).children().remove();
  $("#DataProfile1").removeAttr("onclick");
  $("#DataProfile1").attr("onclick", "loadDataProfile1('W3');");
}
