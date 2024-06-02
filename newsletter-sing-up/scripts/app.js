const singupElement = document.querySelector('.singup');
const formElement = document.querySelector('.singup_form');
const inputElement = document.querySelector('.singup_form_field');
const errorMessageElement = document.querySelector('.singup_form_label-error');
const modalElement = document.querySelector('.singup_modal');

const keyframe = [
    {
        opacity: 0,
        transform: 'translateY(-2rem)',
    },
    {
        opacity: 1,
        transform: 'translateY(0)',
    },
]

const hideErrorMessage = (event) => {
    errorMessageElement.classList.add('not-active');
    event.target.classList.remove('input-error');
};

const emailValidation = (event) => {
    const regexp = /[-.\w]+@([\w-]+\.)+[-\w]/g;
    const result = regexp.test(event.target.value);

    if (!result && event.target.value !== '') {
        errorMessageElement.classList.remove('not-active');
        event.target.classList.add('input-error');
    };
};

const formHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(formElement);
    const email = formData.get('email-subscribe');

    event.target.reset();

    singupElement.classList.add('not-active');
    modalElement.classList.remove('not-active');

    modalElement.querySelector('.singup_text-bold').textContent = email;
    modalElement.animate(keyframe, 500);
};

const closeModal = () => {
    modalElement.classList.add('not-active');
    singupElement.classList.remove('not-active');
};

inputElement.addEventListener('focusout', emailValidation);
inputElement.addEventListener('focusin', hideErrorMessage);

formElement.addEventListener('submit', formHandler);

modalElement.querySelector('button').addEventListener('click', closeModal);