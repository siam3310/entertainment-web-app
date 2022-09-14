import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { pathToSearchTv } from '../../../lib/tmdb';
import { fetcher } from '../../../utils';

import Header from '../../../components/Header';
import SearchBar from '../../../components/SearchBar';
import Collection from '../../../components/Collection';
import PaginationImproved from '../../../components/PaginationImproved';

import { AppWrapper, Container } from '../../../styles/SharedStyles';

export default function TopRatedTvSeries() {
  const router = useRouter();
  const { id } = router.query;
  const currentPage = Number(id);
  const { data, error } = useSWR(`/api/tv/top/${currentPage}`, fetcher);
  const isFirst = currentPage === 1;
  const isLast = data ? currentPage === data.total_pages : false;

  return (
    <>
      <Head>
        <title>Top Rated TV Series | Entertainment</title>
      </Head>

      <AppWrapper>
        <Header />
        <main>
          <SearchBar
            searchPath={pathToSearchTv}
            placeholder="Search for TV series"
          />

          <Container>
            {data ? (
              <>
                <PaginationImproved
                  currentPageAdvance={currentPage + 1}
                  currentPage={currentPage}
                  prevHref={`/tvseries/top/${currentPage - 1}`}
                  nextHref={`/tvseries/top/${currentPage + 1}`}
                  isFirst={isFirst}
                  isLast={isLast}
                  goToPreviousPage={() => currentPage - 1}
                  goToNextPage={() => currentPage + 1}
                  totalPages={data.total_pages}
                />
                <Collection
                  list={data.results}
                  title="Top Rated TV Series"
                  mediaType="tvseries"
                />
                <PaginationImproved
                  currentPageAdvance={currentPage + 1}
                  currentPage={currentPage}
                  prevHref={`/tvseries/top/${currentPage - 1}`}
                  nextHref={`/tvseries/top/${currentPage + 1}`}
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
