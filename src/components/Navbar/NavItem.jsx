import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NavItem = ({
  item,
  isLandDropdownOpen,
  isPropertiesDropdownOpen,
  toggleLandDropdown,
  togglePropertiesDropdown,
}) => {
  return (
    <li className="dropdown-container text-xl ml-14">
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
            (item.name === "Properties" && isPropertiesDropdownOpen)) && (
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
          <span className="flex items-center">{item.name}</span>
        </a>
      )}
    </li>
  );
};
NavItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    subItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  isLandDropdownOpen: PropTypes.bool.isRequired,
  isPropertiesDropdownOpen: PropTypes.bool.isRequired,
  toggleLandDropdown: PropTypes.func.isRequired,
  togglePropertiesDropdown: PropTypes.func.isRequired,
};


export default NavItem;
