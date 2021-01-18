window.addEventListener("DOMContentLoaded", () => {

    //

    function classChange(element, oldClass, newClass) {
        element.classList.remove(oldClass);
        element.classList.add(newClass);
    }
    
    function multipleSlider(className, classActive, classHide, length, forward) {
    
        const elements = document.querySelectorAll(className);
        let left;
        let right;
    
        elements.forEach((n, i) => {
            if (n.classList.contains(`${classActive}_1`)) {
                left = elements[i - 1];
                right = elements[i + length];
            }
        });
    
        if (forward) {
            if (document.querySelectorAll(`.${classHide}_left`).length == 0) {
                return;
            }
    
            for (let i = length; i > 0; i--) {
                if (i == length) {
                    classChange(document.querySelector(`.${classActive}_${i}`), `${classActive}_${i}`, `${classHide}_right`);
                    continue;
                }
    
                classChange(document.querySelector(`.${classActive}_${i}`), `${classActive}_${i}`, `${classActive}_${i + 1}`);
            }
    
            classChange(left, `${classHide}_left`, `${classActive}_1`);
        } else {
            if (document.querySelectorAll(`.${classHide}_right`).length == 0) {
                return;
            }
    
            for (let i = 1; i <= length; i++) {
                if (i == 1) {
                    classChange(document.querySelector(`.${classActive}_${i}`), `${classActive}_${i}`, `${classHide}_left`);
                    continue;
                }
    
                classChange(document.querySelector(`.${classActive}_${i}`), `${classActive}_${i}`, `${classActive}_${i - 1}`);
            }
    
            classChange(right, `${classHide}_right`, `${classActive}_${length}`);
        }
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //

    const sliderOne = document.querySelector('.slider-one');
    const sliderTwo = document.querySelector('.slider-two');
    const sliderThree = document.querySelector('.slider-three');
    const sliderClassic = document.querySelector('.slider-classic');

    sliderOne.addEventListener('click', (event) => {
        if (event.target.classList.contains('arrow-one_left')) {
            if (document.querySelectorAll(`.hide-one_right`).length != 0) {
                multipleSlider('.image-one', 'active-one', 'hide-one', 4, false);

                for (let i = 1; i < 5; i++) {
                    const n = random(-15, 15);
                    const e = document.querySelector(`.active-one_${i}`);
                    e.style.transform = `rotate(${n}deg)`;
                }
            }
        }
        if (event.target.classList.contains('arrow-one_right')) {
            if (document.querySelectorAll(`.hide-one_left`).length != 0) {
                multipleSlider('.image-one', 'active-one', 'hide-one', 4, true);

                for (let i = 1; i < 5; i++) {
                    const n = random(-15, 15);
                    const e = document.querySelector(`.active-one_${i}`);
                    e.style.transform = `rotate(${n}deg)`;
                }
            }
        }
    });

    sliderTwo.addEventListener('click', (event) => {
        if (event.target.classList.contains('arrow-two_left')) {
            multipleSlider('.image-two', 'active-two', 'hide-two', 3, false);
        }
        if (event.target.classList.contains('arrow-two_right')) {
            multipleSlider('.image-two', 'active-two', 'hide-two', 3, true);
        }
    });

    sliderThree.addEventListener('click', (event) => {
        if (event.target.classList.contains('arrow-three_left')) {
            multipleSlider('.image-three', 'active-three', 'hide-three', 5, false);
        }
        if (event.target.classList.contains('arrow-three_right')) {
            multipleSlider('.image-three', 'active-three', 'hide-three', 5, true);
        }
    });

    sliderClassic.addEventListener('click', (event) => {
        if (event.target.classList.contains('arrow-classic_left')) {
            multipleSlider('.image-classic', 'active', 'hide-classic', 1, false);
        }
        if (event.target.classList.contains('arrow-classic_right')) {
            multipleSlider('.image-classic', 'active', 'hide-classic', 1, true);
        }
    });
});