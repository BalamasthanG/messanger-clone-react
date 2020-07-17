import React, { useState } from "react";
import {
  InputLabel,
  Input,
  FormControl,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import "./Login.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch({
          type: "USER_ACTION",
          user: auth.user.email,
        });
        history.push("/");
      })
      .catch((e) => {
        alert(e.message + " " + "Click Register..!");
      });
  };

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch({
          type: "USER_ACTION",
          user: auth.user.email,
        });
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Card>
        <CardContent className="login_content">
          <img
            className="login__icon"
            src="https://lh3.googleusercontent.com/proxy/gAV7mZyGbboTem_h_E2Gq4WqloBqYU-2D1pWW8P_xh33lg8b_nrHmPrNr20WhV7ou1AqUmJ43GXQ2Vjx8KOmpnDx_O1z8VywNHLhyv3_s8u4K6ZgEHA"
            alt="icon"
          />
          <form>
            <FormControl className="login__email">
              <InputLabel>Email</InputLabel>
              <Input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              ></Input>
            </FormControl>
            <FormControl className="login__pass">
              <InputLabel>Password</InputLabel>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></Input>
            </FormControl>
            <Button onClick={login} className="login_btn" variant="outlined">
              Sign In
            </Button>
          </form>
          <Button variant="outlined" onClick={register} className="signup_btn">
            Register
          </Button>
          <p className="intro">
            Enter Email, Password and click Register for the first time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
