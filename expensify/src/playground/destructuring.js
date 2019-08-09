// **********Object Destructuring
// const person = {
//   name: 'Mike',
//   age: 52,
//   location: {
//     city: 'New York',
//     temp: 89
//   }
// };
//
// const { name = 'Anon', age } = person;
//
// console.log(`${name} is ${age}`);
//
// const { city, temp: temperature } = person.location;
//
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName); //Penguin, Self-Published

// ******************Array Deconstructing
// const address = ['1299 S Juniper Street', 'New York', , '19147'];
//
// const [street, city, state = 'Washington', zip] = address;
//
// console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffeeType, small, medium, large] = item;

console.log(`A medium ${coffeeType} costs ${medium}.`);
