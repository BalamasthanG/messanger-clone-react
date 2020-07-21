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
            src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
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
