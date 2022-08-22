import Image from 'next/image';
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

const MovieCardDetails = styled.header`
  div {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    margin-bottom: 0.3rem;
  }

  div p {
    position: relative;
    color: rgba(255, 255, 255, 0.75);
    font-size: clamp(0.7rem, 2vw, 0.8rem);
    font-weight: 300;
  }

  div p:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-shrink: 0;

    svg {
      height: 12px;
      width: 12px;
    }
  }

  div p + p::before {
    content: '';
    width: 3px;
    height: 3px;
    position: absolute;
    top: 50%;
    left: -0.7rem;
    transform: translateY(-50%);
    border-radius: 50%;
    background: currentColor;
    display: inline-block;
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
        <Image
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          layout="responsive"
          height={62}
          width={100}
        />
      </Thumbnail>

      <MovieCardDetails>
        <div>
          <p>{movie.year}</p>
          <p>
            {movie.category === 'Movie' ? <MoviesIcon /> : <SeriesIcon />}
            {movie.category}
          </p>
          <p> {movie.rating}</p>
        </div>
        <h3>{movie.title}</h3>
      </MovieCardDetails>
    </StyledMovieCard>
  );
};

export default MovieCard;
