/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import OutputBoxContainer from './OutputBoxContainer.jsx';
import InputBox from '../components/InputBox.jsx';
import Graph from '../components/graph/graph'
import * as actions from '../actions/action';

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
  urlList: state.outputs.urlList,
  url_id: state.outputs.urlList[0].url_id,
  url: state.outputs.urlList[0].url,
});

const mapDispatchToProps = (dispatch) => ({
  addURL: (username, url) => dispatch(actions.addURL(username, url)),
  checkStatus: (statusObj) => dispatch(actions.checkStatus(statusObj)),
});

const MainContainer = (props) => {
  // destructure props here ----------
  const {
    addURL, currentUser, urlList, url_id, url, checkStatus,
  } = props;
  return (
    <div>
      <Graph />
      {/* <InputBox
        id="inputboxcontainer"
        addURL={addURL}
        currentUser={currentUser}
      />

      <div id="outputboxcontainer">
        <OutputBoxContainer
            // OUTPUT STATE
          urlList={urlList}
          url_id={url_id}
          url={url}
            // OUTPUT DISPATCH ACTION
          checkStatus={checkStatus}
        />
      </div> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
