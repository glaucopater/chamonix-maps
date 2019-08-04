import styled from 'styled-components';

export const StyledMapCard = styled.li`
  border: 1px solid #e2e2e250;
  border-radius: 0.5rem;
  background: #eee;
  opacity: 0.8;
  transition: 0.5s ease-in;

  :hover {
    opacity: 1;
    transition: 0.5s ease-out;
  }

  > figure {
    overflow: hidden;
    position: relative;
    min-height: 220px;
    max-height: 220px;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  > figure > img {
    width: 100%;
  }

  > figure > figcaption {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
  }

  > figure > figcaption > h3 {
    color: white;
    padding: 0.75rem;
    font-size: 1.25rem;
    text-transform: capitalize;
  }

  > p {
    font-size: 1rem;
    line-height: 1.5;
    padding: 1rem 0.75rem;
    color: #666666;
    text-transform: capitalize;
  }

  > a {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
  }
`;
