console.log(Math.log(Math.E))
console.log('Hello World!')

console.log(`15! = ${factorial(15)}`)
console.log(`1! = ${factorial(1)}`)
console.log(`0! = ${factorial(0)}`)
console.log(`-3! = ${factorial(-3)}`)
console.log(`5! = ${factorial(5)}`)


function factorial(number) {
    if(number < 0){
        return -1
    }
    
    let result = 1

    for(let i = 1; i <= number; i++){
        result *= i
    }

    return result
} 