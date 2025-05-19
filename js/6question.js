"use strict";

function foo(){
    console.log(this)
}

// foo()

const user = {
    name: 'Test User',
    getName: () => {
        return this.name
    }
}

const userNested = {
    name: 'Test User',
    getName: function() {
        return () => {
            console.log(this)
        }
    }
}

userNested.getName()()