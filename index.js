// // f(x) = x + 3 => f(9) = 12
//    f(9) = 9 + 3 = 12

// // f(x) = x^2 + 3x + 2
//    f(9) = 81 + 27 + 2 = 110

// // f(x, y) = x^2 + 3y + 2
//    f(9, 2) = 9^2 + 3 * 2 + 2 =

function penjumlahan(a, b) {
    const result = a + b
    return result
}

const hasil = penjumlahan(10, 7)

console.log(hasil)

// 1. function untuk mengkalkulasi luas lingkaran
// 2. function untuk mengkalkulasi volume balok
// 3. function untuk mengkalkulasi volume bola

// callback
// function otherFunc() {
//     return "Hello World"
// }

function callName(args) {
    const result = args()
    return result
}

// const res = callName(otherFunc)
// console.log(res)
// anonymous function = function yg gapunya nama
const res = callName(function() {
    return "Hello World"
})

console.log(res)

// based function in js
function nameOfFunction(args) {
    return "Hello" + args
}

// anonym function
const nameOfFunctionWithAnonym = function(args) {
    return "Hello" + args
}

// arrow function
const nameOfFunctionWithArrow = (args) => {
    return "Hello" + args
}

console.log(nameOfFunction(" World"))
console.log(nameOfFunctionWithAnonym(" World"))
console.log(nameOfFunctionWithArrow(" World"))

// currying
const openTheDor = () => {
    return "Dor is open now"
}

const callHer = (args) => {
    return openTheDor
}

const resultOfCurrying = callHer("Hi my name is saeful")()
console.log(resultOfCurrying)

const resClosure = function(args) {
    const result = args * 2
    return result
}(9)

console.log(resClosure)