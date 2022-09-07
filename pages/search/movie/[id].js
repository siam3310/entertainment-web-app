import Head from 'next/head';
import axios from 'axios';
import { BASE_URL, pathToSearchMovie } from '../../../lib/tmdb';

import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import Collection from '../../../components/Collection';

import { AppWrapper, Container } from '../../../styles/SharedStyles';

export default function SearchMovies({ results, searchId, totalResults }) {
  return (
    <>
      <Head>
        <title> {searchId} - Search Results | Entertainment</title>
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
              list={results}
              title={`Found ${totalResults} results for '${searchId}'`}
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
    data: { results, total_results },
  } = await axios.get(
    `${BASE_URL}search/movie?api_key=${process.env.API_KEY}&query=${id}&language=en-US&page=1&include_adult=false`
  );

  return {
    props: {
      results,
      searchId: id,
      totalResults: total_results,
    },
  };
}
