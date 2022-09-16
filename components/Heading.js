import Link from 'next/link';
import styled from 'styled-components';

const StyledHeading = styled.div`
  --fs-title: 1.15rem;
  --fs-btn: 0.7rem;
  --fs-heading-type: 0.45rem;
  --title-gap: 0.5rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    --fs-title: 1.4rem;
    --fs-btn: 0.8rem;
    --fs-heading-type: 0.55rem;
    --title-gap: 0.65rem;
  }
  @media (min-width: 768px) {
    --fs-title: 1.8rem;
    --fs-btn: 0.8rem;
    --fs-heading-type: 0.6rem;
    --mt-heading-type: 4px;
    --title-gap: 0.7rem;
    margin-bottom: 1.2rem;
  }

  @media (min-width: 1024px) {
    --fs-title: 2rem;
    --fs-btn: 0.9rem;
    --fs-heading-type: 0.65rem;
    --mt-heading-type: 5px;
    --title-gap: 0.85rem;
    margin-bottom: 1.3rem;
  }
`;

const Title = styled.h1`
  font-size: var(--fs-title);
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: var(--title-gap);
`;

const MediaType = styled.span`
  text-transform: uppercase;
  font-size: var(--fs-heading-type);
  letter-spacing: 1px;
  margin-top: var(--mt-heading-type);
  padding: 0.3em 0.65em;
  border: 2px solid currentColor;
  border-radius: 6px;
  font-weight: 400;

  &.tv {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.darkBlue};
    border: 2px solid #fff;
  }
`;

const ShowMoreBtn = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.greyishBlue};
  font-size: var(--fs-btn);

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const Heading = ({ title, href, headingType }) => {
  return (
    <StyledHeading>
      <Title>
        {title}
        {headingType === 'movie' ? (
          <MediaType>Movies</MediaType>
        ) : headingType === 'tvseries' ? (
          <MediaType className="tv">TV Series</MediaType>
        ) : (
          ''
        )}
      </Title>
      {href && (
        <Link href={href} as={href} passHref>
          <ShowMoreBtn>See more</ShowMoreBtn>
        </Link>
      )}
    </StyledHeading>
  );
};

export default Heading;
