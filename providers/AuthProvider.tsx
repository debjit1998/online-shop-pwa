import {
  createContext,
  Dispatch,
  FC,
  ReactChild,
  useEffect,
  useState,
} from "react";
import { SELECTED_CITY } from "../constants";

export interface AuthInterface {
  selectedCity: string;
  setSelectedCity: Dispatch<string>;
}

export const AuthContext = createContext<AuthInterface>({
  selectedCity: "",
  setSelectedCity: () => {},
});

const AuthProvider: FC<{ children: ReactChild }> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState("");
  useEffect(() => {
    setSelectedCity(localStorage.getItem(SELECTED_CITY) || "");
  }, []);
  const value = {
    selectedCity,
    setSelectedCity,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
