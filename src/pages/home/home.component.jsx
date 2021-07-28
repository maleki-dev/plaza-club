import React from 'react';
import * as S from './home.styles';
import Wrapper from '../../components/wrapper/wrapper.component';
import Carousel from '../../components/carousel/carousel.component';
import { carouselData } from '../../components/carousel/carousel.data';

const Home = () => {
  return (
    <Wrapper>
      <S.Container>
        <Carousel slides={carouselData} autoPlay={3} scale={0.22} />
      </S.Container>
    </Wrapper>
  );
};
export default Home;
