window.addEventListener('DOMContentLoaded', () => {
    class Card {
        constructor(img, parent) {
            this.img = img;
            this.parent = document.querySelector(parent);
        }

        render() {
            const element = document.createElement('div');
            element.classList.add('card');
            element.innerHTML = `
                <img src="img/${this.img}.png" alt="${this.img}">
                <div class="over" data-id="${this.img}"></div>
            `;
            this.parent.append(element);
        }
    }

    function compareCards(arr) {
        const first = arr[0].getAttribute('data-id');
        const second = arr[1].getAttribute('data-id');

        if (first === second) {
            arr.splice(0, 2);
            attemp++;
            win++;
            displayScore(win, attemp);

            if (win === 10) {
                overlay.style.background = 'rgba(0, 0, 0, 0.5)';
                const modal = document.createElement('div');
                modal.classList.add('modal');
                modal.innerHTML = `
                    <h2>Поздравляем!</h2>
                    <div class="modal_text">Ваш результат:</div>
                    <div class="modal_text">Совпадений - ${win}</div>
                    <div class="modal_text">Попыток - ${attemp}</div>
                    <button class="modal_button">Супер!</button>
                `;
                overlay.append(modal);
            } else {
                overlay.remove();
            }
        } else {
            arr.forEach(elem => {
                elem.classList.add('over_hide');
            });
            arr.splice(0, 2);
            attemp++;
            displayScore(win, attemp);
            overlay.remove();
        }
    }

    function displayScore(win, attemp) {
        textline.innerHTML = `
            <div>Совпадений найдено - ${win}/10</div>
            <div>Попыток - ${attemp}</div>
        `;
    }

    let win = 0;
    let attemp = 0;
    let img = ['archer', 'archer', 'coin', 'coin', 'compass', 'compass', 'leaf', 'leaf', 'pantheon', 'pantheon', 'papyrus', 'papyrus', 'pharaoh', 'pharaoh', 'rocket', 'rocket', 'torii-gate', 'torii-gate', 'treasure-map', 'treasure-map'];
    const grid = document.querySelector('.grid');
    const textline = document.querySelector('.textline');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    let pare = [];

    displayScore(win, attemp);
    grid.append(overlay);

    for (let i = 0; i < 20; i++) {
        const n = Math.floor(Math.random() * img.length);
        new Card(img[n], '.grid').render();
        img.splice(n, 1);
    }

    setTimeout(() => {
        document.querySelectorAll('.over').forEach(over => {
            over.classList.add('over_hide');
            overlay.remove();
        });
    }, 3000);

    grid.addEventListener('click', (event) => {
        if (event.target.classList.contains('over_hide')) {
            event.target.classList.remove('over_hide');
            pare.push(event.target);
            
            if(pare.length == 2) {
                grid.append(overlay);
                setTimeout(() => {
                    compareCards(pare);
                },500);
            }
        }
    });

    overlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal_button')) {
            location.reload();
        }
    });
    
});