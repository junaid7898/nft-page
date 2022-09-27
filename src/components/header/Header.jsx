import React, { useRef } from "react";
import NavLogo from "../../assests/NavLogo";
import HeaderLinks from "./sub-components/HeaderLinks";
import NavMobileLogo from "./sub-components/NavMobileLogo";
import SoundOnLogo from "./sub-components/SoundOnLogo";

import { handleNavOpen } from "../../helper/handleNavOpen";

const Header = () => {
  const navLinksRef = useRef();
  const menuLogoRef = useRef();
  const headerBackgroundRef = useRef();

  return (
    <div className="header-container" ref={headerBackgroundRef}>
      <div className="header">
        <div className="header-content">
          <NavLogo className="header--logo" />
          <HeaderLinks reference={navLinksRef} />
          <SoundOnLogo />
        </div>
        <NavMobileLogo
          className="menu"
          onClick={() =>
            handleNavOpen(menuLogoRef, navLinksRef, headerBackgroundRef)
          }
          reference={menuLogoRef}
        />
      </div>
    </div>
  );
};

export default Header;
