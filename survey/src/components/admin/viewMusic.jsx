import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import API from "../../services/api-client";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ViewMusic = () => {
  const [musics, setMusics] = useState([]);
  const clickedDelete = (id) => {
    API.deleteOne("music", id);
    setMusics(musics.filter((m) => m._id !== id));
  };
  const getAndSet = async () => {
    setMusics(await API.getAll("music"));
  };
  useEffect(() => {
    getAndSet();
  }, []);
  return (
    <div className="admin-container">
      <Link to="/admin">
        <Button>Return to Admin Home</Button>
      </Link>
      {musics.length === 0 ? <h1>No Music in DB</h1> : ""}
      <Table striped bordered hover>
        <thead>
          <th>Filename</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Action</th>
        </thead>
        <tbody>
          {musics
            .sort((a, b) =>
              a.fileName.toLowerCase() < b.fileName.toLowerCase() ? -1 : 1
            )
            .map((music) => (
              <tr>
                <td style={{ margin: "1rem" }}>{music.fileName}</td>
                <td style={{ margin: "1rem" }}>{music.title}</td>
                <td style={{ margin: "1rem" }}>{music.artist}</td>
                <td>
                  <Button
                    style={{ margin: "1rem" }}
                    onClick={() => {
                      if (window.confirm("Delete this music from the DB?"))
                        clickedDelete(music._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ViewMusic;
