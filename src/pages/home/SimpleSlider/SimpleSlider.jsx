import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.jpg'

export default function SimpleSlider() {
  //  Slider Setting
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: 0,

        },
      },
    ],
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
      <div>
          <img src={img1} width='100%'  style={{objectFit:'cover' , height:'100vh'}} alt="" />
        </div>
        <div>
        <img src={img2} width='100%'  style={{objectFit:'cover' , height:'100vh'}} alt="" />
          
        </div>
        <div>
        <img src={img3} width='100%'  style={{objectFit:'cover' , height:'100vh'}} alt="" />
        </div>
      </Slider>
    </div>
  );
}
