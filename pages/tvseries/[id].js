import Head from 'next/head';
import {
  getSimilarTvSeries,
  getTvCasts,
  getTvDetail,
  pathToSearchTv,
} from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieDetails from '../../components/MovieDetails';
import Collection from '../../components/Collection';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function Details({ details, credits, similarTvSeries }) {
  return (
    <>
      <Head>
        <title>{`${details.name} ${
          details.first_air_date && `(${details.first_air_date.slice(0, 4)})`
        } | Entertainment`}</title>
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

            {similarTvSeries.length > 0 && (
              <Collection
                list={similarTvSeries}
                title="Similar TV Series"
                mediaType="tvseries"
                limit={4}
              />
            )}
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const tvId = Number(id);

  const { data: details } = await getTvDetail(tvId);
  const { data: credits } = await getTvCasts(tvId);
  const {
    data: { results: similarTvSeries },
  } = await getSimilarTvSeries(tvId);

  return {
    props: { details, credits: credits.cast, similarTvSeries },
  };
}
