//hit cmd+opt+j to see console log on mac

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];
var score = 0;
var result = document.getElementById("match-or-not"); //changes message after match or not
var clickedCards = document.getElementsByClassName("clicked"); // keeps track of which cards have been selected

//write function to append card to clickedCards every time card is clicked

//flips back cards after they have been flipped
var flipBack = function (){
  for (var i=0; i < clickedCards.length; i+=1){
    clickedCards[i].setAttribute("src","images/back.png");
  }
};

//checks if cards are a match, if not resets cardsInPlay
var checkForMatch = function(){
  if (cardsInPlay.length == 2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
      result.textContent = "You found a match!";
      score += 1;
      document.getElementById("score").textContent = score;
    }
    else {
      result.textContent = "Sorry, try again.";
    }
  }
  cardsInPlay = [];
};

//whenever we click a card, card is flipped over -- displays cardImage
var flipCard = function() {

  var cardId = this.getAttribute("data-id");
  var card = cards[cardId];
  this.setAttribute("src",card.cardImage);
  this.setAttribute("class", "clicked");
  console.log(this);
  cardsInPlay.push(cards[cardId].rank);

  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
};

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
};

//starts game over
var resetGame = function () {
  score = 0;
  document.getElementById("score").textContent = score;
  result.textContent = "Start Over?";
  flipback();
};

//begins program by creating board and waiting for reset
createBoard();
document.querySelector("button").addEventListener("click", resetGame);
