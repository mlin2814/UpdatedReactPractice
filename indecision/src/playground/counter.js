class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  componentDidMount(){
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });

  }
  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset(){
    this.setState(() => {
      return {
        count: 0
      };
    });
    // ****This is the asynchronous method and correct, so use this combination
    // this.setState(() => {
    //   return {
    //     count: 0
    //   };
    // });
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   };
    // });
    // ****************************************
    // console.log('handleReset');
    // alert('Reset Count');
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}



ReactDOM.render(<Counter/>, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//   count++;
//   // console.log('addOne', count);
//   renderCounterApp();
// };
// const subOne = () => {
//   // console.log('subOne');
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   // console.log('reset');
//   count = 0;
//   renderCounterApp();
// }
//
// // + JSX does not have automatic data binding
// // + htmlName is specific in JSX
//
// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1> Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={subOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//       {/* <button onClick={() => {
//         console.log('some value here');
//       }}>+1</button> */}
//     </div>
//   );
//
//   ReactDOM.render(template2, appRoot);
// }
//
// renderCounterApp();
