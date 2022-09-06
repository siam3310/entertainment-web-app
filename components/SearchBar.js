import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

import { SearchIcon } from '../icons';
import { Container } from '../styles/SharedStyles';

const StyledSearchBar = styled.div`
  --placeholder: 0.9rem;
  --fs-btn: 0.7rem;
  --svg-height: 1.1rem;
  --svg-width: 1.1rem;
  --form-gap: 0.7rem;
  margin: 1.1rem 0 1.3rem;

  @media (min-width: 600px) {
    --placeholder: 1rem;
    --fs-btn: 0.75rem;
    --svg-height: 1.2rem;
    --svg-width: 1.2rem;
    --form-gap: 0.8rem;
  }

  @media (min-width: 768px) {
    --placeholder: 1.1rem;
    --fs-btn: 0.8rem;
    --svg-height: 1.3rem;
    --svg-width: 1.3rem;
    --form-gap: 0.9rem;
    margin: 1.2rem 0 1.8rem;
  }

  @media (min-width: 1024px) {
    --placeholder: 1.4rem;
    --fs-btn: 0.95rem;
    --svg-height: 1.75rem;
    --svg-width: 1.75rem;
    --form-gap: 1rem;
    margin: 1.5rem 0 2.3rem;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: flex-end;
  gap: var(--form-gap);

  input {
    border: none;
    background-color: transparent;
    color: white;
    font-size: var(--placeholder);

    width: 100%;
    padding: 0.4em 0;
    font-weight: 300;
    caret-color: ${({ theme }) => theme.colors.red};

    &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyishBlue};
      margin-bottom: -1px;
    }
  }
`;

const IconContainer = styled.div`
  color: #fff;
  flex-shrink: 0;
  width: var(--svg-width);
  height: var(--svg-height);
  align-self: center;
`;

const SearchBtn = styled.button`
  font-size: var(--fs-btn);
  border-radius: 0.4em;
  padding: 0.75em 0.9em 0.8em;
  color: #fff;
  background: ${({ theme }) => theme.colors.greyishBlue};
  font-weight: 300;
`;

const SearchBar = ({ searchPath, placeholder }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.length === 0) {
      return;
    } else {
      router.push(`${searchPath}${searchTerm.trim()}?page=1`);
      setSearchTerm('');
    }
  };

  return (
    <StyledSearchBar>
      <Container>
        <Form onSubmit={handleSearch}>
          <IconContainer>
            <SearchIcon />
          </IconContainer>
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder={placeholder}
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </Form>
      </Container>
    </StyledSearchBar>
  );
};

export default SearchBar;
