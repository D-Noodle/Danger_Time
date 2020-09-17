import React, { Component } from 'react';

// turn into functional component
const OutputBox = (props) => {
  const { url_id, url, status, checkStatus } = props;
  // 3 buttons: status (current), set interval on API status, historical data
  return (
    <div id="boxes">
      <div url_id={url_id}>
        url:
        {' '}
        {url}
        <br />
        status:
        {' '}
        {status}
        <br />
        <br />
        <button
          type="button"
          onClick={() => checkStatus(url_id, url)}
        >
          check now
        </button>
      </div>
    </div>
  );
};

export default OutputBox;
