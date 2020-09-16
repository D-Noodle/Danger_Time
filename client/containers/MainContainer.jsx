import React, { Component } from "react";
import { connect } from "react-redux";
import OutputBoxContainer from "./OutputBoxContainer.jsx";
import InputBox from "../components/InputBox.jsx";
import * as actions from '../actions/action'

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
  urlList: state.outputs.urlList,
  url_id: state.outputs.urlList[0].url_id,
  url: state.outputs.urlList[0].url,
});

const mapDispatchToProps = (dispatch) => ({
  addURL: (username, url) => dispatch(actions.addURL(username, url)),
  checkStatus: (statusObj) => dispatch(actions.checkStatus(statusObj))
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
          <InputBox id='inputboxcontainer'
          addURL={ addURL }
          currentUser={ currentUser }
          />

        <div id='outputboxcontainer' >
          <OutputBoxContainer
            // OUTPUT STATE
            urlList={this.props.urlList}
            url_id={this.props.url_id}
            url={this.props.url} 
            // OUTPUT DISPATCH ACTION
            checkStatus={this.props.checkStatus}
            />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
