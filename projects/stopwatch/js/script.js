let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false; // Denotes timer is running or not

// Function to start clock
function start(){
    timer = true; // Set timer true
    stopwatch(); // Call stopwatch function
}
// Function to stop clock
function stop(){
    timer = false; // Set timer false
    stopwatch(); // Call stopwatch function
}
// Function to reset clock
function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
}

// Stopwatch function
function stopwatch(){
    if(timer == true){
        count = count + 1;

        if(count == 100){ // If count/millisecond is equal to 100 increase second by 1
            sec = sec + 1;
            count = 0;
        }

        if(sec == 60){ // If sec is equal to 60 increase min by 1
            min = min + 1;
            sec = 0;
            count = 0;
        }

        if(min==60){ // If min is equal to 60 increase hr by 1
            hr = hr + 1;
            min = 0; 
            sec = 0;
            count = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;
        
        if(hr < 10){
            hrString = "0" + hrString;
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(sec < 10){
            secString = "0" + secString;
        }
        if(count < 10){
            countString = "0" + countString;
        }


        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout("stopwatch()", 10);
    }
}