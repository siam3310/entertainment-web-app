import Link from 'next/link';
import styled from 'styled-components';
import { ArrowLeftIcon, ArrowRightIcon } from '../icons';

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 0.7rem;

  @media (min-width: 600px) {
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
`;

const Anchor = styled.a`
  color: #fff;
  padding: 0.4em 1em;
  border: 2px solid currentColor;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: ${(props) =>
    props.isFirst || props.isLast ? 'none' : 'unset'};
  opacity: ${(props) => (props.isFirst || props.isLast ? '0.2' : 'unset')};

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  svg {
    height: 1em;
  }
`;

const Paragraph = styled.p`
  padding: 0.45em 1em;
  background-color: #fff;
  color: #333;
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
