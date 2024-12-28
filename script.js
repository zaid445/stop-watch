window.onload = function(){
    let seconds = 0;
    let tens = 0;
    let min=0;
    let Outputmin = document.getElementById("min");
    let OutputSeconds = document.getElementById("seconds");
    let OutputTens = document.getElementById("tens");
    let buttonStart = document.getElementById("btn-start");
    let buttonStop = document.getElementById("btn-stop");
    let buttonReset = document.getElementById("btn-reset");
    let Interval;

    function startTimer(){
        tens++;
        if(tens <= 9){
            OutputTens.innerHTML = "0" + tens;
        } 

        if(tens > 9){
            OutputTens.innerHTML =  tens;
        } 


        if(tens > 99){
            seconds++;
            if(seconds <= 9){
                OutputSeconds.innerHTML = "0" +  seconds;
            } 
            if(seconds > 9){
            OutputSeconds.innerHTML= seconds;
            }
            tens = 0;
            OutputTens.innerHTML = "00";
        }

        


        if(seconds > 59){
            min++;
            if(min <= 9){
                Outputmin.innerHTML = "0" +  min;
            } 
            if(min > 9){
            Outputmin.innerHTML= min;
            }
           tens=0;
           seconds=0;
           OutputTens.innerHTML = "00";
           Outputseconds.innerHTML = "00";

        }
    }




    buttonStart.addEventListener('click', () => {
        clearTimeout(Interval);
        Interval = setInterval(startTimer, 10);
    });


    buttonStop.addEventListener('click', () => {
        clearTimeout(Interval);
    });


    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        min=0;
        OutputSeconds.innerHTML = "00";
        Outputmin.innerHTML = "00";
        OutputTens.innerHTML = "00";
    });
   
}





