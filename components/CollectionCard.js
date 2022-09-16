import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { MoviesIcon, SeriesIcon, StarIcon } from '../icons';

const StyledCard = styled.article`
  --fs-info: 0.67rem;
  --fs-title: 0.9rem;
  --border-radius: 8px;

  @media (min-width: 600px) {
    --fs-info: 0.7rem;
    --fs-title: 0.95rem;
  }

  @media (min-width: 768px) {
    --fs-info: 0.75rem;
    --fs-title: 1rem;
    --border-radius: 9px;
  }

  @media (min-width: 1024px) {
    --fs-info: 0.8rem;
    --fs-title: 1.125rem;
  }

  cursor: pointer;
`;

const Thumbnail = styled.div`
  overflow: hidden;
  border-radius: var(--border-radius);
  margin-bottom: 0.6rem;
`;

const CardDetails = styled.header`
  display: grid;

  div {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    margin-bottom: 0.2rem;
  }

  div p {
    position: relative;
    color: rgba(255, 255, 255, 0.75);
    font-size: var(--fs-info);
    font-weight: 300;
  }

  div p:nth-child(2),
  div p:nth-child(3) {
    display: flex;
    align-items: center;
    gap: 0.4em;
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
    font-size: var(--fs-title);
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Card = ({ item, mediaType }) => {
  const {
    id,
    backdrop_path,
    title,
    name,
    release_date,
    first_air_date,
    vote_average,
  } = item;
  const router = useRouter();

  const showDetailsHandler = () => {
    if (mediaType === 'movie') {
      router.push(`/movies/${id}`);
    } else if (mediaType === 'tvseries') {
      router.push(`/tvseries/${id}`);
    } else if (mediaType == 'all') {
      release_date
        ? router.push(`/movies/${id}`)
        : router.push(`/tvseries/${id}`);
    }
  };

  const releaseDate = release_date || [];
  const firstAirDate = first_air_date || [];

  return (
    <StyledCard onClick={showDetailsHandler}>
      <Thumbnail>
        <Image
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/original${backdrop_path}`
              : '/assets/placeholder-image.png'
          }
          alt={title || name}
          layout="responsive"
          objectFit="cover"
          height={'239px'}
          width={'384px'}
        />
      </Thumbnail>
      <CardDetails>
        <div>
          <p>
            {release_date ? releaseDate.slice(0, 4) : firstAirDate.slice(0, 4)}
          </p>
          <p>
            {release_date ? <MoviesIcon /> : <SeriesIcon />}
            {release_date ? 'Movie' : 'TV Series'}
          </p>
          <p>
            <StarIcon />
            {vote_average.toFixed(1)}
          </p>
        </div>
        <h3>{title || name}</h3>
      </CardDetails>
    </StyledCard>
  );
};

export default Card;
