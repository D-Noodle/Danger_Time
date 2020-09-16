import React from 'react';
import { connect } from 'react-redux';
import OutputBoxContainer from './OutputBoxContainer.jsx';
import InputBox from '../components/InputBox.jsx';
import * as actions from '../actions/action';

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  addURL: (username, url) => dispatch(actions.addURL(username, url)),
});

const MainContainer = (props) => {
  const { addURL, currentUser } = props;
  return (
    <div>
      <InputBox
        dispatchAddUrl={addURL}
        currentUser={currentUser}
      />

      <div id="outputboxcontainer">
        <OutputBoxContainer />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
