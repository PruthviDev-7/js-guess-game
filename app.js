function startGame() {
    const max = Number(prompt("Enter Your Max No"));
    const random = Math.floor(Math.random() * max) + 1;

    let Guess = prompt("Guess the Number (or type 'quit' to exit)");

    while (true) {
        if (Guess.toLowerCase() === "quit") {
            console.log("User quit");
            break;
        }

        let guessNum = Number(Guess);

        if (guessNum === random) {
            console.log("You are right! Congrats, random number was:", random);
            break;
        } else if (guessNum < random) {
            Guess = prompt("Hint: Your guess was too small. Please try again");
        } else if (guessNum > random) {
            Guess = prompt("Hint: Your guess was too big. Please try again");
        }
    }
}