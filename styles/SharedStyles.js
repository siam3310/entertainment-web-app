import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1rem;

  @media (min-width: 600px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 0;
  }
`;

export const AppWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding-bottom: 1.5rem;
  overflow-x: clip;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 4.375rem calc(100% - (4.375rem + 1.5rem));
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 5.375rem calc(100% - (5.375rem + 2rem));
    gap: 2rem;
    padding: 2rem;
  }
`;
