// Игра-путешествие //

/* Основная цель - путешествие до конца карты по локациям-узлам.
Каждый переход требует еды, в каждой локации происходит событие.
События бывают двух типов - изменяющие параметры (герой находит или теряет еду, получает оружие, что увеличивает его силу) и сражения. */

/* Четыре типа локации:
1. Поля - много еды, одно - два сокровища, может пара слабых врагов.
2. Леса - среднее количество еды, пара сокровищ, пара слабых врагов, может пара негативных событий.
3. Горы - много врагов, несколько сильных сокровищ, одно - два негативных события, может пара позитивных.
4. Болота - много негативных событий, пара врагов, мало еды, может одно сокровие. */

document.addEventListener('DOMContentLoaded', () => {

    let hero = {
        health: 10,
        power: 1,
        food: 3,
        position: ['A', 'C'],
        move: function(land){
            mainHero.classList.remove(`column_${hero.position[0]}`, `row_${hero.position[1]}`);
            mainHero.classList.add(`column_${land[0]}`, `row_${land[1]}`);
            hero.position = land;
            hero.food -= 1;
            displayHeroStats();
        },
        changeStats: function(change){
            if (change.add){
                hero[change.type] += change.number;
            } else {
                hero[change.type] -= change.number;
            }
            displayHeroStats();
        }
    };
    
    class Land {
        constructor(type, color, location, id, neighbors){
            this.type = type;
            this.color = color;
            this.location = location;
            this.id = id;
            this.neighbors = neighbors;
            this.active = false;
        }

        render(){
            const element = document.createElement('div');
            element.classList.add(`land`, `column_${this.location[0]}`, `row_${this.location[1]}`);
            element.style.background = `url("img/${this.type}.png") center/cover`;
            //element.innerHTML = `<img src='img/${this.type}.png' alt='${this.type}'>`;
            element.setAttribute('data-land', `${this.id}`);
            document.querySelector('.map').append(element);
        }
    }

    const landsArray = [];
    landsArray[0] = new Land('village', '#5CEBCF', ['A', 'C'], 0, [1, 2]);
    landsArray[1] = new Land('forest', '#0F9528', ['B', 'B'], 1, [3, 4]);
    landsArray[2] = new Land('field', '#73E744', ['B', 'D'], 2, [5]);
    landsArray[3] = new Land('field', '#73E744', ['C', 'A'], 3, [6, 7]);
    landsArray[4] = new Land('mountain', '#4490E7', ['C', 'B'], 4, [8]);
    landsArray[5] = new Land('forest', '#0F9528', ['C', 'E'], 5, [8, 9]);
    landsArray[6] = new Land('forest', '#0F9528', ['D', 'A'], 6, [10]);
    landsArray[7] = new Land('swamp', '#083145', ['D', 'B'], 7, [11]);
    landsArray[8] = new Land('field', '#73E744', ['D', 'C'], 8, [11]);
    landsArray[9] = new Land('forest', '#0F9528', ['D', 'E'], 9, [12]);
    landsArray[10] = new Land('swamp', '#083145', ['E', 'A'], 10, [13]);
    landsArray[11] = new Land('mountain', '#4490E7', ['E', 'C'], 11, [13, 14]);
    landsArray[12] = new Land('mountain', '#4490E7', ['E', 'E'], 12, [14]);
    landsArray[13] = new Land('forest', '#0F9528', ['F', 'B'], 13, [15]);
    landsArray[14] = new Land('forest', '#0F9528', ['F', 'D'], 14, [16, 17]);
    landsArray[15] = new Land('swamp', '#083145', ['G', 'B'], 15, [18]);
    landsArray[16] = new Land('field', '#73E744', ['G', 'C'], 16, [19]);
    landsArray[17] = new Land('forest', '#0F9528', ['G', 'D'], 17, [19]);
    landsArray[18] = new Land('field', '#73E744', ['H', 'B'], 18, [20]);
    landsArray[19] = new Land('mountain', '#4490E7', ['H', 'D'], 19, [20]);
    landsArray[20] = new Land('castle', '#86BCEC', ['I', 'C'], 20, []);

    function displayHeroStats (){
        document.querySelector('.health').textContent = `Здоровье: ${hero.health}`;
        document.querySelector('.power').textContent = `Сила: ${hero.power}`;
        document.querySelector('.food').textContent = `Еда: ${hero.food}`;
    }

    function getLand(n){
        let l;
        landsArray.forEach((land, i) => {
            if (land.id === n){
                l = landsArray[i];
            }
        });
        return l;
    }

    function setActive(arr){
        const l = document.querySelectorAll('.land');
        l.forEach(i => {
        i.classList.remove('land_active');
        });

        landsArray.forEach(land => {
            land.active = false;
        });
        arr.forEach(n => {
            getLand(n).active = true;
            document.querySelector(`[data-land = "${n}"]`).classList.add('land_active');
        });
    }

    function getRandom(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function victory(){
        document.querySelector('.overlay').style.display = 'block';
        const gameOverWindow = document.createElement('div');
        gameOverWindow.classList.add('game_over', 'active');
        gameOverWindow.innerHTML += '<div>Вы достигли цели!</div>';
        gameOverWindow.innerHTML += '<button class="close game_close">Ок</button>';
        overlay.append(gameOverWindow);
    }

    function gameOver(){
        const gameOverWindow = document.createElement('div');
        gameOverWindow.classList.add('game_over', 'active');
        gameOverWindow.innerHTML += '<div>К сожалению, вы проиграли...</div>';
        gameOverWindow.innerHTML += '<div>Удачи в следующий раз!</div>';
        gameOverWindow.innerHTML += '<button class="close game_close">Ок</button>';
        overlay.append(gameOverWindow);
    }

    const mainHero = document.querySelector('.hero');
    const map = document.querySelector('.map');
    const overlay = document.querySelector('.overlay');

    // Начало программы

    landsArray.forEach((land) => {
        land.render();
    });
    displayHeroStats();
    setActive(landsArray[0].neighbors);

    map.addEventListener('click', (event) => {
        if (event.target.classList.contains('land')){
            const a = getLand(+event.target.getAttribute('data-land'));

            if (a.active === true){
                hero.move(a.location);
                setActive(a.neighbors);

                if (a.type === 'castle') {
                    victory();
                }

                const arr =  eventObj[a.type];
                const index = getRandom(0, arr.length);
                const currentEvent = arr[index];
                eventObj[a.type].splice(index, 1);

                eventObj.render(currentEvent);
                const eventCard = document.querySelector('.event');
                const eventText = document.querySelector('.event_box');

                if (currentEvent.battle){
                    setTimeout(() => {
                        eventCard.classList.add('active');
                        eventText.innerHTML += `<div class="event_text add">Ваша сила ${hero.power}</div>`;
                        eventText.innerHTML += `<div class="event_text add">Сила монстра ${currentEvent.enemy}</div>`;

                        if (hero.power >= currentEvent.enemy){
                            eventText.innerHTML += `<div class="event_change">Вы победили!</div>`;
                            eventText.innerHTML += `<div class="event_text">${currentEvent.victory}</div>`;
                            eventText.innerHTML += `<div class="event_change">Сила + ${currentEvent.change.number}</div>`;
                            hero.changeStats(currentEvent.change);
                        } else {
                            eventText.innerHTML += `<div class="event_change">Вы проиграли!</div>`;
                            eventText.innerHTML += `<div class="event_change">Здоровье - ${currentEvent.enemy - hero.power}</div>`;

                            let healthChange= {
                                type: 'health',
                                add: false,
                                number: currentEvent.enemy - hero.power
                            };
                            hero.changeStats(healthChange);
                        }
                    }, 1000);
                } else {
                    setTimeout(() => {
                        eventCard.classList.add('active');
    
                        hero.changeStats(currentEvent.change);
                    }, 1000);
                }
            }
        }
    });

    overlay.addEventListener('click', (event) => {
        if (event.target.classList.contains('event_close')){
            document.querySelector('.event').remove();
            if (hero.food <= 0) {
                gameOver();
            } else {
                overlay.style.display = 'none';
            }
        }

        if (event.target.classList.contains('game_close')) {
            location.reload();
        }
    });

});