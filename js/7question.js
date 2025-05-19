const increment = (x) => {
    return (y) => x * y
}

const increment10 = increment(10)

console.log(increment10(5))

// Variable x is remembered from parent's scope, in this case it is 10

