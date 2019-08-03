import React from 'react';
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

export default Image;
