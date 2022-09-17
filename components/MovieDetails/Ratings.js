import styled from 'styled-components';
import { StarIcon } from '../../icons';

const StyledRatings = styled.div`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  svg {
    height: 0.7em;
  }

  @media (min-width: 600px) {
    justify-content: flex-start;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
`;

const Ratings = ({ ratings }) => {
  return (
    <StyledRatings>
      <p>{ratings.toFixed(1)}</p>
      <StarIcon />
    </StyledRatings>
  );
};

export default Ratings;
