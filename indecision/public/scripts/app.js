'use strict';

console.log('App.js is running');

var templateObject = {
	title: 'Greetings',
	subtitle: 'Meatbag',
	options: ['One', 'Two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		templateObject.title
	),
	templateObject.subtitle && React.createElement(
		'p',
		null,
		templateObject.subtitle
	),
	React.createElement(
		'p',
		null,
		templateObject.options.length > 0 ? "Here are your options" : "No options"
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

// {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}

var user = {
	name: 'Matt',
	age: 24,
	location: 'NYC'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
}

// var userName = 'Vincent';
// var userAge = 29;
// var userLocation = 'New York';

var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anon'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
