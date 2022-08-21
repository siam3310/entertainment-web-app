import styled from 'styled-components';

export const GridWrapper = styled.div`
  margin: 1.5rem 0;

  h1 {
    font-size: clamp(1.1rem, 2.5vw, 1.85rem);
    font-weight: 300;
    margin-bottom: 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.5rem;
  }
`;
