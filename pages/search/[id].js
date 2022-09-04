import Head from 'next/head';
import axios from 'axios';
import { BASE_URL, pathToSearchAll } from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function SearchMovies({ results, searchId }) {
  const filteredResults = results
    ? results.filter((item) => item.media_type !== 'person')
    : [];

  return (
    <>
      <Head>
        <title> Search Results | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchAll}
            placeholder="Search for movies or TV series"
          />

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
    `${BASE_URL}search/multi?api_key=${process.env.API_KEY}&query=${id}&language=en-US&page=1&include_adult=false`
  );
  return {
    props: { results, searchId: id },
  };
}
