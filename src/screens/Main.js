import React, { useState } from 'react';
import FA from 'react-fontawesome';
import Colors from '../constants/Colors';

function Main() {
  const [uv, setUV] = useState(7);

  const  getBackgroundColor = () => {
  let { uv } = this.props.main;
  if (uv < 3) return Colors.green;
  if (uv < 6) return Colors.yellow;
  if (uv < 8) return Colors.orange;
  if (uv < 11) return Colors.red;
  return Colors.purple;
  }

  const getStatus = () => {
    let { uv } = this.props.main;
    if (uv < 3) return 'Low';
    if (uv < 6) return 'Moderate';
    if (uv < 8) return 'High';
    if (uv < 11) return 'Very High';
    return 'Extreme';
}
  return (
    <div className="App" style={{backgroundColor: Colors.purple10}}>
      <div className="sol" style={{backgroundColor: Colors.purple}}>
      </div>
      <img className="sol shadow spin" src="shadows.svg"/>
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

const mapStateToProps = (state) => {
  let { uv } = state.main
  return {
    main: { uv }
  }
}

export default Main;
