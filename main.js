var endDate = new Date("Aug 30, 2019").getTime ();
var x = setInterval (function(){
  var now = new Date ().getTime();
  var distance = endDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + minutes + " mins " + seconds + " seconds "

}, 1000);
