import Head from 'next/head';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import MovieList from '../components/MovieList';

import { AppWrapper, Container, Heading } from '../styles/SharedStyles';

import movies from '../data.json';

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
          <Container>
            <Slider />
            <Heading>Recommended for you</Heading>
            <MovieList movies={movies} />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}
