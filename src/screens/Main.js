import React, { useState } from 'react';
import FA from 'react-fontawesome';
import Colors from '../constants/Colors';

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
    setUV(rand.toFixed(0))
    console.log(uv, myUV, bg, status, location);
    if (uv < 3) return setMyUV(Colors.green) + setBg(Colors.green10) + setStatus('Mild') + setLocation('Green Hill Zone, WA');
    if (uv < 6) return setMyUV(Colors.yellow) + setBg(Colors.yellow10) + setStatus('Moderate') + setLocation('Yellow Brick Road, UK');
    if (uv < 8) return setMyUV(Colors.orange) + setBg(Colors.orange10) + setStatus('High') + setLocation('Orange County, CA');
    if (uv < 11) return setMyUV(Colors.red) + setBg(Colors.red10) + setStatus('Very High') + setLocation('Red Rock, UT');
    return setMyUV(Colors.purple) + setBg(Colors.purple10) + setStatus('Extreme') + setLocation('Death Valley, CA');
  }

  return (
    <div className="App" style={{backgroundColor: bg}}>
      <div className="sol" style={{backgroundColor: myUV}}>
      </div>
      <img className="sol shadow spin" src="shadows.svg" alt="sun-shadow"/>
      <div className="content">
        <div className="label">UV Index for</div>
          <div className="location-name">
            <a href="/search">{location}</a>
          </div>
        <div className="uv-number" style={{color: myUV}}>{uv}</div>
        <div className="uv-status" style={{color: myUV}}>{status}</div>
      </div>
      <div className="fixed-button buddy" style={{backgroundColor: Colors.black25}} onClick={handleSetUV}>
        <FA name="random" />
      </div>
      <a href="/search">
        <div className="fixed-button">
          <FA name="search" style={{position: 'relative', top: -1}}/>
        </div>
      </a>
    </div>
  );
}

export default Main;
