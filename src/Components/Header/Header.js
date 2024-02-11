import * as React from "react";
import { HiMenu } from "react-icons/hi";
import NavbarComponent from "../Navbar/Navbar";
import "./Header.css";

// Want a signup/login button in header
// Want netflix logo (or any logo) to render in header

/* create a signup button with simple functionality such as :
    reroutes to a signup page
    maybe signup page only has a message saying 'welcome to signup page.'
    no other functionality needed at this time 
*/

/** create a login function with same functionality as signup */

const HeaderComponent = () => {
  const [isNavBarOpen, setIsNavbarOpen] = React.useState(false);

  const toggleNavbarOpen = () => {
    // setIsNavbarOpen(!isNavBarOpen);
    setIsNavbarOpen((isOpen) => !isOpen);
  };

  return (
    <section className="header-container">
      <header className="header">
        <div className="menu-logo-container">
          <button className="hamburger-menu" onClick={toggleNavbarOpen}>
            {<HiMenu />}
          </button>
          <h1 className="header-logo">NETFLIX</h1>
        </div>
        <h4 className="header-login-signup">
          <p className="header-signup">Sign Up</p>
          <button className="header-login">Log In</button>
        </h4>
      </header>
      <NavbarComponent
        toggleNavbarOpen={toggleNavbarOpen}
        isOpen={isNavBarOpen}
      />
    </section>
  );
};

export default HeaderComponent;
