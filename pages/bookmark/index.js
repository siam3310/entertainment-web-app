import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { AppWrapper } from '../../styles/AppWrapper.styled';

const Bookmarks = () => {
  return (
    <AppWrapper>
      <Header />
      <main>
        <SearchBar />
        <div>Bookmarks</div>
      </main>
    </AppWrapper>
  );
};

export default Bookmarks;
