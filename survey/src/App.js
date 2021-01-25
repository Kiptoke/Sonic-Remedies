import { Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Survey from "./components/survey";
import SurveyMap from "./components/surveyMap";
import Home from "./components/home";
import Set from "./components/set";
import NotFound from "./components/notFound";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/survey" component={Survey} />
        <Route path="/surveymap" component={SurveyMap} />
        <Route path="/home" component={Home} />
        <Route path="/set" component={Set} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
