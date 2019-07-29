import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

class Social extends Component {
  render() {
    return (
      <div className="social-buttons">
        <FontAwesomeIcon icon="facebook-f" />
        <FontAwesomeIcon icon="instagram" />
        <FontAwesomeIcon icon="linkedin" />
        <FontAwesomeIcon icon="twitter" />
        <FontAwesomeIcon icon="github" />
        <FontAwesomeIcon icon="flickr" />
      </div>
    );
  }
}

export default Social;
