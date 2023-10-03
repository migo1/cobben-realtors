import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  // faPhoneAlt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

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
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] =
    useState(false);

  const toggleLandDropdown = () => {
    setIsLandDropdownOpen(!isLandDropdownOpen);
  };

  const togglePropertiesDropdown = () => {
    setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen);
  };

  return (
    <>
      <div className="flex justify-between bg-cool-blue py-2 px-44">
        <div className="top-left-contact bg-cool-blue flex space-x-4">
          <p className="bg-cool-blue text-white text-sm font-medium">
            <span className="bg-cool-blue ">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-3.5 w-3.5 ml-2 bg-cool-blue text-orange-600 mr-2"
              />
            </span>
            info@cobbenrealtors.com
          </p>
          <p className="bg-cool-blue text-white text-sm font-medium">
            <span className="bg-cool-blue">
              {" "}
              <FontAwesomeIcon
                icon={faLocationDot}
                className="h-3.5 w-3.5 ml-2 bg-cool-blue text-orange-600 mr-2"
              />
            </span>
            Nairobi, Kenya
          </p>
        </div>
        <div className="top-right-contact socials text-white bg-cool-blue space-x-4">
          <FontAwesomeIcon
            icon={faFacebook}
            className="h-4 w-4 ml-2 bg-cool-blue"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="h-4 w-4  ml-2 bg-cool-blue"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-4 w-4  ml-2 bg-cool-blue"
          />
        </div>

      </div>
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
        <div className="flex items-center desktop-view">
          <ul className="flex ">
            {navItems.map((item) => (
              <li key={item.name} className="dropdown-container text-xl ml-14">
                {item.subItems ? (
                  <div
                    className={`relative group cursor-pointer ${
                      (item.name === "Land" && isLandDropdownOpen) ||
                      (item.name === "Properties" && isPropertiesDropdownOpen)
                        ? "dropdown-enter-active"
                        : ""
                    }`}
                    onMouseEnter={() => {
                      if (item.name === "Land") {
                        toggleLandDropdown();
                      } else if (item.name === "Properties") {
                        togglePropertiesDropdown();
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.name === "Land") {
                        toggleLandDropdown();
                      } else if (item.name === "Properties") {
                        togglePropertiesDropdown();
                      }
                    }}
                  >
                    <span className="flex text-dark-cool-blue group-hover:text-orange-600 items-center">
                      {item.name}
                      <FontAwesomeIcon icon={faPlus} className="h-3 w-3 ml-2" />
                    </span>
                    {((item.name === "Land" && isLandDropdownOpen) ||
                      (item.name === "Properties" &&
                        isPropertiesDropdownOpen)) && (
                      <ul className="dropdown-menu">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={subItem.link}
                              className="block px-4 py-2 text-dark-cool-blue hover:text-orange-600"
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
                    <span className="flex items-center">
                      {item.name}
                      {/* <FontAwesomeIcon icon={faPlus} className="h-3 w-3 ml-2" /> */}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
