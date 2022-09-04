import styled from 'styled-components';

const StyledHeading = styled.div`
  text-align: center;
  margin-bottom: 0.6rem;

  h1 {
    font-size: var(--fs-title);
    margin-bottom: 0.4rem;
    font-weight: 300;
  }

  h2 {
    font-weight: 300;
    font-size: var(--fs-slogan);
    font-style: italic;
    color: ${({ theme }) => theme.colors.grey};
  }

  @media (min-width: 600px) {
    text-align: unset;
    margin-bottom: 1rem;

    h1 {
      margin-bottom: 0.5rem;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 1rem;

    h1 {
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
  }
`;

const Heading = ({ title, tagline }) => {
  return (
    <StyledHeading>
      <h1>{title}</h1>
      <h2>{tagline}</h2>
    </StyledHeading>
  );
};

export default Heading;
