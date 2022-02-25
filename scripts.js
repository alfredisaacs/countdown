const daysText = document.getElementById('days');
const hoursText = document.getElementById('hours');
const minutesText = document.getElementById('minutes');
const secondsText = document.getElementById('seconds');

// Set the date we're counting down to
var countDownDate = new Date("Feb 28, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
    daysText.innerText = days;
    hoursText.innerText = hours;
    minutesText.innerText = minutes;
    secondsText.innerText = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("expired").innerHTML = "EXPIRED";
  }
}, 1000);