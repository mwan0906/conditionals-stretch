const correct = 50;
const guess = prompt("Guess a number!");
if (guess < correct) {
  alert("Too low...");
} else if (guess > correct) {
  alert("Too high...");
} else {
  alert("You got it!");
}
