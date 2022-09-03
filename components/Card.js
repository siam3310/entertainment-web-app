import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { MoviesIcon, SeriesIcon } from '../icons';

const StyledCard = styled.article`
  cursor: pointer;
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 0.6rem;
`;

const CardDetails = styled.header`
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
    white-space: wrap;
  }
`;

const Card = ({ item, mediaType }) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    if (mediaType === 'movie') {
      router.push(`/movies/${item.id}`);
    } else if (mediaType === 'tvseries') {
      router.push(`/tvseries/${item.id}`);
    }
  };
  const releaseDate = item.release_date || [];
  const firstAirDate = item.first_air_date || [];
  return (
    <StyledCard onClick={showDetailsHandler}>
      <Thumbnail>
        <Image
          src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          alt={mediaType == 'movie' ? item.title : item.name}
          layout="responsive"
          height={62}
          width={100}
        />
      </Thumbnail>
      <CardDetails>
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
          <p> {item.vote_average.toFixed(1)}</p>
        </div>
        <h3>{mediaType == 'movie' ? item.title : item.name}</h3>
      </CardDetails>
    </StyledCard>
  );
};

export default Card;
