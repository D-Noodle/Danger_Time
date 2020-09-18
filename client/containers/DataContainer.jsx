import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions/action";
import { Graph } from "../components/graph/graph";

//this component sits on top of maincontainer or app and will hold graphs

const mapStateToProps = (state) => ({
  currentUser: state.outputs.currentUser,
  urlList: state.outputs.urlList,
  graphData: state.outputs.graphData,
});
//dummy url-id: 75 (in database)
const url_id = 97;

const mapDispatchToProps = (dispatch) => ({
  loadGraphData: (url_id) => dispatch(actions.loadGraphData(url_id)),
  checkStatus: (url_id) => dispatch(actions.checkStatus(url_id))
});

class DataContainer extends Component {
  constructor(props) {
    super(props);
  }

  //when user logs in, this component will render graph for first url listed in output container
  // pull data from database for first url first, and then
  //send to backend url-id, and how many rows of data we want to retrieve
  //backend will send back

  // componentDidUpdate() {
  //   this.props.loadGraphData(url_id);
  // }

  componentDidMount() {
    this.props.loadGraphData(url_id)

    setInterval( ()=>{
      this.props.loadGraphData(url_id)
    }, 10000)
  }

  componentWillUnmount(){
    clearInterval();
  }  

  render() {
    //conditional rendering of url data viz boxes, based on which user is logged in
    const { graphData, checkStatus } = this.props;
    // const pingTimer = setInterval(() => checkStatus("https://pokeapi.co/api/v2/pokemon/ditto", 105), 5000);
    return (
      <div id="graph-container">
        <Graph graphData={graphData} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
