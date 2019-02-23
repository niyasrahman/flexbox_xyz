import { Link } from "gatsby";
import React from "react";
import "./header.scss";
const SSLink = url => (
  <a rel="noopener noreferrer" target="_blank" href={url.url}>
    <span className={`header__${url.type}`} />
  </a>
);

const Header = ({ SocialURL }) => (
  <header className="header">
    <div className="header__container">
      <Link to="/">
        <span className="header__logo">FlexBOX 101</span>
      </Link>
      <ul className="header__social-container">
        <SSLink
          type={"github"}
          url={"https://github.com/niyasrahman/flexbox_xyz"}
        />
      </ul>
    </div>
  </header>
);

export default Header;
