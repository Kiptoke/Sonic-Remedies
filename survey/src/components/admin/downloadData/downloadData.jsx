import { Link } from "react-router-dom";

const DownloadData = () => {
  return (
    <div className="admin-container">
      <Link to="/admin">
        <button>Return to Admin Home</button>
      </Link>
    </div>
  );
};

export default DownloadData;
