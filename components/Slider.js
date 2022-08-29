import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import { Heading } from '../styles/SharedStyles';
import SliderCard from './SliderCard';

const SwiperWrapper = styled.div`
  margin-bottom: 1.6rem;
  margin-right: -4rem;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 2.6rem;
  }
`;

const Slider = ({ trending }) => {
  return (
    <SwiperWrapper>
      <Heading>Trending</Heading>

      <Swiper
        modules={[FreeMode]}
        spaceBetween={16}
        slidesPerView={1.7}
        slidesOffsetAfter={64}
        freeMode={true}
        breakpoints={{
          600: {
            spaceBetween: 24,
            slidesPerView: 2.5,
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
                image={movie.backdrop_path || movie.posterPath}
                media_type={movie.media_type}
                title={movie.title}
                name={movie.name}
                release_date={movie.release_date}
                first_air_date={movie.first_air_date}
                vote_average={movie.vote_average}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrapper>
  );
};

export default Slider;
