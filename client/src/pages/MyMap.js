import React, { Component } from 'react';
import Map from './components/Map';

class MyMap extends Component {
  render() {
    return(
        <div>
        <Map
     google={this.props.google}
     center={{lat: -33.865143, lng: 151.209900}}
     height='300px'
     width='30px'
     zoom={15}
    />
    </div>
      )
  }
}
export default MyMap;