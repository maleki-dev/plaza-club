import React, { useState, useEffect, useRef } from 'react';
import * as S from './carousel.styles';
// import { slides } from './carousel.data';
import { ReactComponent as RightArrow } from '../../assets/images/svg/__arrow2xRight.svg';
import { ReactComponent as LeftArrow } from '../../assets/images/svg/__arrow2xLeft.svg';
import { isMobile } from 'react-device-detect';
import { useSwipeable } from 'react-swipeable';

const Carousel = props => {
  const { slides } = props;
  const firstSlide = slides[0];
  const secondSlide = slides.length === 2 ? { ...slides[1], id: 50 } : slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: '100%',
    transition: 0.5,
    transitioning: false,
    _slides: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, _slides, transition, transitioning } = state;

  const transitionRef = useRef();
  const onTransitionRef = useRef();
  const sliderRef = useRef();
  const autoPlayRef = useRef();

  const nextSlide = () => {
    if (transitioning) return;

    setState({
      ...state,
      translate: '200%',
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () => {
    if (transitioning) return;

    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });
  };

  const indicatorClickHandler = indicator => {
    if (activeSlide === indicator) return;

    let _slidesCopy = [];
    const _slidesClone = _slides.map(_slide => {
      return { ..._slide, id: 50 };
    });

    if (activeSlide < indicator) {
      _slidesCopy = [_slidesClone[0], _slides[1], slides[indicator]];
    } else if (activeSlide > indicator) {
      _slidesCopy = [slides[indicator], _slides[1], _slidesClone[2]];
    }

    if (slides.length === 2) {
      _slidesCopy = _slides;
    }

    setState({
      ...state,
      _slides: _slidesCopy,
    });

    const id = setTimeout(() => {
      setState({
        ...state,
        _slides: _slidesCopy,
        activeSlide: indicator,
        translate: activeSlide > indicator ? 0 : activeSlide < indicator ? '200%' : '100%',
      });
      clearTimeout(id);
    }, 0);
  };

  const onTransition = () => {
    setState({ ...state, transitioning: true });
  };

  const smoothTransition = () => {
    let _slides = [];
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide];
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2);

    if (slides.length === 2) {
      if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide];
      else if (activeSlide === 1) _slides = [firstSlide, lastSlide, { ...firstSlide, id: 50 }];
    }

    setState({
      ...state,
      _slides,
      transition: 0,
      translate: '100%',
    });
  };

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    onTransitionRef.current = onTransition;
  });

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.5, transitioning: false });
  }, [transition]);

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    let interval = null;

    if (props.autoPlay) {
      interval = setInterval(play, props.autoPlay * 1000);
    }

    return () => {
      if (props.autoPlay) {
        clearInterval(interval);
      }
    };
  }, [activeSlide]);

  useEffect(() => {
    const slider = sliderRef.current;

    const transitionEnd = () => {
      transitionRef.current();
    };

    const transitionStart = () => {
      onTransitionRef.current();
    };

    slider.addEventListener('transitionstart', transitionStart);
    slider.addEventListener('transitionend', transitionEnd);

    return () => {
      slider.removeEventListener('transitionend', transitionStart);
      slider.removeEventListener('transitionend', transitionEnd);
    };
  }, []);

  const mobileHandlers = useSwipeable(
    isMobile
      ? {
          onSwipedLeft: prevSlide,
          onSwipedRight: nextSlide,
        }
      : {},
  );

  return (
    <S.Container {...mobileHandlers}>
      {slides.length === 1 ? null : (
        <React.Fragment>
          <S.LeftArrow onClick={nextSlide}>
            <LeftArrow />
          </S.LeftArrow>
          <S.RightArrow onClick={prevSlide}>
            <RightArrow />
          </S.RightArrow>
        </React.Fragment>
      )}
      <S.Slider $translate={translate} $transition={transition} ref={sliderRef}>
        {_slides.map(({ id, imageUrl, href }) => {
          return <S.SlideItem key={id} to={href} $imageUrl={imageUrl} scale={props.scale} />;
        })}
      </S.Slider>
      {slides.length === 1 ? null : (
        <S.IndicatorsContainer>
          {slides.map((slide, slideIndex) => (
            <S.Indicator
              key={slide.id}
              $active={slideIndex === activeSlide}
              onClick={() => indicatorClickHandler(slideIndex)}
            />
          ))}
        </S.IndicatorsContainer>
      )}
    </S.Container>
  );
};

export default Carousel;
