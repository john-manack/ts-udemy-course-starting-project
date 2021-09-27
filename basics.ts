const add = (number1: number, number2: number, showResult: boolean, phrase: string) => {
    console.log(typeof number1)
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return number1 + number2;
    }
}

const n1 = 5;
const n2 = 4.5;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(n1, n2, printResult, resultPhrase);

console.log(`The result is ${result}`);