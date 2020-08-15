import React, { Component } from 'react';
import {google, Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MyMap extends Component {
   render() {
        const { values, handleChange } = this.props;

        function initAutocomplete() {
            var input = document.getElementById('pac-input');
            var searchBox = new window.google.maps.places.SearchBox(input);

            var markers = [];
            searchBox.addListener('places_changed', function() {
              var places = searchBox.getPlaces();

              if (places.length == 0) {
                return;
              }

              markers.forEach(function(marker) {
                marker.setMap(null);
              });
              markers = [];

              var bounds = new window.google.maps.LatLngBounds();
              places.forEach(function(place) {
                if (!place.geometry) {
                  console.log("Returned place contains no geometry");
                  return;
                }
                var icon = {
                  url: place.icon,
                  size: new window.google.maps.Size(71, 71),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(17, 34),
                  scaledSize: new window.google.maps.Size(25, 25)
                };

                markers.push(new window.google.maps.Marker({
                  icon: icon,
                  title: place.name,
                  position: place.geometry.location
                }));

                if (place.geometry.viewport) {
                  bounds.union(place.geometry.viewport);
                } else {
                  bounds.extend(place.geometry.location);
                }
              });

            });
          }
          initAutocomplete()
    return (
      <>
        <input
          id="pac-input"
          className="controls"
          type="text"
          placeholder="Search Box"
        />

        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
      </>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyBSTqIDd6jUkWYQ-oZAp726Kzgk6tkknJg'
})(MyMap);
