import Link from 'next/link';
import styled from 'styled-components';

const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 1.2rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(1.1rem, 2.5vw, 1.85rem);
  font-weight: 300;
`;

const ShowMoreBtn = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.greyishBlue};
  font-size: clamp(0.7rem, 1.8vw, 0.9rem);
`;

const Heading = ({ title, href }) => {
  return (
    <StyledHeading>
      <Title>{title}</Title>
      {href && (
        <Link href={href} as={href} passHref>
          <ShowMoreBtn>See more</ShowMoreBtn>
        </Link>
      )}
    </StyledHeading>
  );
};

export default Heading;
