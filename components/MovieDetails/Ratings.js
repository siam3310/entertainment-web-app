import styled from 'styled-components';

const StyledRating = styled.div`
  text-align: center;
  font-size: 2rem;
  margin-bottom: var(--mb-gap);

  @media (min-width: 600px) {
    text-align: unset;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.2rem;
  }
`;

const Ratings = ({ vote_average }) => {
  return (
    <StyledRating>
      <p>{vote_average.toFixed(1)}</p>
    </StyledRating>
  );
};

export default Ratings;
