import Link from 'next/link';
import styled from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Anchor = styled.a`
  color: #fff;
  padding: 0.4rem 1rem;
  border: 2px solid currentColor;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: ${(props) =>
    props.isFirst || props.isLast ? 'none' : 'unset'};
  opacity: ${(props) => (props.isFirst || props.isLast ? '0.2' : 'unset')};

  svg {
    height: 1rem;
  }
`;

const Paragraph = styled.p`
  padding: 0.45rem 1rem;
  background-color: #fff;
  color: #333;
  border-radius: 8px;
`;

export default function Pagination({
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
    <StyledPagination>
      <Link href={prevHref} as={prevHref}>
        <Anchor onClick={goToPreviousPage} isFirst={isFirst}>
          <ArrowLeftIcon />
          <span>Prev</span>
        </Anchor>
      </Link>

      <Paragraph>
        Page {currentPage} of {totalPages}
      </Paragraph>

      <Link href={nextHref} as={nextHref}>
        <Anchor onClick={goToNextPage} isLast={isLast}>
          <span>Next</span>
          <ArrowRightIcon />
        </Anchor>
      </Link>
    </StyledPagination>
  );
}
