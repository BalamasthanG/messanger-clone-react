import React, { useEffect } from "react";
import "./App.css";
import ChatRoom from "./ChatRoom";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "USER_ACTION",
          user: authUser.email,
        });
        console.log("true");
      } else {
        dispatch({
          type: "USER_ACTION",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <ChatRoom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
