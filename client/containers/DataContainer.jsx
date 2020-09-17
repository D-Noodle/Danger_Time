import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions/action";

//this component sits on top of maincontainer or app and will hold graphs

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
  urlList: state.outputs.urlList,
});
//dummy url-id: 75 (in database)
const url_id = 75;
//rows of data, lets user choose how many rows of data they want to visualize
const rows = 50;
let statusData;

const mapDispatchToProps = (dispatch) => ({});

class DataContainer extends Component {
  constructor(props) {
    super(props);
  }

  //when user logs in, this component will render graph for first url listed in output container
  // pull data from database for first url first, and then
  //send to backend url-id, and how many rows of data we want to retrieve
  //backend will send back
  componentDidMount() {
    axios
      .post("http://localhost:3000/main/data", { url_id, rows })
      .then((data) => {
        console.log("data container", data);
        // statusData = data;
      })
      .catch((error) => {
        console.log("error message from datacontainer", error);
      });
  }

  render() {
    //conditional rendering of url data viz boxes, based on which user is logged in
    return <div>statusData!!</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
