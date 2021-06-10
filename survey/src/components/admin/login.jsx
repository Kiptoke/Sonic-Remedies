import { useState } from "react";
import API from "../../services/api-client";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const doLogin = async (credentials, setLoggedIn, setError) => {
  const res = await API.post("login", credentials);
  if (res) {
    localStorage.setItem("token", res);
    API.postToken();
    window.setInterval(API.refreshLogin, 1000 * 60 * 28);
    setLoggedIn(true);
  } else {
    setLoggedIn(false);
    setError("The password was incorrect. Try Again.");
  }
};

const Login = ({ setLoggedIn }) => {
  const [credentials, setCredentials] = useState({
    username: "admin",
    password: "",
  });

  const [error, setError] = useState("");

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
        <Button
          onClick={(e) => {
            e.preventDefault();
            doLogin(credentials, setLoggedIn, setError);
          }}
        >
          Login
        </Button>
      </form>
      <Alert variant="danger" style={{ display: error.length ? "" : "none" }}>
        {error}
      </Alert>
    </div>
  );
};

export default Login;
