import React, { FC, ReactNode } from "react";
import Slider from "react-slick";

interface CarouselProps {
  children: ReactNode;
}

export const Carousel: FC<CarouselProps> = ({ children }) => {
  const sliderProps = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="relative max-w-xxl mx-auto" {...sliderProps}>
      {children}
    </Slider>
  );
};
