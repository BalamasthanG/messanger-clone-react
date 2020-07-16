import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://images.vexels.com/media/users/3/139911/isolated/preview/1afb4038427b2bd8edd275940aea269d-chat-service-icon-by-vexels.png"
        alt="icon"
      />
      <Button>Sign In</Button>
    </div>
  );
}

export default Header;
