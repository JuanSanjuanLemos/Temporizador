//corrigir bug de pegar o tempo do primeiro setInterval
const buttonInite = document.getElementById("inite");
const buttonPause = document.getElementById("pause")
let divTime = document.querySelector(".main-time");

buttonInite.addEventListener("click",function(){
    let hour = getHour();
    let minute = getMinute();
    let second = getSecond();
    mySetInterval(hour,minute,second);
    buttonPause.style.display = "block"

});

function writeTime(hour,minute,second){  
    let timeString = addZero(hour,minute,second);
    return divTime.innerText = `${timeString[0]}:${timeString[1]}:${timeString[2]}`;
}

function mySetInterval(hour,minute,second){
    let mySetInterval;
    writeTime(hour,minute,second);
    mySetInterval = 
            setInterval(() => {
            second --;
            if(second<0){
                minute--;
                second=59;
            }
            if(minute<0){
                hour--;
                minute=59;
            }
            if(second === 0 && minute===0 && hour === 0){
                clearInterval(mySetInterval);
                
            }

            let timeString = addZero(hour,minute,second);
            return divTime.innerText = `${timeString[0]}:${timeString[1]}:${timeString[2]}`;         
        }, 1000);

    buttonPause.addEventListener("click",function(){ 
        buttonPause.classList.toggle("resume"); 
        if(buttonPause.classList.contains("resume")){
            pauseTimer(mySetInterval);
            return console.log("pausou");
        }else{
            console.log("RETOMOU")
            resumeTimer(hour,minute,second,mySetInterval);
        }
        console.log("tá no button")
    })
}

function resumeTimer(hour,minute,second,mySetInterval){

    buttonPause.style.backgroundColor = "rgb(190, 16, 16)";
    buttonPause.value = "Pausar";
    console.log("fora do interval");
    mySetInterval =
    setInterval(() => {
        console.log("tá no interval")
        second --;
        if(second<0){
            minute--;
            second=59;
        }
        if(minute<0){
            hour--;
            minute=59;
        }
        if(second === 0 && minute===0 && hour === 0){
            clearInterval(mySetInterval);
            buttonPause.style.display="none";
        }

        let timeString = addZero(hour,minute,second);

        divTime.innerText = `${timeString[0]}:${timeString[1]}:${timeString[2]}`;
        buttonPause.addEventListener("click",function(){
            console.log("tá na function");
            pauseTimer(mySetInterval);
        })  
    }, 1000);          
}

function pauseTimer(mySetInterval){
    buttonPause.style.backgroundColor = "rgb(16, 190, 117)";
    buttonPause.value = "Retormar";
    clearInterval(mySetInterval);
}

function addZero(hour,minute,second){
    let hourString = String(hour);
    let minuteString = String(minute);
    let secondString = String(second);
    hourString = hourString.padStart(2,"0");
    minuteString = minuteString.padStart(2,"0");
    secondString = secondString.padStart(2,"0");
    
    return [hourString,minuteString,secondString];
}

function getTimes(){
    let hour = Number(document.getElementById("set-hour").value);
    let minute = Number(document.getElementById("set-minute").value);
    let second = Number(document.getElementById("set-second").value);
    if((hour >= 0 && minute <= 99) && (minute >= 0 && minute < 60) && (second >= 0 && second <60)){
        let fullTime = [hour,minute,second]
        return fullTime;
    }else{
        alert("Digite um tempo válido!!!");
    }  
}

function getHour(){
    let listTimes = getTimes();
    let hour = listTimes[0];  
    return hour;
}

function getMinute(){
    let listTimes = getTimes();
    let minute = listTimes[1];  
    return minute;
}

function getSecond(){
    let listTimes = getTimes();
    let second = listTimes[2];  
    return second;
}