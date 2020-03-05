import React from "react";
import logo from "../../logo.svg";

import "./header.styles.scss";

const Header = () => (
    <header className="header">
        <h1>Welcome!</h1>
        <p>
            I know it's boring around here.... at least for now.... Hopefully
            the revolving atom provides enough entertainment.
        </p>
        <p>More content will come soon. I promise!</p>
        <img src={logo} className="logo" alt="logo" />
        <a
            className="link"
            href="https://github.com/dumitru-alex"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub
        </a>
        <a
            className="link"
            href="https://www.linkedin.com/in/alexandru-paul-dumitru/"
            target="_blank"
            rel="noopener noreferrer"
        >
            Linkedin
        </a>
    </header>
);

export default Header;
