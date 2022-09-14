import Head from 'next/head';
import { pathToSearchMovie, searchMovie } from '../../../lib/tmdb';

import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import Collection from '../../../components/Collection';
import PaginationImproved from '../../../components/PaginationImproved';

import { AppWrapper, Container } from '../../../styles/SharedStyles';

export default function SearchMovies({ data, id, page }) {
  const currentPage = Number(page);
  const isFirst = currentPage === 1;
  const isLast = data ? currentPage === data.total_pages : false;

  return (
    <>
      <Head>
        <title>{id} - Search Results | Entertainment</title>
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
              list={data.results}
              title={`Found ${data.total_results} results for '${id}'`}
              mediaType="movie"
            />
            {!data.total_results == 0 && (
              <PaginationImproved
                currentPageAdvance={currentPage + 1}
                currentPage={currentPage}
                prevHref={`${pathToSearchMovie}${id}?page=${currentPage - 1}`}
                nextHref={`${pathToSearchMovie}${id}?page=${currentPage + 1}`}
                isFirst={isFirst}
                isLast={isLast}
                goToPreviousPage={() => currentPage - 1}
                goToNextPage={() => currentPage + 1}
                totalPages={data.total_pages}
              />
            )}
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id, page } = context.query;

  const { data } = await searchMovie(id, page);

  return {
    props: {
      data,
      id,
      page,
    },
  };
}
