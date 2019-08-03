import React, { PureComponent } from 'react';
import { StyledMapDetail } from './styled';
import Image from '../Image';
import strings from '../../constants/strings';

export default class MapDetail extends PureComponent {
  render() {
    const { name, shortDescription, skiDifficulty } = this.props;
    return (
      <StyledMapDetail>
        <figure>
          <Image src={'chamonix'} alt={name} />
          <figcaption>
            <a href={`/map/${name}/`}> </a>
            <h3>
              {name} {' | '} {strings.difficulty}
              {skiDifficulty}
            </h3>
          </figcaption>{' '}
        </figure>{' '}
        <p>{shortDescription}</p>
      </StyledMapDetail>
    );
  }
}
