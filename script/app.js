const userDeckCard = document.querySelector('.user__deck-card'); //карты пользователя
// const userCard = document.querySelectorAll('.user__card'); //каждая карта пользователя
const compDeckCard = document.querySelector('.comp__deck-card'); //карты компьютера
// const compCard = document.querySelectorAll('.comp__card'); //каждая карта компьютера

const deckDeckCard = document.querySelector('.deck__deck-card'); //карта с мастью в колоде

const arr = [
    '6♥', '7♥', '8♥', '9♥', '10♥', 'В♥', 'Д♥', 'К♥', 'Т♥', 
    '6♦', '7♦', '8♦', '9♦', '10♦', 'В♦', 'Д♦', 'К♦', 'Т♦',
    '6♠', '7♠', '8♠', '9♠', '10♠', 'В♠', 'Д♠', 'К♠', 'Т♠',
    '6♣', '7♣', '8♣', '9♣', '10♣', 'В♣', 'Д♣', 'К♣', 'Т♣'
]; // первоначальный массив карт

let remainingСards = [...arr]; //изменяемый массив колоды карт

let trump; //козырь

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

//функция первой раздачи карт пользователю
function distributingСardsUser() {
    let a;
    for (let i = 0; i < 6; i++) {
        a = remainingСards[getRandomIntInclusive(0, remainingСards.length - 1)];
        if(a.charAt(a.length - 1) === '♥' || a.charAt(a.length - 1) === '♦') {
            userDeckCard.insertAdjacentHTML('afterbegin', `<div class="user__card card_heart">${a}</div>`);
            remainingСards.splice(remainingСards.indexOf(a), 1); //поиск и удаление найденной карты из массива колоды
        }
        else {
            userDeckCard.insertAdjacentHTML('afterbegin', `<div class="user__card">${a}</div>`);
            remainingСards.splice(remainingСards.indexOf(a), 1);
        }
    }
};

//функция первой раздачи карт компьютеру
function distributingСardsComp() {
    let a;
    for (let i = 0; i < 6; i++) {
        a = remainingСards[getRandomIntInclusive(0, remainingСards.length - 1)];
        if(a.charAt(a.length - 1) === '♥' || a.charAt(a.length - 1) === '♦') {
            compDeckCard.insertAdjacentHTML('afterbegin', `<div class="user__card card_heart">${a}</div>`);
            remainingСards.splice(remainingСards.indexOf(a), 1); //поиск и удаление найденной карты из массива колоды
        }
        else {
            compDeckCard.insertAdjacentHTML('afterbegin', `<div class="user__card">${a}</div>`);
            remainingСards.splice(remainingСards.indexOf(a), 1);
        }
    }

    
};

//функция определения козыря
function distributingСardsTrump() {
    let a = remainingСards[getRandomIntInclusive(0, remainingСards.length - 1)];
    deckDeckCard.insertAdjacentHTML('afterbegin', `<div class="user__card card_heart">${a}</div>`);
    remainingСards.splice(remainingСards.indexOf(a), 1); //поиск и удаление найденной карты из массива колоды
};

distributingСardsUser();
distributingСardsComp();
distributingСardsTrump();

console.log(remainingСards);
