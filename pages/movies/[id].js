import Head from 'next/head';
import axios from 'axios';
import { BASE_URL, pathToSearchMovie } from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import MovieDetails from '../../components/MovieDetails';

import { AppWrapper, Container } from '../../styles/SharedStyles';

const movieDetails = ({ details, credits }) => {
  return (
    <>
      <Head>
        <title>{details.title} | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchMovie}
            placeholder="Search for movies"
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
  const movieId = context.query.id;

  const { data: details } = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );

  const { data: credits } = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );

  return {
    props: { details, credits: credits.cast },
  };
}

// export const getStaticPaths = async () => {
//   const {
//     data: { results: nowPlaying },
//   } = await axios.get(
//     `${server}movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
//   );

//   return {
//     params: {},
//   };
// };

// export const getStaticProps = async (context) => {
//   // fetch data for a single movie
//   const movieId = context.params.id;

//   return {
//     props: {
//       movieDetails,
//     },
//   };
// };

export default movieDetails;
