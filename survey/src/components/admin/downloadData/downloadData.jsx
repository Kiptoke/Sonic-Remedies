import { Link } from "react-router-dom";
import dLoadData from "../../../utils/dLoadData";

const DownloadData = () => {
  return (
    <div className="admin-container">
      <Link to="/admin">
        <button>Return to Admin Home</button>
      </Link>
      <button onClick={dLoadData}>Download Data (CSV)</button>
    </div>
  );
};

export default DownloadData;
