const disable = () => {
    document.getElementById("newBid").disabled=true;
  }
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
  let i=0
  var intervalId;
  let x

  document.getElementById("startTimer").addEventListener("click", function() {
      let rel = document.getElementById("newBid");
      rel.style.display = "inline-block";
      document.getElementById("startTimer").disabled=true;
  //   var inputValue = document.getElementById("inputBid").value;
  //   if (inputValue) {
      // var re = document.getElementById("newBid");
      // re.style.display = "inline";  
      // var r = document.getElementById("startTimer");
      // r.disabled = isDisabled
  
      clearInterval(intervalId);
  //     var duration = 300;
      var display = document.querySelector('#timer');
      startTimer(300, display);
      autobid();
  //   }
  });
  document.getElementById("newBid").addEventListener("click", function() {
  var number = parseInt(document.getElementById("inputBid").value);
  console.log(number,2);


  bid(number)
  });
  const bid = (number,name) => {
        res = document.getElementById("result")
        if(res.style.display=="none"){
            console.log("letss gooo")
            i=i+1
            if(number < n) {
                console.log("updated")
                n = number;
                if(name==1){
                    document.getElementById("name").innerHTML = "Computer"
                }
                else
                {
                    document.getElementById("name").innerHTML = "Username"   
                }
            }
            if(i==1){
                console.log("First")
                var lo = document.getElementById("lowe");
                lo.textContent = "Rs"+n;
                lo.style.display = "block"
            }
            else{
                console.log("already started")
                console.log(n)
                var lo = document.getElementById("lowe");
                lo.textContent = "Rs"+n;
            }
        }
  }

  const autobid = () =>{
    console.log("Inside function")
  x = document.getElementById("result")
  if(x.style.display=="none")
  {
    console.log("inside if")
//     for(z=10000;z>=1000){
//         setTimeout(()=>{
//         z=z-499;
//         bid(z);},10000);
//      }
// }}
var z = 10000;                  //  set your counter to 1
myLoop(z)
}}
function myLoop(z) {         //  create a loop function
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        bid(z,1)  //  your code here
      i++;                    //  increment the counter
      if (i < 10) { 
        z=z-500          //  if the counter < 10, call the loop function
        myLoop(z);             //  ..  again which will trigger another 
      }                       //  ..  setTimeout()
    }, 10000)
  }
