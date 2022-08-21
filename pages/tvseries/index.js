import React from 'react';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { AppWrapper } from '../../styles/AppWrapper.styled';
import { Container } from '../../styles/Container.styled';
import { Grid, GridWrapper } from '../../styles/GridWrapper.styled';
import movieData from '../../data';
import MovieCard from '../../components/MovieCard';

const TvSeries = () => {
  return (
    <AppWrapper>
      <Header />
      <main>
        <SearchBar />
        <GridWrapper>
          <Container>
            <h1>Tv Series</h1>
            <Grid>
              {movieData
                .filter((movie) => movie.category === 'TV Series')
                .map((movie, i) => {
                  return <MovieCard key={i} movie={movie} />;
                })}
            </Grid>
          </Container>
        </GridWrapper>
      </main>
    </AppWrapper>
  );
};

export default TvSeries;
