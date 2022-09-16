import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { MoviesIcon, SeriesIcon, StarIcon } from '../icons';

const StyledSliderCard = styled.article`
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: 768px) {
    border-radius: 9px;
  }
`;

const MovieCardDetails = styled.header`
  position: absolute;
  z-index: 10;
  bottom: 11%;
  left: 7%;
  right: 7%;
  display: grid;

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

  div p:nth-child(2),
  div p:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-shrink: 0;

    svg {
      height: 1em;
      width: 1em;
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
    font-size: clamp(1rem, 2.3vw, 1.6rem);
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    0deg,
    rgba(0, 0, 0, 0.65) 26%,
    rgba(255, 255, 255, 0) 70%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const SliderCard = ({
  id,
  backdropPath,
  mediaType,
  title,
  name,
  releaseDate,
  firstAirDate,
  voteAverage,
}) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    if (mediaType === 'movie') {
      router.push(`/movies/${id}`);
    } else if (mediaType === 'tv') {
      router.push(`/tvseries/${id}`);
    }
  };

  return (
    <StyledSliderCard onClick={showDetailsHandler}>
      <Thumbnail>
        <Image
          src={
            backdropPath
              ? `https://image.tmdb.org/t/p/original${backdropPath}`
              : '/assets/placeholder-image.png'
          }
          alt={title || name}
          layout="responsive"
          objectFit="cover"
          width={470}
          height={258}
        />
      </Thumbnail>
      <MovieCardDetails>
        <div>
          <p>
            {mediaType == 'movie'
              ? releaseDate.slice(0, 4)
              : firstAirDate.slice(0, 4)}
          </p>
          <p>
            {mediaType == 'movie' ? <MoviesIcon /> : <SeriesIcon />}
            {mediaType == 'movie' ? 'Movie' : 'TV Series'}
          </p>
          <p>
            <StarIcon /> {voteAverage.toFixed(1)}
          </p>
        </div>
        <h3>{title || name}</h3>
      </MovieCardDetails>
      <Gradient />
    </StyledSliderCard>
  );
};

export default SliderCard;
