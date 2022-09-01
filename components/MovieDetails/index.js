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
  return (
    <StyledMovieDetails>
      <Col1>
        <PosterImage {...details} />
      </Col1>

      <Col2>
        <Heading {...details} />
        <Ratings {...details} />
        <Info {...details} />
        <Genres {...details} />
        <Synopsis {...details} />
        <Casts credits={credits} />
      </Col2>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
