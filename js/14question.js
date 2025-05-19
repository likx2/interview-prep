const user = {
    name: 'Test user',
    getName(prefix){
        return `${prefix ?? ''} ${this.name}`
    }
}

const user2 = {
    name: 'Test user 2'
}

// Bind
const getName = user.getName.bind(user2)

// console.log(getName())

// Call
// console.log(user.getName.call(user2, 'This is a'))

// // Apply
console.log(user.getName.apply(user2, ['This is a']))