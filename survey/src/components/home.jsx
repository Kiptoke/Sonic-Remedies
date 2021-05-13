import { Component } from "react";
import Button from "./common/userButton";
import { Link } from "react-router-dom";
import "../css/components/home.scss";
import "../css/components/common/arrowButton.scss";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home global-container">
        <h1>Welcome to Sonic Remedies!</h1>
        <p>
          The purpose of this site is to support research which investigates the
          relationship our minds and bodies have with music.
        </p>
        <p>
          In particular, the Sonic Remedies team seeks to identify specific
          elements of musical construction and expression for the purpose of
          prescribing remedies for healing.
        </p>
        <p>
          Your participation here is entirely voluntary and without
          compensation. Your responses are anonymous and utilized strictly to
          support research. You won’t be asked to pay for anything or offered
          products and services for sale.{" "}
        </p>
        <p>
          For this survey, you will be asked a series of questions and presented
          with approximately five short musical excerpts, for which you will
          need to share both mental and physical responses. The survey will take
          approximately 15 minutes. We appreciate your involvement in this study
          and hope you enjoy the journey.
        </p>
        <Link to="/survey">
          <Button text={"Begin"} />
        </Link>
      </div>
    );
  }
}

export default Home;
