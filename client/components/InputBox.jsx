import React from 'react';
// import { connect } from 'react-redux';
// import { addURL } from '../actions/action.js'; 
// import axios from 'axios';
// import * as actions from "../actions/action.js"


class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.onSubForm = this.onSubForm.bind(this);
  }

  onSubForm (e) {
    e.preventDefault();
    const input = document.getElementById("addUrlForm");
    const url = input.value;
    const username = this.props.currentUser;
    // sends URL to store/reducer, which then THUNKS, sends a fetch to back end,
    // and dispatches the result to store
    this.props.addURL(username, url);
    
    // axios.post('http://localhost:3000/main/addURL', `${url}`)
    // // gets back something
    // .then((result)=>{
    //   this.props.dispatchAddUrl({
    //     username: this.props.currentUser,
    //     url_id: result.data.url_id,
    //     status: result.data.status,
    //     url: url
    //   })
    // })
    // .catch(err=>
    //   console.log('err onsubform', err)
    // )
  }

  render() {
    return (
      <div id="inputBox">
          <input id="addUrlForm" type="text" name="url"></input>
          <button type="submit" onClick={this.onSubForm}>Add url</button>
      </div>

    )
  };
}

export default InputBox;



