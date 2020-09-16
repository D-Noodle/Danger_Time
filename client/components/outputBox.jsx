import React, { Component } from "react";

// turn into functional component
const OutputBox = (props) => {

  // 3 buttons: status (current), set interval on API status, historical data
    return (
      <div id="boxes">
        <div url_id={props.url_id}>
          url: {props.url}
          status: {props.status} 
          <button onClick={()=>{
            props.checkStatus(props.url_id)
          }}>check now</button>
        </div>
      </div> 
    )
  }

export default OutputBox;
