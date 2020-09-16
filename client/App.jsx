import React, { Component } from "react";
import MainContainer from './containers/MainContainer';

// maybe change to functional component?
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='main' >
        <MainContainer/>
      </div>
    );
  }
}

export default App;
