import Head from 'next/head';
import {
  getMovieCasts,
  getMovieDetail,
  getSimilarMovies,
  pathToSearchMovie,
} from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieDetails from '../../components/MovieDetails';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function Details({ details, credits, similarMovies }) {
  return (
    <>
      <Head>
        <title>{`${details.title} ${
          details.release_date && `(${details.release_date.slice(0, 4)})`
        } | Entertainment`}</title>
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

            {similarMovies.length > 0 && (
              <Collection
                list={similarMovies}
                title="Similar Movies"
                mediaType="movie"
                limit={4}
              />
            )}
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const movieId = Number(id);

  const { data: details } = await getMovieDetail(movieId);
  const { data: credits } = await getMovieCasts(movieId);
  const {
    data: { results: similarMovies },
  } = await getSimilarMovies(movieId);

  return {
    props: { details, credits: credits.cast, similarMovies },
  };
}
