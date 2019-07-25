'use strict';

console.log("App is running");

var app = {
  title: 'Indecision App',
  subtitle: 'Run away as fast you can...',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderFormApp();
};

var resetOptions = function resetOptions() {
  app.options = [];
  renderFormApp();
};

var onMakeDecision = function onMakeDecision() {
  var randNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randNum];
  alert(option);
  console.log(randNum);
};

var appRoot = document.getElementById('app');

var renderFormApp = function renderFormApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: resetOptions },
      'Remove All Options'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          'Option: ',
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderFormApp();

// *****No longer using for further lessons
// const user = {
// 	name: 'Matt',
// 	age: 24,
// 	location: 'New York'
// };
//
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return undefined;
//   }
// }
//
// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : 'Anon'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//
//   </div>
// )

// *****Still using var, but the above will be a mix of let and const
// var app = {
//   title: 'Indecision App',
//   subtitle: 'Run away as fast you can...',
//   options: ['One', 'Two']
// };
//
// var template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );
//
// var user = {
// 	name: 'Matt',
// 	age: 24,
// 	location: 'New York'
// };
//
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return undefined;
//   }
// }
//
// var template2 = (
//   <div>
//     <h1>{user.name ? user.name : 'Anon'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//
//   </div>
// )
//
//
// var appRoot = document.getElementById('app');
//
//
// ReactDOM.render(template, appRoot);

// ******Here we have an example of using tenerary operator, and && operator, and rendering to the DOM if an element exists
// var app = {
//   title: 'Indecision App',
//   subtitle: 'Run away as fast you can...',
//   options: ['One', 'Two']
// };
//
// var template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );

// ******This is how to apply a ternerary operator in React. You have the object property you want to evaluate, then the operator, then if the object property doesn't render true, you get the property you hard code to show false
{} /* <h1>{user.name ? user.name : 'Anon'}</h1> */

// const templateObject = {
// 	title: 'Greetings',
// 	subtitle: 'Meatbag',
// 	options: ['One', 'Two']
// };
//
// const template = (
// <div>
// 	<h1>{templateObject.title}</h1>
// 	{templateObject.subtitle && <p>{templateObject.subtitle}</p>}
// 	<p>{templateObject.options.length > 0 ? "Here are your options" : "No options"}</p>
// 	<ol>
// 		<li>Item 1</li>
// 		<li>Item 2</li>
// 	</ol>
// </div>
// );

// {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}

// const user = {
// 	name: 'Matt',
// 	age: 24,
// 	location: 'NYC'
// };
//
// function getLocation(location){
// 	if (location) {
// 		return <p>Location: {location}</p>;
// 	}
// }

// var userName = 'Vincent';
// var userAge = 29;
// var userLocation = 'New York';

// const template2 = (
// <div>
// 	<h1>{user.name ? user.name : 'Anon'}</h1>
// 	{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// 	{getLocation(user.location)}
// </div>
// );
//
// const appRoot = document.getElementById('app');
//
// ReactDOM.render(template, appRoot);
