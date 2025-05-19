// Map
const arr1 = ['1', '2', '3']

const arrayOfNumbers = arr1.map(Number)

// console.log(arrayOfNumbers)

//For each
const arr2 = [1, 2, 3]

arr2.forEach((el) => {
    console.log(el)
})

// Reduce
const users = [{ id: 1, name: 'Test 1' }, { id: 2, name: 'Test 2' }]

const usersMap = users.reduce((res, currentUser) => ({...res, [currentUser.id]: currentUser }), {})
console.log(usersMap[2].name)