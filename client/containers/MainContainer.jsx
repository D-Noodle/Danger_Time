import React, { Component } from "react";
import { connect } from "react-redux";
import OutputBoxContainer from "./OutputBoxContainer.jsx";
import InputBox from "../components/InputBox.jsx";
import DataContainer from "./DataContainer";
import * as actions from "../actions/action";

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addURL: (username, url) => dispatch(actions.addURL(username, url)),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // destructure props here ----------
    const { addURL, currentUser } = this.props;
    return (
      <div>
        <InputBox
          id="inputboxcontainer"
          addURL={addURL}
          currentUser={currentUser}
        />

        <div id="outputboxcontainer">
          <OutputBoxContainer />
        </div>
        <div id="datacontainer">
          <DataContainer />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
