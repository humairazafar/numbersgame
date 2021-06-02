const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message;
//keep track of number of guess attempts


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable

//  2) End the loop when the user's guess matches the random number
  
//  3) Display a message letting the user know they guessed the number

for (let i = 1; i <= 10; i++)  {
  let guess = prompt("I am thinking of a number between 1 and 10, can you guess it?")

  //terminate loop if the user guesses the number 
  if(parseInt(guess)===randomNumber) {
      message = `<h1>It took you ${i} tries to  guess the number ${randomNumber}</h1>`;
      break;
  } else {
      message = `You did not guess the number. It was ${randomNumber}. `;
  }
}

  
main.innerHTML = `<h1> ${message}</h1>`;