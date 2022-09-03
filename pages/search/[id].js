import Head from 'next/head';
import axios from 'axios';
import { pathToSearchAll, server } from '../../config';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function SearchMovies({ results, searchId }) {
  const filteredResults = results
    ? results.filter((item) => item.media_type !== 'person')
    : [];
  console.log(filteredResults);

  return (
    <>
      <Head>
        <title> Search Results | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar searchPath={pathToSearchAll} />

          <Container>
            <Collection
              list={filteredResults}
              title={`Found ${results.length} results for '${searchId}'`}
              mediaType="movie"
            />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const {
    data: { results },
  } = await axios.get(
    `${server}search/multi?api_key=${process.env.API_KEY}&query=${id}&language=en-US&page=1&include_adult=false`
  );
  return {
    props: { results, searchId: id },
  };
}
