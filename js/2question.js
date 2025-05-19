
// Null
const userDisplayName = (user) => {
 if (!user) {
    return null
 }

  return `${user.firstName} ${user.secondName}`
}

// console.log(userDisplayName())


const userById = (userId, users) => users.find(({ id }) => userId === id) ?? null

// console.log(userById(1, [{ id: 2, name: 'Test User' }]))

// Undefined
const selectedMenuItemValue = (menuItemId, menuItems) => (menuItems.find(({ id }) => menuItemId === id) ?? menuItems[0])?.value ?? 'Default Item'

console.log(selectedMenuItemValue(3, []))