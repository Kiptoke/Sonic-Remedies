import { useEffect, useState } from "react";
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
      {musics.map((music) => (
        <div
          key={music._id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "1rem" }}>{music.title}</div>
          <div style={{ margin: "1rem" }}>{music.artist}</div>
          <Button
            style={{ margin: "1rem" }}
            onClick={() => {
              if (window.confirm("Delete this music from the DB?"))
                clickedDelete(music._id);
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ViewMusic;
