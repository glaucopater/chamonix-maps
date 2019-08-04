import React from 'react';
import PropTypes from 'prop-types';
import { OFFLINE } from '../../constants';
import { getRandomInt } from '../../utils/helpers';

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/),
);

const Image = ({ src, alt }) => {
  if (OFFLINE) {
    return <img src={images[getRandomInt(0, images.length)]} alt={alt} />;
  } else return <img src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
