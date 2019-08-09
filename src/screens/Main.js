import React, { useState, useEffect } from 'react';
import FA from 'react-fontawesome';
import Colors from '../constants/Colors';
import { Link } from "react-router-dom";

function Main() {

  const [uv, setUV] = useState(3);
  const [myUV, setMyUV] = useState(Colors.green);
  const [bg, setBg] = useState(Colors.green10);
  const [status, setStatus] = useState('Mild');
  const [location, setLocation] = useState('Green Hill Zone, WA')

  const min = 1;
  const max = 14;
  const rand = min + (Math.random() * (max-min) - Math.random());

  const handleSetUV = e => {
    let num = rand.toFixed(0);
    if (num < 3) {
      setUV(num)
      setMyUV(Colors.green)
      setBg(Colors.green10)
      setStatus('Mild')
      setLocation('Green Hill Zone, WA')
    }
    else if (num < 6) {
      setUV(num)
      setMyUV(Colors.yellow)
      setBg(Colors.yellow10)
      setStatus('Moderate')
      setLocation('Yellow Brick Road, UK')
    }
    else if (num < 8) {
      setUV(num)
      setMyUV(Colors.orange)
      setBg(Colors.orange10)
      setStatus('High')
      setLocation('Orange County, CA')
    }
    else if (num < 11) {
      setUV(num)
      setMyUV(Colors.red)
      setBg(Colors.red10)
      setStatus('Very High')
      setLocation('Red Rock, UT')
    }
    else {
      setUV(num)
      setMyUV(Colors.purple)
      setBg(Colors.purple10)
      setStatus('Extreme')
      setLocation('Death Valley, CA')
    }
  }

  useEffect(() => {
    console.log(uv, myUV, bg, status, location)
    }
  )

  return (
    <div>
      <div className="App" style={{backgroundColor: bg}}>
        <div className="sol" style={{backgroundColor: myUV}}>
        </div>
        <img className="sol shadow spin" src="shadows.svg" alt="sun-shadow"/>
        <div className="content">
          <div className="label">UV Index for</div>
            <div className="location-name">
              <Link to="/search">{location}</Link>
            </div>
          <div className="uv-number" style={{color: myUV}}>{uv}</div>
          <div className="uv-status" style={{color: myUV}}>{status}</div>
        </div>
        <div className="fixed-button buddy" style={{backgroundColor: Colors.black25}} onClick={handleSetUV}>
          <FA name="random" />
        </div>
        <Link to="/search">
          <div className="fixed-button">
            <FA name="search" style={{position: 'relative', top: -1}}/>
          </div>
        </Link>
      </div>
      <div className="browser">Flip your device, or make your browser bigger.</div>
    </div>
  );
}

export default Main;
