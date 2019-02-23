import React from "react";
import Header from "./header";
import "./layout.scss";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer className="footer">
          Made with Gatsby.js & ❤ In india by{" "}
          <a href="http://niyasrahman.me">NiyasRahman</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
