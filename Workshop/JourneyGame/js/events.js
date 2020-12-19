let eventObj = {
    field: [
        {
            text: 'Вы встретили добродушного крестьянина, который поделился с вами едой',
            battle: false,
            rule: 'Еда + 2',
            change: {
                type: 'food',
                add: true,
                number: 2,
                more: false,
            }
        },
        {
            text: 'Вы проходите через фруктовый сад, деревья которого сгибаются под тяжестью обильного урожая. Отличный способ пополнить запасы.',
            battle: false,
            rule: 'Еда + 2',
            change: {
                type: 'food',
                add: true,
                number: 2,
                more: false,
            }
        },
        {
            text: 'Поля, небольшие фермерские поселения - весьма мирные земли, но не в этот раз! Вы слышите гневное квохчание и обнаруживаете что на вас несется разгневанная курица!',
            battle: true,
            rule: 'Бой!',
            enemy: 0,
            victory: 'Недовольно ворча, курица возвращается на насест. Победа над курицей - небольшое достижение, но  вы стали немного опытней.',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Вы останавливаетесь в таверне, где отошедший от дел рыцарь дает вам пару наставлений в боевых искусствах.',
            battle: false,
            rule: 'Сила + 1',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Солнце печет нещадно, а дорога кажется бесконечной. Вы решаете отдохнуть в тени раскидистого дерева. Проснувшись вечером, вы обнаруживаете что ваши запасы еды стали скуднее...',
            battle: false,
            rule: 'Еда - 1',
            change: {
                type: 'food',
                add: false,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Яблоня у дороги - отличный способ пополнить запасы.',
            battle: false,
            rule: 'Еда + 1',
            change: {
                type: 'food',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'В местном поселении свадьба дочери деревенского старосты, и он охотно делится едой с путешественниками.',
            battle: false,
            rule: 'Еда + 3',
            change: {
                type: 'food',
                add: true,
                number: 3,
                more: false,
            }
        },
        {
            text: 'Вы собираете ягоды, обильно растущие у берега речки.',
            battle: false,
            rule: 'Еда + 1',
            change: {
                type: 'food',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Бродячий торговец продает вам немного еды.',
            battle: false,
            rule: 'Еда + 2',
            change: {
                type: 'food',
                add: true,
                number: 2,
                more: false,
            }
        },
        {
            text: 'В деревне, через которую лежит ваш путь, проходит фестиваль урожая. В этом году он был особенно обильным и радостные жители с удовольствием делятся провиантом с путниками.',
            battle: false,
            rule: 'Еда + 4',
            change: {
                type: 'food',
                add: true,
                number: 4,
                more: false,
            }
        }
    ],
    forest: [
        {
            text: 'Из кустов раздается глухое рычание и на вас нападает лесной волк!',
            battle: true,
            rule: 'Бой!',
            enemy: 1,
            victory: 'Поджав хвост, волк скрывается в чаще.',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Вдоль дороги растут богатые на урожай ягодные кусты. Самое время пополнить провиант.',
            battle: false,
            rule: 'Еда + 1',
            change: {
                type: 'food',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Вы встречаете группу странствующих эльфов-менестрелей. Они делятся с вами припасами.',
            battle: false,
            rule: 'Еда + 2',
            change: {
                type: 'food',
                add: true,
                number: 2,
                more: false,
            }
        },
        {
            text: 'На вас нападает лесной гоблин, угрожая ржавым изогнутым кинжалом!',
            battle: true,
            enemy: 2,
            victory: 'Вы победили гоблина!',
            rule: 'Бой!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Вы набредаете на поляну, на которой разбил лагерь местный барон со свитой. Они охотятся в этих лесах и делятся с вами добычей в обмен на рассказы о вашем путешествии.',
            battle: false,
            rule: 'Еда + 2',
            change: {
                type: 'food',
                add: true,
                number: 2,
                more: false,
            }
        },
        {
            text: 'С досадой вы обнаруживаете что часть запасов испортилась.',
            battle: false,
            rule: 'Еда - 1',
            change: {
                type: 'food',
                add: false,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Заметив блеск в кустах. вы рещаете проверить что там. К вашему удивлению вы находите меч отличного качетсва!',
            battle: false,
            rule: 'Сила + 3',
            change: {
                type: 'power',
                add: true,
                number: 3,
                more: false,
            }
        },
        {
            text: 'Ужастное рычание оповещает вас, что впереди - опасный противник. И в самом деле дорогу вам преграждает лесной тролль!',
            battle: true,
            rule: 'Бой!',
            enemy: 5,
            victory: 'Это был тяжелй бой, но теперь вы доказали, что способны справиться с самыми сильными противниками!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'На вас нападает разъяренный кабан!',
            battle: true,
            rule: 'Бой!',
            enemy: 1,
            victory: 'С пронзительным визгом кабан скрывается в чаще.',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Вы выходите к лесному озеру в котором плещется рыба.',
            battle: false,
            rule: 'Еда + 2',
            change: {
                type: 'food',
                add: true,
                number: 2,
                more: false,
            }
        }
    ],
    mountain: [
        {
            text: 'В этом маленьком шахтерском поселении нельзя купить еды, но зато здесь живут отличные кузнецы, которые улучшают ваше оружие',
            battle: false,
            rule: 'Сила + 1',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Дорогу вам преграждает двухголовый огр, живущий в пещере неподалеку!',
            battle: true,
            rule: 'Бой!',
            enemy: 4,
            victory: 'Вам удалось загнать огра в пещеру из которой он вышел!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Жители мирной деревушки делятся с вами провиантом для путешествия через горы.',
            battle: false,
            rule: 'Еда + 1',
            change: {
                type: 'food',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'На вас нападает стая кобольдов, желая поживиться вашими припасами!',
            battle: true,
            rule: 'Бой!',
            enemy: 2,
            victory: 'Несмотря на численный перевес, вы одержали победу!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Стужа и метель заставляют вас искать укрытия в ближайшей пещере. Чтобы восстановить силы и переждать непогоду понадобится больше запасов.',
            battle: false,
            rule: 'Еда - 2',
            change: {
                type: 'food',
                add: false,
                number: 2,
                more: false,
            }
        },
        {
            text: 'На вас нападает огромный пещерный тролль!',
            battle: true,
            rule: 'Бой!',
            enemy: 4,
            victory: 'Это был нелегкий бой, но вы победили!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Эти величественные залы вырезанные прямо в толще горы когда-то были городом гномов. Сейчас здесь пусто, но вам удается найти отличный гномий кинжал.',
            battle: false,
            rule: 'Сила + 2',
            change: {
                type: 'power',
                add: true,
                number: 2,
                more: false,
            }
        },
        {
            text: 'Вы проходите через заброшенную шахту. Если хорошо поискать здесь еще можно найти пару золотых самородков, но ирония в том, что старая кирка может быть гораздо более полезной для вашего путешествия.',
            battle: false,
            rule: 'Сила + 1',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Осторожно держась за ненадежные перила вы перебираетесь по шаткому веревочному мосту через ущелье. После очередного порывистого удара ветра, ваше оружие исчезает в туманной низине.',
            battle: false,
            rule: 'Сила - 1',
            change: {
                type: 'power',
                add: false,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Ваш путь лежит через заброшенный город гномов. Величественные залы пусты, но внезапно вы слышите механический звук. Голем - древний страж этих мест, все еще выполняет свой долг!',
            battle: true,
            rule: 'Бой!',
            enemy: 5,
            victory: 'Вам удалось одержать победу в этом неравном бою!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        }
    ],
    swamp: [
        {
            text: 'На вас нападает гигантская болотная оса!',
            battle: true,
            rule: 'Бой!',
            enemy: 3,
            victory: 'Это был непростой бой, но вы приобрели новый опыт.',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Путь через болота гораздо более труден и долог. Вы тратите больше еды, чем ожидали.',
            battle: false,
            rule: 'Еда - 1',
            change: {
                type: 'food',
                add: false,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Похоже сам воздух в болотах пропитам чем-то отравляющим. Вы замечаете, что часть ваших запасов испортилась.',
            battle: false,
            rule: 'Еда - 2',
            change: {
                type: 'food',
                add: false,
                number: 2,
                more: false,
            }
        },
        {
            text: 'Таинственные болотные огоньки сьивают вас с пути. Заплутав вы потеряли больше времени и потратили больше припасов.',
            battle: false,
            rule: 'Еда - 2',
            change: {
                type: 'food',
                add: false,
                number: 2,
                more: false,
            }
        },
        {
            text: 'Коварно извиваясь, на вас нападают живые лианы!',
            battle: true,
            rule: 'Бой!',
            enemy: 3,
            victory: 'Вы не посмеете каким-то растениям помешать вашему путешествию!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Прыгая с кочки на корягу, чтобы не попасть в трясину, вы теряете небольшой сверток с припасами.',
            battle: false,
            rule: 'Еда - 1',
            change: {
                type: 'food',
                add: false,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Вы попали в трясину. Отчаянно цепляясь за ветви соседнего дерева вам удается выбраться, но, похоже, ваше оружие сталось в болоте.',
            battle: false,
            rule: 'Сила - 2',
            change: {
                type: 'power',
                add: false,
                number: 2,
                more: false,
            }
        },
        {
            text: 'Местный егерь помогает вам найти путь через болота. В обмен он просит у вас еды для его деревни, которая голодает из-за неурожайного года.',
            battle: false,
            rule: 'Еда - 3',
            change: {
                type: 'food',
                add: false,
                number: 3,
                more: false,
            }
        },
        {
            text: 'Ужастно болотное чудище, состоящее из тины, водорослей и сухих коряг нападает на вас!',
            battle: true,
            rule: 'Бой!',
            enemy: 5,
            victory: 'Это было настоящее испытание и вы смогли пройти его с честью!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        },
        {
            text: 'Гигантская змея преграждает вам путь!',
            battle: true,
            rule: 'Бой!',
            enemy: 4,
            victory: 'Вы победили змею!',
            change: {
                type: 'power',
                add: true,
                number: 1,
                more: false,
            }
        }
    ],

    render: function(type){
        const card = document.createElement('div');
        const e = type;

        card.classList.add('event');
        card.innerHTML = `
        <div class="event_box">
            <div class="event_text">${e.text}</div>
            <div class="event_change">${e.rule}</div>
        </div>
        <button class="close event_close">Ок</button>
        `;
        document.querySelector('.overlay').append(card);
        document.querySelector('.overlay').style.display = 'block';
    }
};