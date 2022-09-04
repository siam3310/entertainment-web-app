import styled from 'styled-components';

const StyledRatings = styled.div`
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

const Ratings = ({ ratings }) => {
  return (
    <StyledRatings>
      <p>{ratings.toFixed(1)}</p>
    </StyledRatings>
  );
};

export default Ratings;
