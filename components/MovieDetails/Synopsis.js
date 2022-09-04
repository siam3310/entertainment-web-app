import styled from 'styled-components';

const StyledSynopsis = styled.div`
  margin-bottom: var(--mb-gap);

  h3 {
    font-size: var(--fs-body);
    margin-bottom: 0.3rem;
  }

  p {
    font-size: var(--fs-body);
    font-weight: 300;
  }

  @media (min-width: 1024px) {
    h3 {
      margin-bottom: 0.4rem;
    }
  }
`;

const Synopsis = ({ overview }) => {
  return (
    <StyledSynopsis>
      <h3>Synopsis</h3>
      <p>{`${overview ? `${overview}` : 'N/A'}`}</p>
    </StyledSynopsis>
  );
};

export default Synopsis;
