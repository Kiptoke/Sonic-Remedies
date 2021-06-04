import { Link } from "react-router-dom";
import dLoadData from "../../../utils/dLoadData";
import { Button } from "react-bootstrap";

const DownloadData = () => {
  return (
    <div className="admin-container">
      <Link to="/admin">
        <Button>Return to Admin Home</Button>
      </Link>
      <Button onClick={dLoadData}>Download Data (CSV)</Button>
    </div>
  );
};

export default DownloadData;
