import Head from 'next/head';
import axios from 'axios';
import { BASE_URL, pathToSearchTv } from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieDetails from '../../components/MovieDetails';

import { AppWrapper, Container } from '../../styles/SharedStyles';

const tvSeriesDetails = ({ details, credits }) => {
  return (
    <>
      <Head>
        <title>{details.name} | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchTv}
            placeholder="Search for TV series"
          />

          <Container>
            <MovieDetails details={details} credits={credits} />
          </Container>
        </main>
      </AppWrapper>
    </>
  );
};

export async function getServerSideProps(context) {
  const tvId = context.query.id;

  const { data: details } = await axios.get(
    `${BASE_URL}tv/${tvId}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const { data: credits } = await axios.get(
    `${BASE_URL}tv/${tvId}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: { details, credits: credits.cast },
  };
}

export default tvSeriesDetails;
