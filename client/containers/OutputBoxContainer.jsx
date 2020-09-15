import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/action.js";
import OutputBox from "../components/OutputBox";


const mapStateToProps = (state) => ({
  urlList: state.outputs.urlList,
  url_id: state.outputs.urlList[0].url_id,
  url: state.outputs.urlList[0].url,
});

const mapDispatchToProps = (dispatch) => ({
  checkStatus: (statusObj) => dispatch(actions.checkNow(statusObj)),
});


class OutputBoxContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childrenList = this.props.urlList.map( (index) => 
      <OutputBox
        key={index.url_id}
        url_id={index.url_id}
        url={index.url}
        status={ index.status }
        dispatchCheckStatus={this.props.checkStatus}
      />
    )

    return (
      <div id="outputBox">
        {childrenList}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutputBoxContainer);
