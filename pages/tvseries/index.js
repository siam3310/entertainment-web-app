import Head from 'next/head';
import {
  getData,
  pathToSearchTv,
  tvAiringToday,
  tvOnTheAir,
  tvTopRated,
} from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function TvSeries({ airingToday, topRated, onTheAir }) {
  return (
    <>
      <Head>
        <title>TV Series | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchTv}
            placeholder="Search for TV series"
          />

          <Container>
            <Collection
              list={onTheAir}
              title="On The Air"
              mediaType="tvseries"
              headingType="tvseries"
              limit={12}
              href="/tvseries/onair/1"
            />

            <Collection
              list={topRated}
              title="Top Rated"
              mediaType="tvseries"
              headingType="tvseries"
              limit={12}
              href="/tvseries/top/1"
            />

            <Collection
              list={airingToday}
              title="Airing Today"
              mediaType="tvseries"
              headingType="tvseries"
              limit={12}
              href="/tvseries/airing/1"
            />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getStaticProps() {
  const {
    data: { results: airingToday },
  } = await getData(tvAiringToday);

  const {
    data: { results: topRated },
  } = await getData(tvTopRated);

  const {
    data: { results: onTheAir },
  } = await getData(tvOnTheAir);

  return {
    props: {
      airingToday,
      topRated,
      onTheAir,
    },
    revalidate: 5,
  };
}
