import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';

import Heading from './Heading';
import SliderCard from './SliderCard';

const SwiperWrapper = styled.div`
  margin-bottom: 1.6rem;

  .swiper-wrapper {
    width: 1000rem;
  }

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 2.8rem;
  }
`;

const StyledSwiper = styled(Swiper)`
  margin-right: -4rem;

  @media (min-width: 1440px) {
    margin-right: unset;
  }
`;

const Slider = ({ trending, href }) => {
  return (
    <SwiperWrapper>
      <Heading title="Trending" href={href} />

      <StyledSwiper
        modules={[FreeMode]}
        spaceBetween={16}
        slidesPerView={1.5}
        slidesOffsetAfter={64}
        freeMode={true}
        grabCursor={true}
        breakpoints={{
          600: {
            spaceBetween: 24,
            slidesPerView: 2.4,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 40,
          },
        }}
      >
        {trending.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <SliderCard
                id={movie.id}
                backdropPath={movie.backdrop_path}
                mediaType={movie.media_type}
                title={movie.title}
                name={movie.name}
                releaseDate={movie.release_date || []}
                firstAirDate={movie.first_air_date || []}
                voteAverage={movie.vote_average}
              />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </SwiperWrapper>
  );
};

export default Slider;
