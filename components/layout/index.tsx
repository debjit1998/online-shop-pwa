import { FC, Fragment, ReactChild, ReactNode } from "react";
import Navbar from "../navbar";

const Layout: FC<{ children: ReactChild }> = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};

export default Layout;
