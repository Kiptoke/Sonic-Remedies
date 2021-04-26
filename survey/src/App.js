import { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Survey from "./components/survey";
import Home from "./components/home";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import UploadMusic from "./components/admin/uploadMusic/uploadMusic";
import Admin from "./components/admin/Admin";
import { initViewHeight } from "./utils/viewHeight";

function App() {
  initViewHeight();

  return (
    <Fragment>
      <Switch>
        <Route path="/survey" component={Survey} />
        <Route path="/home" component={Home} />
        <ProtectedRoute path="/admin/uploadMusic" component={UploadMusic} />
        <ProtectedRoute path="/admin" component={Admin} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
