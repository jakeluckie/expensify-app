// const person = {
//     name: 'Jake',
//     age: 34,
//     location: {
//         city: 'Hamilton',
//         temp: 9
//     }
// }


// const { name, age } = person
// // const name = person.name
// // const age = person.age

// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} degrees in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Sel-Published'} = book.publisher
// console.log(publisherName)

// const address = ['37 Mansel Ave', 'Hamilton', 'Waikato', '3216']
// const [street, city, region, postCode] = address
// console.log(`You are in ${city}, ${region}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, ,mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}.`)