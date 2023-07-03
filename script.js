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
            console.log("fizzbuzz")
            showAnswer.textContent = "fizzbuzz"
        break;
        case checkFizz:
            console.log("fizz")
            showAnswer.textContent = "fizz"
            break;
        case checkBuzz:
            console.log("buzz")
            showAnswer.textContent = "buzz"
            break;
        default:
            console.log("Not Devisble")
            break;
    }
}
divideOk(number)