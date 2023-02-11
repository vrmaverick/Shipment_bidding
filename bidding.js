function displayResult(message) {
    document.getElementById("timer").style.display = "none";
    var result = document.getElementById("result");
    result.textContent = message;
    result.style.display = "block";
    //"Time us up!!!!!!!!!"
}
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
        displayResult("Time-is-up!!!")
    }
  }, 1000);
  }

var n=1000000
var i=0
var intervalId;
document.getElementById("startTimer").addEventListener("click", function() {
//   var inputValue = document.getElementById("inputBid").value;
//   if (inputValue) {
    // var re = document.getElementById("newBid");
    // re.style.display = "inline";  
    // var r = document.getElementById("startTimer");
    // r.disabled = isDisabled

    clearInterval(intervalId);
    var duration = 300;
    var display = document.querySelector('#timer');
    startTimer(300, display);
//   }
});
document.getElementById("newBid").addEventListener("click", function() {
var number = document.getElementById("inputBid").value;
console.log(number);
res = document.getElementById("result")
if(res.style.display=="none"){
    console.log("letss gooo")
    i=i+1
    if(number < n) {
        console.log("updated")
        n = number;
    }
    if(i==1){
        console.log("First")
        var lo = document.getElementById("lowe");
        lo.textContent = n;
        lo.style.display = "block"
    }
    else{
        console.log("already started")
        console.log(n)
        lo = document.getElementById("lowe");
        lo.textContent = n;
    }
}
});

