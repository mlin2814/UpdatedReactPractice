import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

<<<<<<< HEAD
var template = (
  <div>
    <h1>Indeicision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

var user = {
	name: 'Matt',
	age: 24,
	location: 'NYC'
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>{user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');
=======

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
>>>>>>> c068879a7a0907966eac850350ad7a9e90963592

// ReactDOM.render(<Layout><p>This is inline text</p></Layout>, document.getElementById('app'))

<<<<<<< HEAD
ReactDOM.render(templateTwo, appRoot);


// const templateObject = {
// 	title: 'Greetings',
// 	subtitle: 'Meatbag',
// 	options: ['One', 'Two']
// };
=======
// const Layout = (props) => {
//   return (
//     <div>
//       <p>Header</p>
//       {props.children}
//       <p>Footer</p>
//     </div>
//   );
// }
>>>>>>> c068879a7a0907966eac850350ad7a9e90963592
//
// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//   </div>
// );

// class OldSyntax {
//   constructor() {
//     this.name = "Mike";
//   }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
//
//
// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi, my name is ${this.name}`;
//   }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting);

// import './utils.js';
// import subtract, { add, square } from './utils.js';
//
// console.log('app.js is running');
// console.log(square(12));
// console.log(add(12, 5));
// console.log(subtract(12, 5));

// import isSenior, { isAdult, canDrink } from './person.js';
//
// console.log(isAdult(12));
// console.log(isAdult(44));
//
// console.log(canDrink(15));
// console.log(canDrink(21));
//
// console.log(isSenior(12));
// console.log(isSenior(75));

// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// const template = <p>testing 1, 2, 3</p>
// ReactDOM.render(template, document.getElementById('app'));
