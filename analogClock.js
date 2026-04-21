const anarogClockFunc = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const houreDegree = hour * 30 + minute * 0.5;
    const minuteDegree = minute * 6 + second * 0.1;
    const secondDegree = second * 6;
    const houreHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');
    houreHand.style.transform = `translateX(-50%) rotate(${houreDegree}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
}
setInterval(anarogClockFunc, 1000);