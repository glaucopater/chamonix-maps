import React from 'react';
import { StyledMapDetail } from './styled';
import Image from '../Image';
import strings from '../../constants/strings';

const MapDetail = ({ id, name, skiDifficulty, shortDescription }) => (
  <StyledMapDetail>
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

    <p>{shortDescription}</p>
  </StyledMapDetail>
);

export default MapDetail;
