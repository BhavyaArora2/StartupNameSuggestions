import React from 'react';
import './App.css';
import Header from '../Headers/Headers';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  state = {
    headerText: "Name-it",
    subHeading: "News Update",
    headerExpanded: true,
    suggestedNames: []
  };

  handleInputChange = (inputText) => {
    console.log(inputText)
    //alert("Hey you called?")
    this.setState({
        headerExpanded: !inputText,
        suggestedNames: inputText ? name(inputText) : [],
    });
    };

  render() {
    return (
      <div>
        <h1>
        <Header 
          headTitle={this.state.headerText}
          headerExpanded={this.state.headerExpanded}
        />
        </h1>
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames={this.state.suggestedNames} />


        <h3>{this.state.subHeading}</h3>
        <button onClick={() =>{
          
            this.setState({
              subHeading: "Lockdown",
            });
 
    }}
    >Click to see what is happening in India on 16th April,2021</button>
    </div>
      );
  }
}


export default App;
