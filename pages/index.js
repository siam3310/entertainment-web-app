import Head from 'next/head';
import axios from 'axios';
import { BASE_URL, pathToSearchAll } from '../lib/tmdb';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import Collection from '../components/Collection';

import { AppWrapper, Container } from '../styles/SharedStyles';

export default function Home({ trending, popularMovies }) {
  return (
    <>
      <Head>
        <title>Entertainment | Home</title>
        <meta name="description" content="Entertainment web app" />
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchAll}
            placeholder="Search for movies or TV series"
          />

          <Container>
            <Slider trending={trending} href="/trending/1" />

            <Collection
              list={popularMovies}
              title="Popular Movies"
              mediaType="movie"
              limit="12"
              href="/movies/popular/1"
            />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getStaticProps() {
  const {
    data: { results: trending },
  } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const {
    data: { results: popularMovies },
  } = await axios.get(
    `${BASE_URL}movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  return {
    props: {
      trending,
      popularMovies,
    },
  };
}
