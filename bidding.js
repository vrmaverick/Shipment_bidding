var intervalId;
document.getElementById("startTimer").addEventListener("click", function() {
  var inputValue = document.getElementById("inputBid").value;
  if (inputValue) {
    clearInterval(intervalId);
    var duration = 300;
    var display = document.querySelector('#timer');
    startTimer(300, display);
  }
});

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  intervalId = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}