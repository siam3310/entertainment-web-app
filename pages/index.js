import Head from 'next/head';
import {
  pathToSearchAll,
  getData,
  trendingAllDay,
  moviePopular,
  tvPopular,
} from '../lib/tmdb';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Slider from '../components/Slider';
import Collection from '../components/Collection';

import { AppWrapper, Container } from '../styles/SharedStyles';

export default function Home({ trending, popularMovies, popularTvSeries }) {
  return (
    <>
      <Head>
        <title>Home | Entertainment</title>
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
              title="Popular"
              mediaType="movie"
              headingType="movie"
              limit="12"
              href="/movies/popular/1"
            />

            <Collection
              list={popularTvSeries}
              title="Popular"
              mediaType="tvseries"
              headingType="tvseries"
              limit="12"
              href="/tvseries/popular/1"
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
  } = await getData(trendingAllDay);

  const {
    data: { results: popularMovies },
  } = await getData(moviePopular);

  const {
    data: { results: popularTvSeries },
  } = await getData(tvPopular);

  return {
    props: {
      trending,
      popularMovies,
      popularTvSeries,
    },
    revalidate: 5,
  };
}
