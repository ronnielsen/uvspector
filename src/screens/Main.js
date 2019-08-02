import React from 'react';
import FA from 'react-fontawesome';

function Main() {
  return (
    <div className="App">
      <div className="sol"></div>
      <div className="content">
        <div className="label">UV Index for</div>
          <div className="location-name">
            <a href="/search">Ronsville, CA</a>
          </div>
        <div className="uv-number">2</div>
        <div className="uv-status">Low</div>
      </div>
      <div className="fixed-button">
        <a href="/search">
          <FA name="search" />
        </a>
      </div>
    </div>
  );
}

export default Main;
