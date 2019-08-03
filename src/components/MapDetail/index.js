import React from 'react';
import { StyledMapDetail } from './styled';
import Image from '../Image';
import MapPath from '../MapPath';
import strings from '../../constants/strings';

const MapDetail = ({ id, name, skiDifficulty, description, geoData }) => (
  <StyledMapDetail>
    <MapPath geoData={geoData} />
    <figure>
      <Image src={'random'} alt={name} />
      <figcaption>
        <a href={`/map/${id}/`}>
          <h3>
            {name} {' | '} {strings.difficulty}
            {skiDifficulty}
          </h3>
        </a>
      </figcaption>{' '}
    </figure>
    <p>{description}</p>
  </StyledMapDetail>
);

export default MapDetail;
