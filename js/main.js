var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[3];
var cardTwo = cards[2]

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log('User flipped ' + cards[0]);
console.log('User flipped ' + cards[2]);

if (cardsInPlay.length === 2) {
  if (cardOne === cardTwo) {
    alert('You found a match');
  } else {
    alert('Sorry, try again');
  }
}
