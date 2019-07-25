let count = 0;
const addOne = () => {
  count++;
  // console.log('addOne', count);
  renderCounterApp();
};
const subOne = () => {
  // console.log('subOne');
  count--;
  renderCounterApp();
}
const reset = () => {
  // console.log('reset');
  count = 0;
  renderCounterApp();
}

// + JSX does not have automatic data binding
// + htmlName is specific in JSX

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1> Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subOne}>-1</button>
      <button onClick={reset}>Reset</button>
      {/* <button onClick={() => {
        console.log('some value here');
      }}>+1</button> */}
    </div>
  );

  ReactDOM.render(template2, appRoot);
}

renderCounterApp();
