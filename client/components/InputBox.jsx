import React from 'react';
// import { connect } from 'react-redux';
// import { addURL } from '../actions/action.js';
// import axios from 'axios';
// import * as actions from "../actions/action.js"

const InputBox = (props) => {
  const username = props.currentUser;
  // sends URL to store/reducer, which then THUNKS
  // sends a fetch to back end, and dispatches the result to store
  return (
    <div id="inputBox">
      <input id="addUrlForm" type="text" name="url" />
      <button
        type="submit"
        onClick={() => {
          const input = document.getElementById('addUrlForm');
          const url = input.value;
          props.addURL(username, url);
        }}
      >
        Add url
      </button>
    </div>
  );
};

export default InputBox;
