import React from 'react';
import { MapContainer as Map, TileLayer, Polyline } from 'react-leaflet';
import { transformCoordinates } from '../../utils/helpers';
import { StyledWrapper } from './styled';
import { DEFAULT_MAP_ZOOM } from '../../constants';
import 'leaflet/dist/leaflet.css';

const MapPath = props => {
  const points = transformCoordinates(props.geoData.coordinates);
  const center = points[0][0];

  return (
    <StyledWrapper>
      <Map center={center} zoom={DEFAULT_MAP_ZOOM}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline color="lime" positions={points} />
      </Map>
    </StyledWrapper>
  );
};
export default MapPath;
