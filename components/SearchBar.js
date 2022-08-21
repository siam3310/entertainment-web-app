import styled from 'styled-components';
// import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import { SearchIcon } from '../icons';
import { Container } from '../styles/Container.styled';

const StyledSearchBar = styled.div`
  margin: 1rem 0;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    cursor: pointer;
    display: grid;
    svg {
      color: #fff;
      flex-shrink: 0;
      width: 1.4rem;
      height: 1.4rem;

      @media (min-width: 600px) {
        width: 1.6rem;
        height: 1.6rem;
      }

      @media (min-width: 768px) {
        width: 1.7rem;
        height: 1.7rem;
      }
    }
  }

  input {
    border: none;
    background-color: transparent;
    color: white;
    font-size: 0.95rem;
    font-size: clamp(0.95rem, 2.8vw, 1.3rem);
    font-weight: 300;
    width: 100%;
    padding: 0.6rem 0;
    caret-color: ${({ theme }) => theme.colors.red};

    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyishBlue};
      margin-bottom: -1px;
    }
  }

  @media (min-width: 768px) {
    margin: 1.5rem 0;
  }

  @media (min-width: 1024px) {
    margin: 1.8rem 0 2.3rem;
  }
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <Container>
        <button>
          <SearchIcon />
        </button>
        <input type="text" placeholder="Search for movies or TV series" />
      </Container>
    </StyledSearchBar>
  );
};

export default SearchBar;
