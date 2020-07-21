import React from "react";
import "./Header.css";
import { Button, IconButton } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Header() {
  const [{ user }] = useStateValue();
  const history = useHistory();
  const logout = () => {
    if (user) {
      auth.signOut();
      history.push("/");
    }
  };
  return (
    <div className="header">
      <Link className="link" to="/login">
        <img
          className="header__icon"
          src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
          alt="icon"
        />
      </Link>
      <h3 className="user_text">{user}</h3>

      <IconButton onClick={logout}>
        <ExitToAppIcon className="header_logout" />
      </IconButton>
    </div>
  );
}

export default Header;
