
const secondHand=document.querySelector(".secondHand")
const minuteHand=document.querySelector(".minuteHand")
const hourHand=document.querySelector(".hourHand")

function setDate(){
    const timeNow=new Date()
    const seconds=timeNow.getSeconds()
    const secondsDegree=((seconds/60)*360 +90)
    secondHand.style.transform=`rotate(${secondsDegree}deg)`

    const minutes=timeNow.getMinutes()
    const minutesDegree=((minutes/60)*360) + ((seconds/60)*6) + 90
    minuteHand.style.transform=`rotate(${minutesDegree}deg)`

    const hours=timeNow.getHours()
    const hoursDegree= ((hours/12)*360) +((minutes/60)*30) + 90
    hourHand.style.transform=`rotate(${hoursDegree}deg)`

}

setInterval(setDate,1000)
setDate()