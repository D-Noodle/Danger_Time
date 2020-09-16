import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";

//this component sit on top of maincontainer or app and will hold boxes

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
  urlList: state.outputs.urlList,
});
//dummy url-id: 75 (in database)
const url_id = 75;
//rows of data, lets user choose how many rows of data they want to visualize
const rows = 50;

const mapDispatchToProps = (dispatch) => ({});

class DataContainer extends Component {
  constructor(props) {
    super(props);
  }

  //when user logs in, this component will pull data from database for each url that belongs to the user
  //send to backend url-id, and how many rows of data we want to retrieve
  //backend will send back
  componentDidMount() {
    axios
      .post("http://localhost:3000/main/checkNow", {
        url_id,
        rows,
      })
      .then((data) => console.log("data container", data))
      .catch((error) => {
        console.log("error message", error);
      });
  }

  render() {
    //conditional rendering of url data viz boxes, based on which user is logged in
    return;
  }
}

export default DataContainer;
