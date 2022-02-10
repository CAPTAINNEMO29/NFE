import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Fragment>
      <div className="w-full h-36 bg-sky-300">
        <div className=" h-32 flex justify-center items-center">
          <FontAwesomeIcon className="m-4 h-6 text-blue-700" icon={faFacebookF} />
          <FontAwesomeIcon className="m-4 h-6 text-blue-700" icon={faInstagram} />
          <FontAwesomeIcon className="m-4 h-6 text-blue-700" icon={faTwitter} />
          <FontAwesomeIcon className="m-4 h-6 text-blue-700" icon={faTwitch} />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
