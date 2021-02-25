import { Fragment } from "react";
import { Route, Redirect, Switch, useParams } from "react-router-dom";
import Survey from "./components/survey";
import SurveyMap from "./components/surveyMap";
import Home from "./components/home";
import Set from "./components/setUI/set";
import NotFound from "./components/notFound";
import Admin from "./components/admin/Admin";
import setViewHeight from "./utils/setViewHeight";

function App() {
  setViewHeight(window, document);

  const questions = [
    {
      type: "ms",
      ask: "Which of these colors do you like? Select all that apply.",
      responses: [
        "Blue",
        "Green",
        "Yellow",
        "Orange",
        "Red",
        "None of the above",
      ],
    },
    {
      type: "ms",
      ask: "Which are cute? Select all that apply.",
      responses: [
        "Pikachu",
        "Squirtle",
        "Charizard",
        "Mewtwo",
        "None of the above",
      ],
    },
    {
      type: "mc",
      ask: "What is the loudest?",
      responses: ["Train", "Bus", "Airplane", "Lawn Mower"],
    },
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
        <Route path="/admin" component={Admin} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect from="/set" exact to="/set/0" />
        <Redirect to="/not-found" />
      </Switch>
    </Fragment>
  );
}

export default App;
