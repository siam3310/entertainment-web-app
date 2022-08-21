import Head from 'next/head';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

import { AppWrapper } from '../styles/AppWrapper.styled';
import { Container } from '../styles/Container.styled';
import { Grid, GridWrapper } from '../styles/GridWrapper.styled';
import movieData from '../data.json';
// const jsonData = require('./students.json');
// console.log(jsonData);

export default function Home() {
  return (
    <>
      <Head>
        <title>Entertainment</title>
        <meta name="description" content="Entertainment web app" />
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar />

          <GridWrapper>
            <Container>
              <h1>Recommended for you</h1>
              <Grid>
                {movieData
                  .filter((movie) => !movie.isTrending)
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
}
