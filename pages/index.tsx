import { useEffect } from "react";
import type { NextPage } from "next";
import Slider from "react-slick";
import useModal from "../hooks/useModal";
import useAuth from "../hooks/useAuth";
import CityLocation from "../components/city-location";
import Slide from "../components/home/Slide";
import { MainContainer } from "../styles/home/styles";

const Home: NextPage = () => {
  const { toggleModal } = useModal();
  const { selectedCity } = useAuth();

  useEffect(() => {
    if (!selectedCity) {
      toggleModal(<CityLocation />, false);
    }

    return () => {
      toggleModal();
    };
  }, [selectedCity]); //eslint-disable-line

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MainContainer>
      <div className="content">
        <h2 className="exclusive-header">Exclusive Restaurants</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {[...Array(6)].map((_, index) => (
              <Slide key={index} name="Haldiram" location="Kolkata" />
            ))}
          </Slider>
        </div>
      </div>
    </MainContainer>
  );
};

export default Home;
