import React from 'react';
import FA from 'react-fontawesome';
import Colors from '../constants/Colors';

function Main() {

  return (
    <div className="App" style={{backgroundColor: Colors.purple10}}>
      <div className="sol" style={{backgroundColor: Colors.purple}}>
      </div>
      <img className="sol shadow spin" src="shadows.svg" alt="sun-shadow"/>
      <div className="content">
        <div className="label">UV Index for</div>
          <div className="location-name">
            <a href="/search">San Jose, CA</a>
          </div>
        <div className="uv-number" style={{color: Colors.purple}}>11</div>
        <div className="uv-status" style={{color: Colors.purple}}>Extreme</div>
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
