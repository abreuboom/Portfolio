import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

class Social extends Component {
  render() {
    return (
      <div className="social-buttons">
        <a href="https://github.com/abreuboom" target="_blank">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a href="https://www.linkedin.com/in/abbbbreu" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a href="https://www.facebook.com/abbbbreu" target="_blank">
          <FontAwesomeIcon icon={["fab", "facebook-f"]} />
        </a>
        <a href="https://www.instagram.com/abbbbreu/" target="_blank">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
        <a href="https://twitter.com/abbbbreu" target="_blank">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC4qy_YpIt5v6Pk907EEf6EQ"
          target="_blank"
        >
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </a>
        <a href="https://www.flickr.com/people/abbbbreu/" target="_blank">
          <FontAwesomeIcon icon={["fab", "flickr"]} />
        </a>
      </div>
    );
  }
}

export default Social;
