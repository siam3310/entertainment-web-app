import Head from 'next/head';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

import { AppWrapper, Container, Heading } from '../../styles/SharedStyles';

import movies from '../../data.json';

export default function TvSeries() {
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
          <Container>
            <Heading>Tv Series</Heading>
            <MovieList movies={movies} />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}
