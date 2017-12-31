import React from 'react';
import GoogleMapReact from 'google-map-react';
import { number } from 'prop-types';

import { GMAPAPIKEY } from '../utils/config';

import marker from '../images/marker.png';

GoogleMap.propTypes = {
  lat: number.isRequired,
  lon: number.isRequired,
};

const MapMarker = () => (
  <div className="marker-container">
    <img className="map-marker" src={marker} alt="Map Marker" />
  </div>
);

export default function GoogleMap({ lat, lon: lng }) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: GMAPAPIKEY,
      }}
      center={{ lat, lng }}
      defaultZoom={13}
    >
      <MapMarker lat={lat} lng={lng} />
    </GoogleMapReact>
  );
}
