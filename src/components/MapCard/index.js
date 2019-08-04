import React from 'react';
import PropTypes from 'prop-types';
import { StyledMapCard } from './styled';
import Image from '../Image';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const MapCard = ({ id, name, skiDifficulty, shortDescription }) => (
  <StyledMapCard>
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
    <p>{shortDescription}</p>
  </StyledMapCard>
);

MapCard.propTypes = {
  id: PropTypes.number,
  skiDifficulty: PropTypes.number,
  name: PropTypes.string,
  shortDescription: PropTypes.string,
};

export default MapCard;
