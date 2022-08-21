import Head from 'next/head';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieCard from '../../components/MovieCard';

import {
  AppWrapper,
  Container,
  Grid,
  GridWrapper,
} from '../../styles/SharedStyles';

import movieData from '../../data.json';

const TvSeries = () => {
  return (
    <>
      <Head>
        <title>Entertainment | TV Series</title>
        <meta name="description" content="Entertainment web app" />
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar />
          <GridWrapper>
            <Container>
              <h1>Tv Series</h1>
              <Grid>
                {movieData
                  .filter((movie) => movie.category === 'TV Series')
                  .map((movie, i) => {
                    return <MovieCard key={i} movie={movie} />;
                  })}
              </Grid>
            </Container>
          </GridWrapper>
        </main>
      </AppWrapper>
    </>
  );
};

export default TvSeries;
