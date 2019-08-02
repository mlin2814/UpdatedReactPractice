import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionApp extends React.Component {
  state = {
    options: []
  };
  // constructor(props){
  //   super(props);
  //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  //   this.handlePick = this.handlePick.bind(this);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
  //   this.state = {
  //     options: props.options
  //   };
  // }
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }));
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };
  handlePick = () => {
    const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    alert(option);
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Please Enter Valid Value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  };


  componentDidMount(){
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  render() {
    // const title = "Indecision";
    const subTitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOptions
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}



export default IndecisionApp;
