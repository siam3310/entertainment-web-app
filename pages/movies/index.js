import Head from 'next/head';
import { getData, movieNowPlaying, pathToSearchMovie } from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function Movies({ nowPlaying }) {
  return (
    <>
      <Head>
        <title>Entertainment | Movies</title>
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
              limit={12}
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

  return {
    props: {
      nowPlaying,
    },
  };
}
