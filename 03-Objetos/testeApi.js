//Conumismo de API com Node.js
const url = "https://economia.awesomeapi.com.br/last/USD-BRL"

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
  }
  var json_obj = JSON.parse(Get(url));
  console.log("this is the author name: "+json_obj.title);