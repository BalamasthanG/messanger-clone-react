import React from "react";
import "./Header.css";
import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

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
      <Link to="/login">
        <img
          className="header__icon"
          src="https://lh3.googleusercontent.com/proxy/gAV7mZyGbboTem_h_E2Gq4WqloBqYU-2D1pWW8P_xh33lg8b_nrHmPrNr20WhV7ou1AqUmJ43GXQ2Vjx8KOmpnDx_O1z8VywNHLhyv3_s8u4K6ZgEHA"
          alt="icon"
        />
      </Link>
      <h3 className="user_text">{user}</h3>
      <Button onClick={logout}>Log Out</Button>
    </div>
  );
}

export default Header;
