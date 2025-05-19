const obj = {
    toString() {
        return 'Object stringified'
    }
}

delete obj.toString

// console.log(obj.toString())


class User {
    constructor(firstName, secondName){
        this.firstName = firstName
        this.secondName = secondName
    }

    getDisplayName(){
        return `${this.firstName} ${this.secondName}`
    }
}

User.prototype.getFirstName = () => {
    return 'Default name'
}

const user = new User('Test', 'User')

delete user.getDisplayName

console.log(user.__proto__.getDisplayName())

console.log(user.getFirstName())