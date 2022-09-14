import Head from 'next/head';
import { pathToSearchAll, search } from '../../lib/tmdb';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';
import PaginationImproved from '../../components/PaginationImproved';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function SearchAll({ data, id, page }) {
  const currentPage = Number(page);
  const isFirst = currentPage === 1;
  const isLast = data ? currentPage === data.total_pages : false;

  const filteredResults = data
    ? data.results.filter((item) => item.media_type !== 'person')
    : [];

  return (
    <>
      <Head>
        <title>{id} - Search Results | Entertainment</title>
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
              title={`Found ${data.total_results} results for '${id}'`}
              mediaType="all"
            />
            {!data.total_results == 0 && (
              <PaginationImproved
                currentPageAdvance={currentPage + 1}
                currentPage={currentPage}
                prevHref={`${pathToSearchAll}${id}?page=${currentPage - 1}`}
                nextHref={`${pathToSearchAll}${id}?page=${currentPage + 1}`}
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

  const { data } = await search(id, page);

  return {
    props: {
      data,
      id,
      page,
    },
  };
}
