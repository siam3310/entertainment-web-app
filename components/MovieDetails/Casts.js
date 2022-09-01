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
  border: 1px solid currentColor;
  padding: 0 0.55em 0.1em;
  border-radius: 0.35em;
  font-size: var(--fs-cast);
  font-weight: 300;
`;

const Casts = ({ credits }) => {
  return (
    <StyledCasts>
      <h3>Top Casts</h3>
      <div>
        {credits
          .map((credit) => {
            return <Cast key={credit.id}>{credit.name}</Cast>;
          })
          .slice(0, 4) || []}
      </div>
    </StyledCasts>
  );
};

export default Casts;
