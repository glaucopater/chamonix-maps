import React from 'react';
import { StyledEmptyResults } from './styled';
import strings from '../../constants/strings';

const EmptyResults = () => {
  return (
    <StyledEmptyResults className="EmptyResults">
      {strings.noResults}
    </StyledEmptyResults>
  );
};
export default EmptyResults;
