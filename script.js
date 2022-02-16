//fazer amanhã
//fazer ficar com duas casas decimais
//restringir valores de entrada
// dividir melhor as funções
const buttonInite = document.querySelector(".main-button");
let divTime = document.querySelector(".main-time");
buttonInite.addEventListener("click",function(){
    writeTime();
    
});

function getTimes(){
    let hour = Number(document.getElementById("set-hour").value);
    let minute = Number(document.getElementById("set-minute").value);
    let second = Number(document.getElementById("set-second").value);
    let fullTime = [hour,minute,second]
    return fullTime;
}

function writeTime(){
    let hour = getHour();
    let minute = getMinute();
    let second = getSecond();
    divTime.innerText = `${hour}:${minute}:${second}`;
    let mySetInterval = setInterval(() => {
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
        if(second<10){
            divTime.innerText = `${hour}:${minute}:0${second}`;
        }else{
            divTime.innerText = `${hour}:${minute}:${second}`;
        }
        if(minute<10){
            divTime.innerText = `${hour}:0${minute}:${second}`;
        }else{
            divTime.innerText = `${hour}:${minute}:${second}`;
        }
        if(hour<10){
            divTime.innerText = `0${hour}:${minute}:${second}`;
        }else{
            divTime.innerText = `${hour}:${minute}:${second}`;
        }         
    }, 1000);
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