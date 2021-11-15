import { useEffect } from "react";
import type { NextPage } from "next";
import useModal from "../hooks/useModal";
import useAuth from "../hooks/useAuth";
import CityLocation from "../components/city-location";

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

  return <div />;
};

export default Home;
