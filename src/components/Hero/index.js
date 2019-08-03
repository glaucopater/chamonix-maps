import React from 'react';
import { StyledHero } from './styled';
import strings from '../../constants/strings';
const Hero = () => {
  return (
    <StyledHero>
      <h1>
        <a href="/"> {strings.pageTitle} </a>
      </h1>
      <article>
        <a href="/?sort=name">{strings.sortByName} </a>
        <a href="/?sort=name&direction=DESC"> {strings.sortByNameDesc} </a>
        <a href="/?sort=difficulty"> {strings.sortByDifficulty}</a>
        <a href="/?sort=difficulty&direction=DESC">
          {strings.sortByDifficultyDesc}
        </a>
      </article>
    </StyledHero>
  );
};
export default Hero;
