

    //calling a function at specified intervals in millieseconds
 setInterval(setClock, 1000)
 const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const millisecondHand = document.querySelector('[data-millisecond-hand')
function setClock(){
    //gets the real date
    const currentDate = new Date()
    const millisecondsRatio = currentDate.getMilliseconds() / 1000
    const secondsRatio = (millisecondsRatio+ currentDate.getSeconds()) / 60
    const minutesRatio = (secondsRatio+ currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    
    setRotation(millisecondHand, millisecondsRatio)
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    

    

}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio *360)
}
setClock()
