const buttonInite = document.getElementById("inite");
const buttonPause = document.getElementById("pause")
let divTime = document.querySelector(".main-time");

buttonInite.addEventListener("click",function(){
    let hour = getHour();
    let minute = getMinute();
    let second = getSecond();
    mySetInterval(hour,minute,second);
    buttonInite.disabled = true;
    buttonPause.disabled = false;

});

function writeTime(hour,minute,second){  
    let timeString = addZero(hour,minute,second);
    return divTime.innerText = `${timeString[0]}:${timeString[1]}:${timeString[2]}`;
}

function mySetInterval(hour,minute,second){
    writeTime(hour,minute,second);
    let mySetInterval = 
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
                buttonPause.disabled = true;
            }

            let timeString = addZero(hour,minute,second);
            return divTime.innerText = `${timeString[0]}:${timeString[1]}:${timeString[2]}`;         
        }, 1000);

    buttonPause.addEventListener("click",function(){
        buttonPause.classList.toggle("resume");        
        if(buttonPause.classList.contains("resume")){
            buttonPause.style.backgroundColor = "rgb(16, 190, 117)";
            buttonPause.value = "Retormar";
            clearInterval(mySetInterval);
        }else{
            buttonPause.style.backgroundColor = "rgb(190, 16, 16)";
            buttonPause.value = "Pausar";
            let mySetInterval=
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
                    buttonPause.disabled = true;
                }
    
                let timeString = addZero(hour,minute,second);
                return divTime.innerText = `${timeString[0]}:${timeString[1]}:${timeString[2]}`;         
            }, 1000);
        }
    })
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