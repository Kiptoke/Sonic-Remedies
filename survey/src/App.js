import { Fragment } from "react";
import { Route, Redirect, Switch, useParams } from "react-router-dom";
import Survey from "./components/survey";
import SurveyMap from "./components/surveyMap";
import Home from "./components/home";
import Set from "./components/set";
import NotFound from "./components/notFound";
import Admin from "./components/Admin";

function App() {
  const questions = [
    { ask: "What's up?", responses: ["nothing much.", "so much", "???"] },
    { ask: "How's it going?", responses: ["Super", "Meh", "Horribly!"] },
  ];

  function SetLoader() {
    let setId = useParams().id;
    return <Set setId={setId} questions={questions} />;
  }

  return (
    <Fragment>
      <Switch>
        <Route path="/survey" component={Survey} />
        <Route path="/surveymap" component={SurveyMap} />
        <Route path="/home" component={Home} />
        <Route path="/set/:id" render={() => <SetLoader />} />
        <Route path="/set" component={Set} />
        <Route path="/admin" component={Admin} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
