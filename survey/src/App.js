import { Fragment } from "react";
import { Route, Redirect, Switch, useParams } from "react-router-dom";
import Survey from "./components/survey";
import SurveyMap from "./components/mapUI/surveyMap";
import Home from "./components/home";
import Set from "./components/setUI/set";
import NotFound from "./components/notFound";
import Admin from "./components/admin/Admin";
import { initViewHeight } from "./utils/viewHeight";

function App() {
  initViewHeight();

  const questions = [
    {
      type: "mc",
      ask: "How are you feeling today?",
      responses: [
        "Cheerful",
        "Reflective",
        "Gloomy",
        "Humorous",
        "Melancholy",
        "Playful",
        "Romantic",
        "Ominous",
        "Calm",
        "Hopeful",
        "Angry",
        "Fearful",
        "Tense",
        "Lonely",
      ],
    },
    {
      type: "ms",
      ask: "Which are cute?",
      responses: ["Pikachu", "Squirtle", "Charizard", "Mewtwo"],
    },
    {
      type: "color",
      ask: "Choose a color?",
      responses: [],
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
