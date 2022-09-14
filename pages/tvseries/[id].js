import Head from 'next/head';
import { getTvCasts, getTvDetail, pathToSearchTv } from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieDetails from '../../components/MovieDetails';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function Details({ details, credits }) {
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
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const { data: details } = await getTvDetail(id);
  const { data: credits } = await getTvCasts(id);

  return {
    props: { details, credits: credits.cast },
  };
}
