/**
 * Created by pablues on 26.07.2017.
 */



 var myData = ["A", "B", "C", "D", "E", "F", "G"];
 var my2ndData = [];

 function printmyData() {
     console.log(myData);
 }
 function printmy2ndData() {
     console.log(my2ndData);
 }
 function push2ndArray() {
     var eingabe = prompt("Gebe den Wert ein");
     my2ndData.push(eingabe);
     printmy2ndData()
 }
 document.querySelector("span").onclick = function () {
    console.log("Hi ich bin deine Console")
 }

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

document.querySelector('#hinzu').onclick = function () {
  var c = prompt("Gebe ein");
  cont.push(c);
  console.log(cont);
  c = d3.select("#content").selectAll("div").data(cont);
    c.enter()
        .append("div")
        .merge(c)
        .text(function (d) {
            return d;
        })
        .transition()
        .duration(750)
        .style("opacity", 1)
        .duration(1200)
        .style("transform", "translateX(10px)")
        .style("background-color","coral")
        .style("color", "white")


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