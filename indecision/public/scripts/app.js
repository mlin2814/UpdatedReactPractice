'use strict';

console.log('App.js is running');

var templateObject = {
	title: 'Greetings',
	subtitle: 'Meatbag'
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		templateObject.title
	),
	React.createElement(
		'p',
		null,
		templateObject.subtitle
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
	name: 'Samuel',
	age: 12,
	location: 'Sydney'
};

// var userName = 'Vincent';
// var userAge = 29;
// var userLocation = 'New York';

var template2 = React.createElement(
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
		'Age: ',
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

ReactDOM.render(template, appRoot);
