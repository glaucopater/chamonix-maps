import React from 'react';
import { StyledHero } from './styled';
import strings from '../../constants/strings';
import { NavLink } from 'react-router-dom';

const Hero = () => (
  <StyledHero>
    <h1>
      <NavLink to="/">{strings.pageTitle} </NavLink>
    </h1>
    <article>
      <NavLink to="/?sort=name">{strings.sortByName}</NavLink>
      <NavLink to="/?sort=name&direction=DESC">
        {strings.sortByNameDesc}
      </NavLink>
      <NavLink to="/?sort=difficulty">{strings.sortByDifficulty}</NavLink>
      <NavLink to="/?sort=difficulty&direction=DESC">
        {strings.sortByDifficultyDesc}
      </NavLink>
    </article>
  </StyledHero>
);
export default Hero;
