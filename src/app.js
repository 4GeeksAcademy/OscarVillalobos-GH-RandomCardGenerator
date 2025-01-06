/* eslint-disable */
//$ npm run start
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  randomCard();
};
window.randomCard = function() {
  let form = ["♦", "♥", "♠", "♣"];
  let symbol = Math.floor(Math.random() * form.length);
  let symbolform = form[symbol];

  let packCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let packRandom = Math.floor(Math.random() * packCard.length);
  let numberCard = packCard[packRandom];

  document.getElementById("randomCard").innerHTML = numberCard;
  document.getElementById("formTop").innerHTML = symbolform;
  document.getElementById("formBottom").innerHTML = symbolform;

  document.getElementById("formTop").style.color = "red";

  if (symbolform == "♥" || symbolform == "♦") {
    document.getElementById("formTop").style.color = "red";
  } else {
    document.getElementById("formTop").style.color = "black";
  }
  if (symbolform == "♥" || symbolform == "♦") {
    document.getElementById("formBottom").style.color = "red";
  } else {
    document.getElementById("formBottom").style.color = "black";
  }
};
