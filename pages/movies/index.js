import Head from 'next/head';
import {
  getData,
  movieNowPlaying,
  movieTopRated,
  movieUpcoming,
  pathToSearchMovie,
} from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function Movies({ nowPlaying, topRated, upcoming }) {
  return (
    <>
      <Head>
        <title>Movies | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchMovie}
            placeholder="Search for movies"
          />
          <Container>
            <Collection
              list={nowPlaying}
              title="Now Playing"
              mediaType="movie"
              headingType="movie"
              limit={12}
              href="/movies/now/1"
            />

            <Collection
              list={topRated}
              title="Top Rated"
              mediaType="movie"
              headingType="movie"
              limit={12}
              href="/movies/top/1"
            />

            <Collection
              list={upcoming}
              title="Upcoming"
              mediaType="movie"
              headingType="movie"
              limit={12}
              href="/movies/upcoming/1"
            />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getStaticProps() {
  const {
    data: { results: nowPlaying },
  } = await getData(movieNowPlaying);

  const {
    data: { results: topRated },
  } = await getData(movieTopRated);

  const {
    data: { results: upcoming },
  } = await getData(movieUpcoming);

  return {
    props: {
      nowPlaying,
      topRated,
      upcoming,
    },
    revalidate: 5,
  };
}
