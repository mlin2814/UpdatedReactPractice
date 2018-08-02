console.log('App.js is running');

var template = (
<div>
	<h1>Indecision App</h1>
	<p>This is some info</p>
	<ol>
		<li>Item 1</li>
		<li>Item 2</li>
	</ol>
</div>
);

var template2 = (
<div>
	<h1>Matt</h1>
	<p>Age: 26</p>
	<p>Location: Earth</p>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);