window.addEventListener('DOMContentLoaded', () => {

    const over = document.querySelector('.over');

    const menuOne = document.querySelectorAll('.menu-one');
    const menuTwo = document.querySelectorAll('.menu-two');
    const menuTwoText = document.querySelectorAll('.menu-two-text');
    const menuThree = document.querySelectorAll('.menu-three');
    const menuBoxThree = document.querySelector('.menu-three-box');
    const menuThreeText = document.querySelectorAll('.menu-three-text');

    const menuBtnOne = document.querySelector('.menu-btn-one');
    const menuBtnTwo = document.querySelector('.menu-btn-two');
    const menuBtnThree = document.querySelector('.menu-btn-three');

    over.addEventListener('click', (event) => {
        if (event.target.classList.contains('menu-btn-one')) {
            menuBtnOne.classList.add('hide');
            menuOne.forEach(element => {
                element.classList.add('animation-one');
            });
        }

        if (event.target.classList.contains('menu-close-one')) {
            menuBtnOne.classList.remove('hide');
            menuOne.forEach(element => {
                element.classList.remove('animation-one');
            });
        }

        if (event.target.classList.contains('menu-btn-two')) {
            menuBtnTwo.classList.add('hide');
            menuTwo.forEach(element => {
                element.classList.add('menu-two_active');
            });
            setTimeout(() => {
                menuTwoText.forEach(element => {
                    element.classList.add('menu-two-text_active');
                });
            }, 1000);
        }

        if (event.target.classList.contains('menu-close-two')) {
            menuTwoText.forEach(element => {
                element.classList.remove('menu-two-text_active');
            });
            setTimeout(() => {
                menuTwo.forEach(element => {
                    element.classList.remove('menu-two_active');
                    menuBtnTwo.classList.remove('hide');
                });
            }, 500);
        }

        if (event.target.classList.contains('menu-btn-three')) {
            menuBtnThree.classList.add('hide');
            menuBoxThree.classList.remove('menu-three-box-hide');
            menuThree.forEach(element => {
                element.classList.remove('hide');
            });

            for (let i = 1; i < 6; i++) {
                const t = (i * 100);

                setTimeout(() => {
                    menuThree[i - 1].classList.add('menu-three-wrap');
                }, t);
            }

            setTimeout(() => {
                menuThreeText.forEach(element => {
                    element.classList.remove('hide');
                });
            }, 1200);
        }

        if (event.target.classList.contains('menu-close-three')) {
            menuThreeText.forEach(element => {
                element.classList.add('hide');
            });

            for (let i = 1; i < 6; i++) {
                const t = (i * 100);

                setTimeout(() => {
                    menuThree[i - 1].classList.remove('menu-three-wrap');
                }, t);
            }

            setTimeout(() => {
                menuBtnThree.classList.remove('hide');
                menuBoxThree.classList.add('menu-three-box-hide');
                menuThree.forEach(element => {
                    element.classList.add('hide');
                });
            }, 1200);
        }
    });

});