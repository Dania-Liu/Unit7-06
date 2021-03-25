let number = 0
let guess = 0
number = Math.floor(Math.random() * 10) + 1
number = parseInt(number)

while (guess != number) {
  guess = prompt('Guess a number between 1 and 10')
  guess = parseInt(guess)
  if (guess > number) {
    alert('You guessed too high, try again!')
  } else if (guess < number) {
    alert('You guessed too low, try again!')
  }
}

if (guess === number) {
  alert('You guessed correctly, good job!')
}
