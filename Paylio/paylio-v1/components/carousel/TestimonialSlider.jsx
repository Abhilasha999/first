"use client";

import Slider from "react-slick";
import TestimonialCard from "../cards/TestimonialCard";
import testimonials_img_1 from "/public/images/testimonials-img-1.png";
import testimonials_img_2 from "/public/images/testimonials-img-2.png";
import testimonials_img_3 from "/public/images/testimonials-img-3.png";

const testimonialData = [
  {
    id: 1,
    rating: 5,
    title: "Great Fast Reliable Service",
    desc: " Paylio has always been a reliable solution for my business. I am very satisfied with their speedy service and professional customer care. I highly recommend Paylio to businesses with regular overseas payments.",
    avt: testimonials_img_1,
    name: "Aspen Press",
    designation: "Web Designer",
  },
  {
    id: 2,
    rating: 4,
    title: "Great Fast Reliable Service",
    desc: " Paylio has always been a reliable solution for my business. I am very satisfied with their speedy service and professional customer care. I highly recommend Paylio to businesses with regular overseas payments.",
    avt: testimonials_img_2,
    name: "Courtney Henry",
    designation: "Balance Studio",
  },
  {
    id: 3,
    rating: 5,
    title: "Great Fast Reliable Service",
    desc: " Paylio has always been a reliable solution for my business. I am very satisfied with their speedy service and professional customer care. I highly recommend Paylio to businesses with regular overseas payments.",
    avt: testimonials_img_3,
    name: "Paul Howell",
    designation: "President of Sales",
  },
  {
    id: 4,
    rating: 4.5,
    title: "Great Fast Reliable Service",
    desc: " Paylio has always been a reliable solution for my business. I am very satisfied with their speedy service and professional customer care. I highly recommend Paylio to businesses with regular overseas payments.",
    avt: testimonials_img_1,
    name: "Courtney Henry",
    designation: "Courtney Henry",
  },
];

// slick css
import "slick-carousel/slick/slick.css";

const Next = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="slick-prev pull-left slick-arrow"
    ></button>
  );
};

const Prev = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="slick-next pull-right slick-arrow"
    ></button>
  );
};

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    autoplay: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <Next />,
    nextArrow: <Prev />,
    dots: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 676,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="testimonials-carousel">
      {testimonialData.map((item) => (
        <TestimonialCard key={item.id} data={item} />
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
