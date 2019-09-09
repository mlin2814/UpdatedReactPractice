import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// ReactDOM.render(<Layout><p>This is inline text</p></Layout>, document.getElementById('app'))

// const Layout = (props) => {
//   return (
//     <div>
//       <p>Header</p>
//       {props.children}
//       <p>Footer</p>
//     </div>
//   );
// }
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
