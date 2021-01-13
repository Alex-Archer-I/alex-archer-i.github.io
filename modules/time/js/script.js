window.addEventListener("DOMContentLoaded", () => {

    const arrowSeconds = document.querySelector('.arrow_seconds');
    const arrowMinutes = document.querySelector('.arrow_minutes');
    const arrowHours = document.querySelector('.arrow_hours');

    const daysDisplay = document.querySelector('#days');
    const hoursDisplay = document.querySelector('#hours');
    const minutesDisplay = document.querySelector('#minutes');
    const secondsDisplay = document.querySelector('#seconds');

    const newYear = '2021-03-01';

    function arrowMove(){
        const time = Date.parse(new Date());
        const hours = Math.floor((time / (1000 * 60)) % 720);
        const minutes = Math.floor((time / (1000 * 60)) % 60);
        const seconds = Math.floor((time / 1000) % 60);

        let t = new Date();
        let n = t.getTimezoneOffset();

        arrowSeconds.style.transform = `rotate(${seconds * 6}deg)`;
        arrowMinutes.style.transform = `rotate(${minutes * 6}deg)`;
        arrowHours.style.transform = `rotate(${(hours - n) / 2}deg)`;
    }

    function newYearIsNear(){
        let date = Date.parse(newYear) - Date.parse(new Date());

        let t = new Date();
        let n = t.getTimezoneOffset();

        date = date + (n * 60 * 1000);

        const day = Math.floor(date / (1000 * 60 * 60 * 24));
        const hour = Math.floor(date / (1000 * 60 * 60) % 24);
        const minute = Math.floor(date / (1000 * 60) % 60);
        const second = Math.floor((date / 1000) % 60);

        daysDisplay.textContent = addZero(day);
        hoursDisplay.textContent = addZero(hour);
        minutesDisplay.textContent = addZero(minute);
        secondsDisplay.textContent = addZero(second);
    }

    function addZero(num){
        if(num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    setInterval(arrowMove, 1000);
    setInterval(newYearIsNear, 1000);
});