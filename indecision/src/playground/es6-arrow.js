// ***********Part 2 of Arrow functions

// ****Challenge code
const multiplier = {
	numbers: [4, 5, 6],
	multiplier: 3,
	multiply(){
		return this.numbers.map((number) => number * this.multiplier ) ;
	}
}

console.log(multiplier.multiply());

//****So below, we have examples of what is lost when using arrow functions: the arguments object, and the 'this' keyword
const user = {
	name: 'Mike',
	cities: ['New York', 'Boston', 'Gotham'],
	printPlacesLived() {
		// const cityMessages =
		return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
		// {
			// return this.name + ' has lived in ' + city + '!';
		// });
		// return cityMessages;
		// console.log(this.cities);

		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// })

	// printPlacesLived: function() {
	// 	console.log(this.cities);
	//
	// 	this.cities.forEach((city) => {
	// 		console.log(this.name + ' has lived in ' + city);
	// 	})
		// this.cities.forEach(function(city) {
		// 	console.log(this.name + ' has lived in ' + city);
		// })
	}
};
console.log(user.printPlacesLived());


const add = (a, b) => {
	// console.log(arguments);
	return a + b;
}

console.log(add(55,1));



// ***********Part 1 of Arrow functions
// ****Challenge code
// const getFirstNameSimple = (firstNameSimple) => firstNameSimple.split(' ')[0];
//
// const getFirstName = (firstName) => {
// 	return firstName.split(' ')[0];
// }
//
// console.log(getFirstName('Mike Smith'));
// console.log(getFirstNameSimple('Rodney Dangerfield'));


// ES5 function
// const square = function (x) {
// 	return x*x;
// };

// ***ES6 arrow function
// const squareArrow = (x) => x * x;

// commented for improved version to shine
// const squareArrow = (x) => {
// 	return x* x;
// };


// console.log(squareArrow(10));


// ****First run through, doing another to get better handling on arrow functions
// const square = function (x) {
// 	return x * x;
// };

// const squareArrow = (x) => {
// 	return x * x;
// };

// const squareArrow = (x) => x * x;
//
// console.log(squareArrow(4));

// const getFirstName = (fullName) => {
// 	return fullName.split(' ')[0];
// }

// const getFirstName = (fullName) => fullName.split(' ')[0];
//
// console.log(getFirstName('James Doe'));
