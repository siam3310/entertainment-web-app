import styled from 'styled-components';
import MovieCard from './MovieCard';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2.5rem;
  }
`;

const MovieList = ({ movies }) => {
  return (
    <Grid>
      {movies.map((movie, i) => {
        return <MovieCard key={i} movie={movie} />;
      })}
    </Grid>
  );
};

export default MovieList;
