import React from 'react';
import Geosuggest from 'react-geosuggest';
import FA from 'react-fontawesome';
import Colors from '../constants/Colors';

function Search() {
  const fixtures = [
    {label: 'San Jose, CA', location: {lat: 37.8272, lng: 122.2913}},
  ];

  const google = window.google;

  return (
    <div className="App">
      <div className="search-container">
        <div className="title">Search</div>
        <Geosuggest
          placeholder="Start typing!"
          initialValue="San Jose, CA"
          fixtures={fixtures}
          location={new google.maps.LatLng(37.8272, 122.2913)}
          radius="20" autofocus={true}
          country="us"
           />
         <div className="fixed-button invert" style={{backgroundColor: Colors.green}}>
          <a href="/">
            <FA name="check" />
          </a>
        </div>
        <div className="fixed-button cancel" style={{backgroundColor: Colors.white25}}>
          <a href="/">
            <FA name="times" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Search;
