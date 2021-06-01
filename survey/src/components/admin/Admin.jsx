import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="admin-container">
      <h1>Admin Home Page</h1>
      <Link to="/admin/modifysurvey">
        <button>Modify Survey</button>
      </Link>
      <Link to="/admin/uploadmusic">
        <button>Upload Music</button>
      </Link>
      <Link to="/admin/downloaddata">
        <button>Download Data</button>
      </Link>
      <Link to="/admin/viewmusic">
        <button>View/Delete Music</button>
      </Link>
    </div>
  );
};

export default Admin;
