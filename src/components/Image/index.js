import React from 'react';
import PropTypes from 'prop-types';
import { OFFLINE } from '../../constants';
import { getRandomInt } from '../../utils/helpers';

import images from '../../mockup/images';

const Image = ({ src, alt }) => {
  if (OFFLINE) {
    src = images[getRandomInt(0, Object.keys(images).length)];
  }
  return <img src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
