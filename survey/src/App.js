import { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Survey from "./components/survey";
import Home from "./components/home";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import UploadMusic from "./components/admin/uploadMusic/uploadMusic";
import ViewMusic from "./components/admin/viewMusic";
import ModifySurvey from "./components/admin/ModifySurvey";
import DownloadData from "./components/admin/downloadData/downloadData";
import Admin from "./components/admin/Admin";
import { initViewHeight } from "./utils/viewHeight";

function App() {
  initViewHeight();

  return (
    <Fragment>
      <Switch>
        <Route path="/survey" component={Survey} />
        <Route path="/home" component={Home} />
        <ProtectedRoute path="/admin/modifysurvey" component={ModifySurvey} />
        <ProtectedRoute path="/admin/uploadmusic" component={UploadMusic} />
        <ProtectedRoute path="/admin/viewmusic" component={ViewMusic} />
        <ProtectedRoute path="/admin/downloaddata" component={DownloadData} />
        <ProtectedRoute path="/admin" component={Admin} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
