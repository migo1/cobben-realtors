import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; 

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Services",
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
    { name: "Contact", link: "/contact" },
  ];

  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] =
    useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const togglePropertiesDropdown = () => {
    setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
      <div className="flex items-center">
        {/* <img src="/logo.png" alt="Quarter logo" className="h-8 w-8 mr-2" /> */}
        <h1 className="text-red-600 font-bold text-xl">Quarter</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name} className="dropdown-container">
              {item.subItems ? (
                <div
                  className={`relative group cursor-pointer ${
                    (item.name === "Services" && isServicesDropdownOpen) ||
                    (item.name === "Properties" && isPropertiesDropdownOpen)
                      ? "dropdown-enter-active"
                      : ""
                  }`}
                  onMouseEnter={() => {
                    if (item.name === "Services") {
                      toggleServicesDropdown();
                    } else if (item.name === "Properties") {
                      togglePropertiesDropdown();
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.name === "Services") {
                      toggleServicesDropdown();
                    } else if (item.name === "Properties") {
                      togglePropertiesDropdown();
                    }
                  }}
                >
                  <span className="text-gray-700 group-hover:text-red-600">
                    {item.name}
                    <FontAwesomeIcon icon={faPlus} className="h-3 w-3 ml-2" />
                  </span>
                  {((item.name === "Services" && isServicesDropdownOpen) ||
                    (item.name === "Properties" &&
                      isPropertiesDropdownOpen)) && (
                    <ul className="dropdown-menu">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 text-gray-700 hover:text-red-600"
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
                  className="text-gray-700 hover:text-red-600"
                >
                  <span className="flex items-center">
                    {item.name}
                    <FontAwesomeIcon icon={faPlus} className="h-3 w-3 ml-2" />
                  </span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
