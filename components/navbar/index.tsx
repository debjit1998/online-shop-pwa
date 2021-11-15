import Link from "next/link";
import useAuth from "../../hooks/useAuth";
import useModal from "../../hooks/useModal";
import CityLocation from "../city-location";
import { NavContainer } from "./styles";

const Navbar = () => {
  const { toggleModal } = useModal();
  const { selectedCity } = useAuth();

  const showCityModal = () => {
    toggleModal(<CityLocation />);
  };
  return (
    <header>
      <NavContainer>
        <nav className="nav">
          <div className="brand">
            <Link href="/">OnlineShop</Link>
          </div>
          <div className="city" onClick={showCityModal}>
            {selectedCity || "Select"}
          </div>
          <div className="user-status">
            <button className="sign-in">Sign In</button>
          </div>
        </nav>
      </NavContainer>
    </header>
  );
};

export default Navbar;
