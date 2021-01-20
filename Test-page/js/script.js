document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.test-link');
    const text = document.querySelectorAll('span');

    for (let i = 1; i < 5; i++) {
        let n = i * 200;
        setTimeout(() => {
            links[i - 1].classList.remove('top');
        }, n);
    }

    setTimeout(() => {
        links.forEach(link => {
            link.classList.remove('wrap')
        });
    }, 1300);

    setTimeout(() => {
        text.forEach(text => {
            text.classList.remove('hide');
        });
    }, 1900);
});