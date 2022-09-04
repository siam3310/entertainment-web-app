import styled from 'styled-components';

const StyledGenres = styled.div`
  margin-bottom: var(--mb-gap);

  h3 {
    margin-bottom: 0.5rem;
    font-size: var(--fs-body);
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  @media (min-width: 1024px) {
    h3 {
      margin-bottom: 0.7rem;
    }
  }
`;

const Genre = styled.p`
  font-size: var(--fs-genre);
  padding: 0 0.55em 0.1em;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.semiDarkBlue};
  border-radius: 0.5em;
`;

const Genres = ({ genres }) => {
  return (
    <StyledGenres>
      <h3>Genres</h3>
      <div>
        {genres[0]
          ? genres.map((genre, i) => {
              return <Genre key={i}>{genre.name}</Genre>;
            })
          : 'N/A'}
      </div>
    </StyledGenres>
  );
};

export default Genres;
