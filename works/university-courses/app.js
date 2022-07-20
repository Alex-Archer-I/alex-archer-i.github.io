const mobileMenu = document.getElementById('menu-mobile');
const hamburger = document.getElementById('hamburger');

const modalWindow = document.getElementById('modal');
const modalBackground = document.getElementById('modal-background');

const anchorHero = document.querySelector('#hero-image a');
const anchorStudents = document.querySelector('#about-students-content a');
const anchorInspiration = document.querySelector('#inspiration a');
const form = document.querySelector('#form-submit form');

const socialIcons = document.querySelectorAll('.social-icon');

let mobileMenuOpen = false;

function modalOpen(element) {
    modalBackground.style.display = 'flex';
    modalWindow.append(element);
};

function modalClose() {
    modalWindow.innerHTML = `<div id='modal-close'></div>`;
    document.getElementById('modal-close').addEventListener('click', modalClose);
    modalBackground.style.display = 'none';
};

function createFormData(type, text) {
    const newElement = document.createElement('p');
    newElement.innerHTML = `<span class="modal-form-name">${type}</span>: ${text}`;
    return newElement;
}

hamburger.addEventListener('click', () => {
    if (mobileMenuOpen === false) {
        mobileMenu.style.transform = 'translateY(0)';

        hamburger.style.setProperty('--transform-before', 'rotate(45deg) translateY(-1.4rem)');
        hamburger.style.setProperty('--transform-after', 'rotate(-45deg) translateY(1.4rem)');
        hamburger.style.backgroundColor = 'transparent';

        mobileMenuOpen = true;
        return;
    };

    if (mobileMenuOpen === true) {
        mobileMenu.style.transform = 'translateY(-100%)';

        hamburger.style.setProperty('--transform-before', 'none');
        hamburger.style.setProperty('--transform-after', 'none');
        hamburger.style.backgroundColor = 'var(--main-color-light)';

        mobileMenuOpen = false;
        return;
    };
});

document.getElementById('modal-close').addEventListener('click', modalClose);
modalBackground.addEventListener('click', modalClose);

anchorHero.addEventListener('click', (event) => {
    event.preventDefault();
    const newElement = document.createElement('p');
    newElement.innerText = 'Here you can viem more!';
    modalOpen(newElement);
});

anchorStudents.addEventListener('click', (event) => {
    event.preventDefault();
    const newElement = document.createElement('p');
    newElement.innerText = 'Now you can learn more about our students!';
    modalOpen(newElement);
});

anchorInspiration.addEventListener('click', (event) => {
    event.preventDefault();
    const newElement = document.createElement('p');
    newElement.innerText = 'Get your inspiration from knowledge!';
    modalOpen(newElement);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newElement = document.createElement('div');

    newElement.append(createFormData('name', form.querySelector('#name').value));
    newElement.append(createFormData('email', form.querySelector('#email').value));
    newElement.append(createFormData('message', form.querySelector('#message').value));

    newElement.classList.add('modal-form-text');

    modalOpen(newElement);
    form.reset();
});

for (const element of socialIcons) {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const newElement = document.createElement('p');
        newElement.innerText = 'This gears are replacing the social icon.';
        modalOpen(newElement);
    });
};