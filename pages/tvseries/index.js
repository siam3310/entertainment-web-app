import Head from 'next/head';
import axios from 'axios';
import { server } from '../../config';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function TvSeries({ popular }) {
  return (
    <>
      <Head>
        <title>Entertainment | TV Series</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar />
          <Container>
            <Collection
              list={popular}
              title="Popular TV Series"
              mediaType="tv"
            />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getStaticProps() {
  const {
    data: { results: popular },
  } = await axios.get(
    `${server}tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  return {
    props: {
      popular,
    },
  };
}
