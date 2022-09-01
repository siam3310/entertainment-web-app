import Image from 'next/image';
import styled from 'styled-components';

const StyledPoster = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  max-width: 12rem;
  margin: 0 auto;

  @media (min-width: 600px) {
    max-width: 100%;
  }
`;

const PosterImage = ({ poster_path, title, name }) => {
  return (
    <StyledPoster>
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={title || name}
        layout="responsive"
        width={267}
        height={400}
      />
    </StyledPoster>
  );
};

export default PosterImage;
