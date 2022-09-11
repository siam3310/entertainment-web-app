import Pagination from './Pagination';
import styled from 'styled-components';

const HiddenDiv = styled.div`
  display: none;
`;

export default function PaginationImproved({
  currentPageAdvance,
  currentPage,
  prevHref,
  nextHref,
  isFirst,
  isLast,
  goToPreviousPage,
  goToNextPage,
  totalPages,
}) {
  return (
    <>
      <HiddenDiv>
        <Pagination
          currentPage={currentPageAdvance}
          prevHref={prevHref}
          nextHref={nextHref}
          isFirst={isFirst}
          isLast={isLast}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          totalPages={totalPages}
        />
      </HiddenDiv>
      <Pagination
        currentPage={currentPage}
        prevHref={prevHref}
        nextHref={nextHref}
        isFirst={isFirst}
        isLast={isLast}
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        totalPages={totalPages}
      />
    </>
  );
}
