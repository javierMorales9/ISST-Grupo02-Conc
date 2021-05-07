import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={
          {
            lat: 40.4167,
            lng: -3.70325
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDfUwwhenggH8z1EFSlRtdSy8m0Cpq3A54'
})(MapContainer);