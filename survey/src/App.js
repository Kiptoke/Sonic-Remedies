import { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Survey from "./components/survey";
import Home from "./components/home";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import UploadMusic from "./components/admin/uploadMusic";
import { initViewHeight } from "./utils/viewHeight";

function App() {
  initViewHeight();

  return (
    <Fragment>
      <Switch>
        <Route path="/survey" component={Survey} />
        <Route path="/home" component={Home} />
        <Route path="/admin/uploadMusic" component={UploadMusic} />
        <Route path="/admin" component={ProtectedRoute} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
