import { useState } from "react";
import { Route } from "react-router-dom";
import GoogleLogin from "react-google-login";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  function responseGoogle(response) {
    console.log(response);
    console.log(response.profileObj);
    if (
      response.profileObj.email === "maryketa@umich.edu" ||
      response.profileObj.email === "sronning@umich.edu"
    ) {
      console.log("yes");
      setLoggedIn(true);
    } else {
      console.log("no");
    }
  }
  function responseFailure(response) {
    console.log(response);
    console.log("Login failed");
  }

  return (
    <div>
      {!loggedIn && (
        <div>
          <h3>Please log in to continue</h3>
          <GoogleLogin
            clientId="445603256435-vggfssfjijfmmie75f0k7if4mjlvtp8b.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={(res) => responseGoogle(res)}
            onFailure={(res) => responseFailure(res)}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
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
