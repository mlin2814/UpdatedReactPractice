console.log('App.js is running');

const templateObject = {
	title: 'Greetings',
	subtitle: 'Meatbag',
	options: ['One', 'Two']
};

const template = (
<div>
	<h1>{templateObject.title}</h1>
	{templateObject.subtitle && <p>{templateObject.subtitle}</p>}
	<p>{templateObject.options.length > 0 ? "Here are your options" : "No options"}</p>
	<ol>
		<li>Item 1</li>
		<li>Item 2</li>
	</ol>
</div>
);

// {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}

const user = {
	name: 'Matt',
	age: 24,
	location: 'NYC'
};

function getLocation(location){
	if (location) {
		return <p>Location: {location}</p>;
	} 
}

// var userName = 'Vincent';
// var userAge = 29;
// var userLocation = 'New York';

const template2 = (
<div>
	<h1>{user.name ? user.name : 'Anon'}</h1>
	{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
	{getLocation(user.location)}
</div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

