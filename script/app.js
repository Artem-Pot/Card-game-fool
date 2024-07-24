const userDeckCard = document.querySelector('.user__deck-card'); //карты пользователя
const userCard = document.querySelectorAll('.user__card');
const compDeckCard = document.querySelector('.comp__deck-card'); //карты пользователя
const deckDeckCard = document.querySelector('.deck__deck-card'); //карта с мастью в колоде

const arr = [
    '6♥', '7♥', '8♥', '9♥', '10♥', 'В♥', 'Д♥', 'К♥', 'Т♥', 
    '6♦', '7♦', '8♦', '9♦', '10♦', 'В♦', 'Д♦', 'К♦', 'Т♦',
    '6♠', '7♠', '8♠', '9♠', '10♠', 'В♠', 'Д♠', 'К♠', 'Т♠',
    '6♣', '7♣', '8♣', '9♣', '10♣', 'В♣', 'Д♣', 'К♣', 'Т♣'
]; //массив первоначальный массив карт

let newArr = [...arr];

let trump; //козырь

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
  }

function ge(){
    userCard.classList.add('card_heart');
}


function distributingСardsUser() {
    for (let i = 0; i < 6; i++) {
        let a = newArr[getRandomIntInclusive(0, newArr.length - 1)];
        
        if(a.charAt(a.length - 1) === '♥' || a.charAt(a.length - 1) === '♦') {
            userDeckCard.insertAdjacentHTML('afterbegin', `<div class="user__card card_heart">${a}</div>`);
        }
        else {
            userDeckCard.insertAdjacentHTML('afterbegin', `<div class="user__card">${a}</div>`);
        }
    }
};

distributingСardsUser();



//убрать повторяющиеся карты - исключая их из нового массива