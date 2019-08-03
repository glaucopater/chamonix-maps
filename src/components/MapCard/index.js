import React from 'react';
import { StyledMapCard } from './styled';
import Image from '../Image';
import strings from '../../constants/strings';

const MapCard = ({ id, name, skiDifficulty, shortDescription }) => (
  <StyledMapCard>
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
  </StyledMapCard>
);

export default MapCard;
