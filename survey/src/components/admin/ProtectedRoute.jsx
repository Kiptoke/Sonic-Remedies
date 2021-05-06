import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Login from "./login";
import API from "../../services/api-client";

const { REACT_APP_LOCALHOST } = process.env;

const checkUser = async (token, setLoggedIn, setUser) => {
  const res = await API.getAll("login/me", token);
  setUser(res);
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    checkUser(localStorage.getItem("token"), setLoggedIn, setUser);
    if (user === "admin") setLoggedIn(true);
  }, [user]);

  return (
    <div>
      {!loggedIn && (
        <div>
          <h3>Please log in to continue</h3>
          {/* {REACT_APP_LOCALHOST ? "445603256435-u551v2vd72660dfs8em9mtgmbd6sg4rt.apps.googleusercontent.com" : "445603256435-vggfssfjijfmmie75f0k7if4mjlvtp8b.apps.googleusercontent.com"} */}
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
