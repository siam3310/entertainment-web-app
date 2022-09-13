import Head from 'next/head';
import {
  getMovieCasts,
  getMovieDetail,
  pathToSearchMovie,
} from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieDetails from '../../components/MovieDetails';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function Details({ details, credits }) {
  return (
    <>
      <Head>
        <title>{details.title} | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchMovie}
            placeholder="Search for movies"
          />

          <Container>
            <MovieDetails details={details} credits={credits} />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const { data: details } = await getMovieDetail(id);
  const { data: credits } = await getMovieCasts(id);

  return {
    props: { details, credits: credits.cast },
  };
}
