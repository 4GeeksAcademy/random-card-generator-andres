/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cardSuits = ["♦", "♥", "♠", "♣"];
const cardNumbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  updateCard();
  setInterval(updateCard, 2000);
};

function updateCard() {
  let randomSuit = Math.floor(Math.random() * 4);
  let randomNumber = Math.floor(Math.random() * 12);

  document.getElementById("topCardSide").innerHTML = cardSuits[randomSuit];
  document.getElementById("middleCardSide").innerHTML =
    cardNumbers[randomNumber];
  document.getElementById("bottomCardSide").innerHTML = cardSuits[randomSuit];
  document.getElementById("bottomCardSide").style.transform = "rotate(180deg)";

  if (cardSuits[randomSuit] == "♦" || cardSuits[randomSuit] == "♥") {
    document.getElementById("topCardSide").style.color = "red";
    document.getElementById("bottomCardSide").style.color = "red";
  } else {
    document.getElementById("topCardSide").style.color = "black";
    document.getElementById("bottomCardSide").style.color = "black";
  }

  let changeButton = document.getElementById("changeBtn");
  changeButton.addEventListener("click", function() {
    updateCard();
  });
}
