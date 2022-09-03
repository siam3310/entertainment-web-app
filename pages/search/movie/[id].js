import Head from 'next/head';
import axios from 'axios';
import { pathToSearchMovie, server } from '../../../config';

import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import Collection from '../../../components/Collection';

import { AppWrapper, Container } from '../../../styles/SharedStyles';

export default function SearchMovies({ results, searchId }) {
  return (
    <>
      <Head>
        <title> Search Results | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar searchPath={pathToSearchMovie} />

          <Container>
            <Collection
              list={results}
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
    `${server}search/movie?api_key=${process.env.API_KEY}&query=${id}&language=en-US&page=1&include_adult=false`
  );
  console.log(context.query);
  return {
    props: { results, searchId: id },
  };
}
