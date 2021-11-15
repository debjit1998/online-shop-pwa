import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import restaurantImage from "../../assets/images/haldiram.jpg";

interface Props {
  key: number;
  name: string;
  location: string;
}

const SlideContainer = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
  .image-container {
    position: relative;
    height: 13rem;
    width: 90%;
    margin: auto;
    border-radius: 4px;
    overflow: hidden;
  }

  .description {
    width: 90%;
    margin: auto;
    color: var(--hex-two);
    padding: 1rem 0;
    text-align: center;
    font-weight: bold;

    .sub-text {
      font-size: 0.75rem;
      margin-top: 0.5em;
    }
  }
`;

const Slide: FC<Props> = ({ key, name, location, ...rest }) => {
  return (
    <SlideContainer {...rest}>
      <div className="image-container">
        <Image alt="restaurant" src={restaurantImage} layout="fill" />
      </div>
      <div className="description">
        <div className="text">{name}</div>
        <div className="sub-text">{location}</div>
      </div>
    </SlideContainer>
  );
};

export default Slide;
