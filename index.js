const correct = 50;
const guess = prompt("Guess a number!");
if (guess < correct) {
  alert("Too low...");
} else if (guess > correct) {
  alert("Too high...");
} else if (guess == 50) {
  alert("You got it!");
} else {
  alert("That's not a number...");
}
