import React from "react";
import { HeadingSection, MenuSection, NavbarSection } from "./styles";
import logo from "../../images/hat_7270989.png";

const Navbar = () => {
  return (
    <NavbarSection>
      <HeadingSection>
        <img src={logo} alt="Logo" />
        <h2>YumYard</h2>
      </HeadingSection>
      <MenuSection>
        <button>Sign in</button>
      </MenuSection>
    </NavbarSection>
  );
};

export default Navbar;
