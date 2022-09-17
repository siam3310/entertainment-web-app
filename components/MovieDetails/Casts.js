import styled from 'styled-components';

const StyledCasts = styled.div`
  margin-bottom: var(--mb-gap);

  h3 {
    font-size: var(--fs-body);
    margin-bottom: 0.5rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  @media (min-width: 1024px) {
    h3 {
      margin-bottom: 0.7rem;
    }
  }
`;

const Cast = styled.p`
  background-color: ${({ theme }) => theme.colors.semiDarkBlue};
  padding: 0.2em 0.6em 0.3em;
  border-radius: 0.35em;
  font-size: var(--fs-cast);
  font-weight: 300;

  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const Casts = ({ credits }) => {
  return (
    <StyledCasts>
      <h3>Top Casts</h3>
      <div>
        {credits[0]
          ? credits
              .map((credit) => {
                return <Cast key={credit.id}>{credit.name}</Cast>;
              })
              .slice(0, 10) || []
          : 'N/A'}
      </div>
    </StyledCasts>
  );
};

export default Casts;
