window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

const facts = [
    'Обычно у двух соседних элементов имеющих маржины происходит так называемое "схлопывание маржинов" при котором меньший из них игнорируется. Однако если один из элементов имеет отрицательный маржин этот эффект действует по другому.',
    'В HTML 5 закрывающие теги не являются обязательными. Они были необходимы в предыдущих версиях, которые были куда более плотно основанны на XML, но в новом стандарте запись "<p>Привет, мир!" не вызовет ошибку. Но все же лучше так не делать - это пока еще считается плохой практикой.',
    'Псевдоэлементы ::before и ::after не применимы к элементам чье содержание зависти от внешнего источника - например к элементу <img>, чье содержание определяется аттрибутом "src".',
    'В самой первой версии HTML был всего 21 тег. Большинство из них не сохранились в современной версии.',
];

function randomIndex(number) {
    return Math.floor((Math.random() * number));
};

const headerElemet = document.querySelector('header');

const landingsElements = document.querySelectorAll('#landings li');

const landingsSectionPosition = document.getElementById('landings').offsetTop;
const aboutSectionPosition = document.getElementById('about').offsetTop;

let isLandingsLoading = false;

window.addEventListener('scroll', () => {
    if (window.pageYOffset < 100) {
        headerElemet.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    };

    if (window.pageYOffset >= 100) {
        headerElemet.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    };

    if (window.pageYOffset >= (landingsSectionPosition / 1.3) && isLandingsLoading === false) {
        for (const element of landingsElements) {
            element.style.display = 'block'
        };
        isLandingsLoading = true;
    };
});

document.querySelector('#everything-fact p').textContent = facts[randomIndex(3)];

//Modal window

const modalElement = document.getElementById('modal');
const modalWindow = document.getElementById('modal-window');
const modalCloseElement = document.getElementById('modal-close');

const certifications = document.querySelectorAll('.certification');

const certificationsImage = ['/img/certifications/react-certification.jpg', '/img/certifications/figma-certification.jpg'];

function modalOpen(index) {
    modalWindow.innerHTML = `<img src=${certificationsImage[index]} alt="certification">`;
    modalElement.style.display = 'flex';
};

function modalClose() {
    modalWindow.innerHTML = '';
    modalElement.style.display = 'none';
};

for (const certification of certifications) {
    certification.addEventListener('click', (event) => {
        modalOpen(+event.target.dataset.certificationId);
    });
};

modalCloseElement.addEventListener('click', () => {
    modalClose();
});