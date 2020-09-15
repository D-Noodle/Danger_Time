import React, { Component } from "react";
import { connect } from "react-redux";
import OutputBoxContainer from "./OutputBoxContainer.jsx";
import InputBox from "../components/InputBox.jsx";
import * as actions from '../actions/action'

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addURL: (urlObj) => dispatch(actions.addURL(urlObj)),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <InputBox 
          dispatchAddUrl={this.props.addURL}
          currentUser={this.props.currentUser}
          />

        <div id='outputboxcontainer' >
          <OutputBoxContainer  />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
