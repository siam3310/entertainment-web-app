import Image from 'next/image';
import styled from 'styled-components';
import { MoviesIcon, SeriesIcon } from '../icons';

const StyledSliderCard = styled.article`
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 8px;

  img {
    object-fit: cover;
  }
`;

const MovieCardDetails = styled.header`
  position: absolute;
  z-index: 10;
  bottom: 11%;
  left: 7%;

  div {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    margin-bottom: 0.3em;
  }

  div p {
    position: relative;
    color: rgba(255, 255, 255, 0.75);
    font-size: clamp(0.7rem, 1.4vw, 0.9rem);
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
    font-size: clamp(1rem, 2.6vw, 1.6rem);
    font-weight: 500;
  }
`;

const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.75)
  );
`;

const SliderCard = ({ movie }) => {
  return (
    <StyledSliderCard>
      <Thumbnail>
        <Image
          src={movie.thumbnail.regular.large}
          alt={movie.title}
          layout="responsive"
          width={470}
          height={258}
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
      <Gradient />
    </StyledSliderCard>
  );
};

export default SliderCard;
