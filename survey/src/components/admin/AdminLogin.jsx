import { useState } from 'react'
import GoogleLogin from 'react-google-login';
import { Redirect } from "react-router-dom";

const AdminLogin = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    function responseGoogle(response) {
        console.log(response);
        console.log(response.profileObj);
        if (response.profileObj.email === "maryketa@umich.edu" || response.profileObj.email === "sronning@umich.edu") {
            setLoggedIn(true);
        }

    }
    function responseFailure(response) {
        console.log(response);
        console.log("Login failed")
    }

    function getState() {
        return loggedIn
    }
    return (
        <div>
            <GoogleLogin
                clientId="445603256435-u551v2vd72660dfs8em9mtgmbd6sg4rt.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseFailure}
                cookiePolicy={'single_host_origin'}
            />
            {
                loggedIn && <Redirect to="/admin" />
            }
        </div>
    )
}

export default AdminLogin
