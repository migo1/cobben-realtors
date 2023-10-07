import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const FirstNav = () => {
  return (
    <div className="flex justify-between bg-cool-blue py-2 px-44 first-nav-bar">
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
        <p className="bg-cool-blue text-white text-sm font-medium nav-location">
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
  );
};

export default FirstNav;
