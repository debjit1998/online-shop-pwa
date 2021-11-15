import Image from "next/image";
import cityImage from "../../assets/images/city.jpg";
import { SELECTED_CITY } from "../../constants";
import useAuth from "../../hooks/useAuth";
import useModal from "../../hooks/useModal";
import { Container } from "./styles";

const cities = [
  "Kolkata",
  "Mumbai",
  "New Delhi",
  "Bengaluru",
  "Pune",
  "Chennai",
  "Hyderabad",
];
const CityLocation = () => {
  const { selectedCity, setSelectedCity } = useAuth();
  const { toggleModal } = useModal();

  const handleSelect = (city: string) => {
    if (city === "Kolkata") {
      localStorage.setItem(SELECTED_CITY, city);
      setSelectedCity(city);
      toggleModal();
    }
  };

  return (
    <Container>
      <p className="header">Select a city</p>
      <div className="city-container">
        {cities.map((city) => (
          <div
            key={city}
            className="city"
            onClick={handleSelect.bind(null, city)}
          >
            <div className="image-container">
              <Image alt={city} src={cityImage} height="100%" width="100%" />
            </div>
            <div className={`name ${selectedCity === city ? "selected" : ""}`}>
              {city}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CityLocation;
