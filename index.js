var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


// var randomString = document.querySelector("img").getAttribute("src")
var randomString1 = "images/dice" + randomNumber1 + ".png";
var randomString2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img").setAttribute("src", randomString1);
document.getElementsByClassName("img2")[0].setAttribute("src", randomString2);

function winner() {
if (randomNumber1 > randomNumber2) {
  console.log("winner1")
  document.getElementsByTagName("h1")[0].innerText = "🚩 Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
  console.log("winner2")
  document.getElementsByTagName("h1")[0].innerText = "Player 2 Wins! 🚩";
}

else {
  console.log("draw")
  document.getElementsByTagName("h1")[0].innerText = "🤝 Draw! 🤝";
}

};

winner();
