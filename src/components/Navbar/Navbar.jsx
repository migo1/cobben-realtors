import { useState } from "react";
import "./Navbar.css";
import NavItem from "./NavItem";
import FirstNav from "./FirstNav";

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Diaspora", link: "/diaspora" },
    {
      name: "Land",
      subItems: [
        { name: "Service 1", link: "/service1" },
        { name: "Service 2", link: "/service2" },
        { name: "Service 3", link: "/service3" },
      ],
    },
    {
      name: "Properties",
      subItems: [
        { name: "Property 1", link: "/property1" },
        { name: "Property 2", link: "/property2" },
        { name: "Property 3", link: "/property3" },
      ],
    },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [isLandDropdownOpen, setIsLandDropdownOpen] = useState(false);
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  
  const toggleLandDropdown = () => {
    setIsLandDropdownOpen(!isLandDropdownOpen);
  };

  const togglePropertiesDropdown = () => {
    setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen);
  };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      setIsOverlayVisible(!isOverlayVisible);
    };

    
  return (
    <>
      <FirstNav />
      <nav className="flex items-center justify-between px-44 py-5 shadow-md">
        <div className="flex items-center">
          <img
            src="/cobben-realtors.png"
            alt="Quarter logo"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-dark-cool-blue font-bold text-2xl">
            Cobben Realtors
          </h1>
        </div>
        <button
          className={`hamburger-button ${isMenuOpen ? "active" : ""}`}
          onClick={() => toggleMenu()}
        >
          <p>button</p>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        {isOverlayVisible && (
          <div className="overlay" onClick={() => toggleMenu()}>
            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
              {/* ... (your mobile menu content) */}
            </div>
          </div>
        )}
        <div className="flex items-center desktop-view">
          <ul className="flex ">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                isLandDropdownOpen={isLandDropdownOpen}
                isPropertiesDropdownOpen={isPropertiesDropdownOpen}
                toggleLandDropdown={toggleLandDropdown}
                togglePropertiesDropdown={togglePropertiesDropdown}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
