document.addEventListener('DOMContentLoaded', () => {

    function changeText(index, array, element) {
        element.innerText = array[index].innerText;
        element.classList.remove('hide');
    }

    const textArray = document.querySelectorAll('.text-desk');
    const textMobile = document.querySelector('.text-mobile');
    const swipe = document.querySelector('.swipe');
    const polygon = document.querySelector('.polygon');
    const moving = document.querySelectorAll('.moving');

    let startX;
    let rotateLeft;
    let rotateRight;
    const step = 60;
    let hasRotateLeft = false;
    let hasRotateRight = false;
    let angle = 0;
    let index = 0;

    textMobile.innerText = textArray[0].innerText;

    swipe.addEventListener('touchstart', (event) => {
        startX = event.changedTouches[0].pageX;
        rotateLeft = angle - step;
        rotateRight = angle + step;

        moving.forEach(elem => {
            elem.classList.remove('moving');
            elem.classList.add('hide');
        });
    });

    swipe.addEventListener('touchmove', (event) => {
        event.preventDefault();
        let dist = event.changedTouches[0].pageX - startX;

        if (dist > 100) {
            polygon.style.transform = `translateX(-50%) rotate(${rotateRight}deg)`;
            hasRotateRight = true;
            textMobile.classList.add('hide');
        }

        if (dist < -100) {
            polygon.style.transform = `translateX(-50%) rotate(${rotateLeft}deg)`;
            hasRotateLeft = true;
            textMobile.classList.add('hide');
        }

        if (dist > 0 && dist < 100) {
            hasRotateRight = false;
            hasRotateLeft = false;
            polygon.style.transform = `translateX(-50%) rotate(${rotateRight - (dist / step)}deg)`;
        }

        if (dist < 0 && dist > -100) {
            hasRotateRight = false;
            hasRotateLeft = false;
            polygon.style.transform = `translateX(-50%) rotate(${rotateLeft + (dist / step)}deg)`;
        }

        if (dist < 10 && dist > -10) {
            textMobile.classList.remove('hide');
        }
        console.log(dist);
    });

    swipe.addEventListener('touchend', () => {
        if (hasRotateRight) {
            angle += step; 
            polygon.style.transform = `translateX(-50%) rotate(${angle}deg)`;

            if (index == 0) {
                index = 5;
            } else {
                index--;
            }

            changeText(index, textArray, textMobile);
            hasRotateRight = false;
        } else if (hasRotateLeft) {
            angle -= step; 
            polygon.style.transform = `translateX(-50%) rotate(${angle}deg)`;

            if (index == 5) {
                index = 0;
            } else {
                index++;
            }

            changeText(index, textArray, textMobile);
            hasRotateLeft = false;
        } else {
            polygon.style.transform = `translateX(-50%) rotate(${angle}deg)`;
        }

        moving.forEach(elem => {
            elem.classList.remove('hide');
            elem.classList.add('moving');
        });
    });
});