console.log("App is running");

var app = {
  title: 'Indecision App',
  subtitle: 'Run away as fast you can...',
  options: ['One', 'Two']
};

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
	name: 'Matt',
	age: 24,
	location: 'New York'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}

var template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anon'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}

  </div>
)


var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);

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
{/* <h1>{user.name ? user.name : 'Anon'}</h1> */}


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
