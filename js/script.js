/**
 * Created by pablues on 26.07.2017.
 */



 var myData = ["A", "B", "C", "D", "E", "F", "G"];
 var my2ndData = ["A"];

 function addDivs(){
 var u = d3.select("#content")
 .selectAll("div")
 .data(myData);

 u.enter()
 .append("div")
 .merge(u)
 .text(function (d) {
 return d;
 });
 u.exit().remove();

 }

 function removeDivs() {
 d3.select("#content")
 .selectAll("div")
 .data(my2ndData)
 .exit()
 .remove();

 }

 var cont = [];

document.querySelector('#content').onclick = function () {
  var c = prompt("Gebe ein");
  console.log(c);
  cont.push(c);
  console.log(cont);
};



(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();