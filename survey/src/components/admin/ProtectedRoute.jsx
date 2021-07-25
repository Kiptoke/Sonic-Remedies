import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Login from "./login";
import API from "../../services/api-client";

const checkUser = async (token, setLoggedIn, setUser) => {
  const res = await API.getAll("login/me", token);
  setUser(res);
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (process.env.REACT_APP_LOCALHOST) {
      setLoggedIn(true);
      setUser("admin");
    }
    checkUser(localStorage.getItem("token"), setLoggedIn, setUser);
    if (user === "admin") setLoggedIn(true);
  }, [user]);

  return (
    <div>
      {!loggedIn && (
        <div>
          <Login setLoggedIn={setLoggedIn}></Login>
        </div>
      )}

      <Route
        {...rest}
        render={(props) => {
          if (loggedIn === true) {
            return <Component {...props} />;
          }
        }}
      />
    </div>
  );
};

export default ProtectedRoute;
