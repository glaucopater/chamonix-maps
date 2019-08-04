import React from 'react';
import { StyledMapDetail } from './styled';
import Image from '../Image';
import MapPath from '../MapPath';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const MapDetail = ({ id, name, skiDifficulty, description, geoData }) => (
  <StyledMapDetail>
    {geoData && <MapPath geoData={geoData} />}
    <figure>
      <Image src={'random'} alt={name} />
      <figcaption>
        <NavLink to={`/map/${id}/`}>
          <h3>
            {name} {' | '} {strings.difficulty}
            {skiDifficulty}
          </h3>
        </NavLink>
      </figcaption>{' '}
    </figure>
    <p>{description}</p>
  </StyledMapDetail>
);

export default MapDetail;
