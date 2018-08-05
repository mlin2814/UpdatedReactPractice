console.log('App.js is running');

var templateObject = {
	title: 'Greetings',
	subtitle: 'Meatbag'
};

var template = (
<div>
	<h1>{templateObject.title}</h1>
	<p>{templateObject.subtitle}</p>
	<ol>
		<li>Item 1</li>
		<li>Item 2</li>
	</ol>
</div>
);

var user = {
	name: 'Samuel',
	age: 12,
	location: 'Sydney'
};

// var userName = 'Vincent';
// var userAge = 29;
// var userLocation = 'New York';

var template2 = (
<div>
	<h1>{user.name}</h1>
	<p>Age: {user.age}</p>
	<p>Location: {user.location}</p>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);