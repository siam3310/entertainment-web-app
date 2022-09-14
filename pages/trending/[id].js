import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { pathToSearchAll } from '../../lib/tmdb';
import { fetcher } from '../../utils';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Collection from '../../components/Collection';
import PaginationImproved from '../../components/PaginationImproved';

import { AppWrapper, Container } from '../../styles/SharedStyles';

export default function Trending() {
  const router = useRouter();
  const { id } = router.query;
  const currentPage = Number(id);
  const { data, error } = useSWR(`/api/trending/${currentPage}`, fetcher);
  const isFirst = currentPage === 1;
  const isLast = data ? currentPage === data.total_pages : false;

  return (
    <>
      <Head>
        <title>Trending | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchAll}
            placeholder="Search for movies"
          />

          <Container>
            {data ? (
              <>
                <PaginationImproved
                  currentPageAdvance={currentPage + 1}
                  currentPage={currentPage}
                  prevHref={`/trending/${currentPage - 1}`}
                  nextHref={`/trending/${currentPage + 1}`}
                  isFirst={isFirst}
                  isLast={isLast}
                  goToPreviousPage={() => currentPage - 1}
                  goToNextPage={() => currentPage + 1}
                  totalPages={data.total_pages}
                />
                <Collection
                  list={data.results}
                  title="Trending "
                  mediaType="all"
                />
                <PaginationImproved
                  currentPageAdvance={currentPage + 1}
                  currentPage={currentPage}
                  prevHref={`/trending/${currentPage - 1}`}
                  nextHref={`/trending/${currentPage + 1}`}
                  isFirst={isFirst}
                  isLast={isLast}
                  goToPreviousPage={() => currentPage - 1}
                  goToNextPage={() => currentPage + 1}
                  totalPages={data.total_pages}
                />
              </>
            ) : error ? (
              'Failed to load'
            ) : (
              'Loading...'
            )}
          </Container>
        </main>
      </AppWrapper>
    </>
  );
}
