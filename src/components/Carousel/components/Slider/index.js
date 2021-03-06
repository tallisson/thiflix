import React from "react";
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

function NextArrow(props) {
  return (
    <div 
      className={props.className}
      onClick={props.onClick}
      style={{...props.style, backgroundColor: props.color}}
    />
  )
}

const Slider = function({ children, colorArrow }) {
  return (
    <Container>
      <SlickSlider {...{
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        nextArrow: <NextArrow color={colorArrow}/>
      }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
}

export default Slider; 