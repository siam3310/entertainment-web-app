import styled from 'styled-components';

export const AppWrapper = styled.div`
  max-width: 1366px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
  }
`;
