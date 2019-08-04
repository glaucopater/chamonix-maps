import React from 'react';
import PropTypes from 'prop-types';
import { StyledMapDetail } from './styled';
import Image from '../Image';
import MapPath from '../MapPath';
import strings from '../../constants/strings';

const MapDetail = ({ id, name, skiDifficulty, description, geoData }) => (
  <StyledMapDetail>
    {geoData && <MapPath geoData={geoData} />}
    <figure>
      <Image src={'random'} alt={name} />
      <figcaption>
        <h3>
          {strings.difficulty}
          {skiDifficulty}
        </h3>
      </figcaption>
    </figure>
    <p>{description}</p>
  </StyledMapDetail>
);

MapDetail.propTypes = {
  id: PropTypes.number,
  skiDifficulty: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
};
export default MapDetail;
