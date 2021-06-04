import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Admin = () => {
  return (
    <Container>
      <h1 className="h1">Admin Home Page</h1>
      <Link to="/admin/modifysurvey">
        <Button>Modify Survey</Button>
      </Link>
      <Link to="/admin/uploadmusic">
        <Button>Upload Music</Button>
      </Link>
      <Link to="/admin/downloaddata">
        <Button>Download Data</Button>
      </Link>
      <Link to="/admin/viewmusic">
        <Button>View/Delete Music</Button>
      </Link>
    </Container>
  );
};

export default Admin;
