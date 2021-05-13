import { useState } from "react";
import API from "../../services/api-client";

const doLogin = async (credentials, setLoggedIn) => {
  const res = await API.post("login", credentials);
  if (res) {
    localStorage.setItem("token", res);
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
  }
};

const Login = ({ setLoggedIn }) => {
  const [credentials, setCredentials] = useState({
    username: "admin",
    password: "",
  });

  return (
    <div className="admin-container">
      <h1>Please login as admin to continue</h1>
      <form>
        <label>Username</label>
        <input
          defaultValue="admin"
          onChange={(e) =>
            setCredentials({
              username: e.target.value,
              password: credentials.password,
            })
          }
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) =>
            setCredentials({
              username: credentials.username,
              password: e.target.value,
            })
          }
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            doLogin(credentials, setLoggedIn);
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
