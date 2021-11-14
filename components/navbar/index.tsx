import Link from "next/link";
import useModal from "../../hooks/useModal";
import { NavContainer } from "./styles";

const Navbar = () => {
  const { toggleModal } = useModal();
  const showCityModal = () => {
    toggleModal("Hello");
  };
  return (
    <header>
      <NavContainer>
        <nav className="nav">
          <div className="brand">
            <Link href="/">OnlineShop</Link>
          </div>
          <div className="city" onClick={showCityModal}>
            Kolkata
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
