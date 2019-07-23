'use strict';

console.log("App is running");

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indeicision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item 1'
    ),
    React.createElement(
      'li',
      null,
      'Item 2'
    )
  )
);

var user = {
  name: 'Matt',
  age: 24,
  location: 'NYC'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

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
