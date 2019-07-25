const app = {
  title: 'Visibility Toggle'
};

const showDetails = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={hideDetails}>Hide details</button>
      <p>Hey. These are some details you can now see</p>
    </div>
  );
  ReactDOM.render(template,appRoot);
}

const hideDetails = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={showDetails}>Show details</button>
    </div>
  );
  ReactDOM.render(template,appRoot);
}

const appRoot = document.getElementById('app');

const renderVisApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={showDetails}>Show details</button>
    </div>
  );
  ReactDOM.render(template,appRoot);
}

renderVisApp();
