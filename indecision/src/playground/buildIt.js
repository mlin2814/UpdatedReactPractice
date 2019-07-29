class Build extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    })
  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<Build />, document.getElementById('app'));

// *****Old code, not using classes and components
// const app = {
//   title: 'Visibility Toggle'
// };
//
// const showDetails = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={hideDetails}>Hide details</button>
//       <p>Hey. These are some details you can now see</p>
//     </div>
//   );
//   ReactDOM.render(template,appRoot);
// }
//
// const hideDetails = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={showDetails}>Show details</button>
//     </div>
//   );
//   ReactDOM.render(template,appRoot);
// }
//
// const appRoot = document.getElementById('app');
//
// const renderVisApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={showDetails}>Show details</button>
//     </div>
//   );
//   ReactDOM.render(template,appRoot);
// }
//
// renderVisApp();
