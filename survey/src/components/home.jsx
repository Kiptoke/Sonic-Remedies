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
        <h1>Welcome to the survey</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          fringilla quis purus eu rhoncus. Duis ornare odio nec dolor aliquet
          fermentum. In tortor urna, placerat vel lorem at, dapibus elementum
          mi. Phasellus mi ex, malesuada quis tellus in, molestie vulputate
          enim. Vestibulum sed tempor mi, eu dictum tortor. Fusce nec mauris
          lorem. Nam pellentesque orci purus, at gravida turpis cursus sed.
          Fusce feugiat mauris sed iaculis ornare. Vestibulum sapien urna,
          consectetur quis sem sit amet, vestibulum hendrerit sem.
        </p>
        <Link to="survey">
          <Button text={"Begin"} />
        </Link>
      </div>
    );
  }
}

export default Home;
