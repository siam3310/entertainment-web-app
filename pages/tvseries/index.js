import Head from 'next/head';
import { getData, pathToSearchTv, tvAiringToday } from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function TvSeries({ airingToday }) {
  return (
    <>
      <Head>
        <title>Entertainment | TV Series</title>
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
              list={airingToday}
              title="Airing Today"
              mediaType="tvseries"
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
    data: { results: airingToday },
  } = await getData(tvAiringToday);

  return {
    props: {
      airingToday,
    },
  };
}
