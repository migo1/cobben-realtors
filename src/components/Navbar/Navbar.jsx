import { useState } from "react";
import "./Navbar.css";
import NavItem from "./NavItem";
import FirstNav from "./FirstNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


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
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        {isOverlayVisible && (
          <div
            className={`overlay ${isMenuOpen ? "active" : ""}`}
            // onClick={() => toggleMenu()}
          >
            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
              <ul className="mobile-nav-list bg-cool-blue">
                {navItems.map((item) => (
                  <li className="mobile-menu-item " key={item.name}>
                    {item.subItems ? (
                      <div
                        className={`mobile-sub-item cursor-pointer ${
                          (item.name === "Land" && isLandDropdownOpen) ||
                          (item.name === "Properties" &&
                            isPropertiesDropdownOpen)
                            ? "dropdown-enter-active"
                            : ""
                        }`}
                        onClick={() => {
                          if (item.name === "Land") {
                            toggleLandDropdown();
                          } else if (item.name === "Properties") {
                            togglePropertiesDropdown();
                          }
                        }}
                      >
                        <span className="flex justify-between group-hover:text-orange-600 items-center bg-cool-blue text-white">
                          {item.name}
                          <FontAwesomeIcon
                            icon={faAngleDown}
                            className="h-4 w-4 ml-2 bg-cool-blue "
                          />
                        </span>
                        {((item.name === "Land" && isLandDropdownOpen) ||
                          (item.name === "Properties" &&
                            isPropertiesDropdownOpen)) && (
                          <ul className="mobile-sub-list">
                            {item.subItems.map((subItem) => (
                              <li className="mobile-list" key={subItem.name}>
                                <a
                                  href={subItem.link}
                                  className="mobile-title block px-4 py-2 text-dark-cool-blue hover:text-orange-600"
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.link}
                        className="text-dark-cool-blue hover:text-orange-600 "
                      >
                        <span className="flex items-center bg-cool-blue text-white">
                          {item.name}
                        </span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
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
