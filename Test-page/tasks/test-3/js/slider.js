document.addEventListener('DOMContentLoaded', () => {

    function dynamicScroll(slider, container, dist, toLeft) {
        const line = document.querySelector(slider);
        const box = document.querySelector(container);
    
        const start = box.offsetTop + (box.scrollHeight / 2);
        const obj = window.getComputedStyle(line);
        const position = +obj.left.slice(0, -2);

        if (toLeft) {
            window.addEventListener('scroll', () => {
                if ((window.innerHeight + window.pageYOffset) > start) {
                    line.style.left = `${(position - ((window.innerHeight + window.pageYOffset) - start) * (dist / window.innerHeight))}px`;
                } else {
                    line.style.left = `${position}px`;
                }
            });
        } else {
            window.addEventListener('scroll', () => {
                if ((window.innerHeight + window.pageYOffset) > start) {
                    line.style.left = `${(position + ((window.innerHeight + window.pageYOffset) - start) * (dist / window.innerHeight))}px`;
                } else {
                    line.style.left = `${position}px`;
                }
            });
        }
    }

    let distOne = 2034;
    let distTwo = 3648;
    let distThree = 4668;

    if (window.innerWidth < 700) {
        distOne = 1715;
        distTwo = 3120;
        distThree = 3915;
    }

    console.log(distThree);
    dynamicScroll('.line-one', '.slider-one', distOne, false);
    dynamicScroll('.line-two', '.slider-two', distTwo, true);
    dynamicScroll('.line-three', '.slider-three', distThree, false);
});