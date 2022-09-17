import styled from 'styled-components';

import Casts from './Casts';
import Genres from './Genres';
import Heading from './Heading';
import Info from './Info';
import PosterImage from './PosterImage';
import Ratings from './Ratings';
import Synopsis from './Synopsis';

const StyledMovieDetails = styled.div`
  --fs-title: 1.6rem;
  --fs-slogan: 0.9rem;
  --fs-body: 0.9rem;
  --fs-info: 0.9rem;
  --fs-genre: 0.7rem;
  --fs-cast: 0.8rem;
  --mb-gap: 1.6rem;
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    grid-template-columns: 35% 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    --fs-title: 2rem;
    --fs-slogan: 1rem;
    --fs-info: 1rem;
    --fs-body: 1rem;
    --fs-genre: 0.8rem;
    --fs-cast: 0.9rem;
    --mb-gap: 1.8rem;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    --fs-title: 2.5rem;
    --fs-slogan: 1.1rem;
    --fs-body: 1.1rem;
    --fs-genre: 0.85rem;
    --fs-cast: 1rem;
    --mb-gap: 2rem;
    grid-template-columns: 340px 1fr;
    gap: 3.5rem;
    margin-bottom: 2.5rem;
  }
`;

const Col1 = styled.div`
  @media (min-width: 1024px) {
    margin-left: 1.5rem;
  }
`;

const Col2 = styled.div`
  @media (min-width: 1024px) {
    margin-right: 1.6rem;
  }
`;

const MovieDetails = ({ details, credits }) => {
  const {
    poster_path,
    title,
    name,
    tagline,
    vote_average,
    runtime,
    spoken_languages,
    release_date,
    first_air_date,
    last_air_date,
    status,
    genres,
    overview,
  } = details;

  return (
    <StyledMovieDetails>
      <Col1>
        <PosterImage posterPath={poster_path} alt={title || name} />
      </Col1>

      <Col2>
        <Heading title={title || name} tagline={tagline} />
        <Ratings ratings={vote_average} />
        <Info
          runtime={runtime}
          language={spoken_languages}
          releaseDate={release_date}
          firstAirDate={first_air_date}
          lastAirDate={last_air_date}
          status={status}
        />
        <Genres genres={genres} />
        <Synopsis overview={overview} />
        <Casts credits={credits} />
      </Col2>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
