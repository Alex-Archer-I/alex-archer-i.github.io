const questionElements = document.querySelectorAll('.faq_header-question');

const keyOpacity = [{opacity: 0}, {opacity: 1}];

const openText = (elem) => {
    elem.nextElementSibling.style.height = `${elem.nextElementSibling.scrollHeight}px`;

    elem.querySelector('.faq_btn').animate(keyOpacity, 500);
    elem.querySelector('.faq_btn').style.backgroundImage = `url("./assets/images/icon-minus.svg")`;

    elem.dataset.status = 'opened';
};

const closeText = (elem) => {
    elem.nextElementSibling.style.height = `0px`;

    elem.querySelector('.faq_btn').animate(keyOpacity, 500);
    elem.querySelector('.faq_btn').style.backgroundImage = `url("./assets/images/icon-plus.svg")`;

    elem.dataset.status = 'closed';
};

const toggleQuestion = (event) => {
    const questionElem = event.currentTarget;

    if (questionElem.dataset.status === "closed") {
        for (const elem of questionElements) {
            if (elem.dataset.status === "opened") {
                closeText(elem);
            };
        };

        openText(questionElem);
        return;
    };

    if (questionElem.dataset.status === "opened") {
        closeText(questionElem);
        return;
    };
};

for (const elem of questionElements) {
    elem.addEventListener('click', toggleQuestion);
};