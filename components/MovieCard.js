import styled from 'styled-components';
import { MoviesIcon, SeriesIcon } from '../icons';

const StyledMovieCard = styled.article`
  cursor: pointer;
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 0.6rem;
`;

const Flex = styled.span`
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
`;

const MovieCardDetails = styled.header`
  div {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 0.3rem;
  }

  div span {
    position: relative;
    color: ${({ theme }) => theme.colors.grey};
    font-size: clamp(0.7rem, 2vw, 0.8rem);

    svg {
      width: clamp(0.8rem, 2vw, 0.9rem);
    }
  }

  div span + span::before {
    content: '';
    width: 3px;
    height: 3px;
    background: currentColor;
    position: absolute;
    top: 50%;
    left: -0.6rem;
    transform: translateY(-50%);
    display: inline-block;
    border-radius: 50%;
  }

  h3 {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    font-weight: 500;
  }
`;

const MovieCard = ({ movie }) => {
  return (
    <StyledMovieCard>
      <Thumbnail>
        <img src={movie.thumbnail.regular.large} alt={movie.title} />
      </Thumbnail>

      <MovieCardDetails>
        <div>
          <span>{movie.year}</span>
          <Flex>
            {movie.category === 'Movie' ? <MoviesIcon /> : <SeriesIcon />}
            {movie.category}
          </Flex>
          <span> {movie.rating}</span>
        </div>
        <h3>{movie.title}</h3>
      </MovieCardDetails>
    </StyledMovieCard>
  );
};

export default MovieCard;
