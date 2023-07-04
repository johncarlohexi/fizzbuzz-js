let showAnswer = document.getElementById("showAnswer")

let number;
number = prompt("Enter a number")

function divideOk(num) {
    let fizz = num / 3
    let checkFizz = Number.isInteger(fizz);

    let buzz = num / 5;
    let checkBuzz = Number.isInteger(buzz);

    let dBy3 = num % 3 === 0;
    let dBy5 = num % 5 === 0;
    let fizzBuzz = dBy3 && dBy5;


    switch(true) {
        case fizzBuzz:
            showAnswer.textContent = "fizzbuzz"
        break;
        case checkFizz:
            showAnswer.textContent = "fizz"
            break;
        case checkBuzz:
            showAnswer.textContent = "buzz"
            break;
        default:
            showAnswer.textContent = "Not Devisble"
            break;
    }
}
divideOk(number)