import React from 'react';
import Geosuggest from 'react-geosuggest';
import FA from 'react-fontawesome';

function Search() {
  const fixtures = [
    {label: 'SF Bay Area', location: {lat: 37.8272, lng: 122.2913}},
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
          radius="20" />
        <div className="fixed-button invert">
          <a href="/">
            <FA name="check" />
          </a>
        </div>
        <div className="fixed-button cancel">
          <a href="/">
            <FA name="times" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Search;
