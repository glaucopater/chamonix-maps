import React from 'react';
import { StyledHero } from './styled';
const Hero = () => {
  return (
    <StyledHero>
      <h1>Chamonix Maps</h1>
      <article>
        <a href="/?sort=name">Sort by name</a>
        <a href="/?sort=difficulty">Sort by difficulty</a>
      </article>
    </StyledHero>
  );
};
export default Hero;
