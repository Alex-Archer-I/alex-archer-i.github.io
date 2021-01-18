// Слайдер, отображающий ряд элементов

function classChange(element, oldClass, newClass) {
    element.classList.remove(oldClass);
    element.classList.add(newClass);
}

function multipleSlider(className, classActive, length, forward) {

    const elements = document.querySelectorAll(className);
    let left;
    let right;

    elements.forEach((n, i) => {
        if (n.classList.contains(`${classActive}_1`)) {
            left = elements[i - 1];
            right = elements[i + 4];
        }
    });

    if (forward) {
        if (document.querySelectorAll('.hide_left').length == 0) {
            return;
        }

        for (let i = length; i > 0; i--) {
            if (i == length) {
                classChange(document.querySelector(`.${classActive}_${i}`), `${classActive}_${i}`, 'hide_right');
                continue;
            }

            classChange(document.querySelector(`.${classActive}_${i}`), `${classActive}_${i}`, `${classActive}_${i + 1}`);
        }

        classChange(left, 'hide_left', `${classActive}_1`);
    } else {
        if (document.querySelectorAll('.hide_right').length == 0) {
            return;
        }

        for (let i = 1; i <= length; i++) {
            if (i == 1) {
                classChange(document.querySelector(`.${classActive}_${i}`), `${classActive}_${i}`, 'hide_left');
                continue;
            }

            classChange(document.querySelector(`.${classActive}_${i}`), `${classActive}_${i}`, `${classActive}_${i - 1}`);
        }

        classChange(right, 'hide_right', `${classActive}_${length}`);
    }
}

export default multipleSlider;