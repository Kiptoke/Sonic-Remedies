import { useEffect, useState } from "react";
import API from "../../services/api-client";
import { Link } from "react-router-dom";

const clickedDelete = (id) => {
  API.deleteOne("music", id);
};

const ViewMusic = () => {
  const [musics, setMusics] = useState([]);
  const getAndSet = async () => {
    setMusics(await API.getAll("music"));
  };
  useEffect(() => {
    getAndSet();
  });
  return (
    <div className="admin-container">
      <Link to="/admin">
        <button>Return to Admin Home</button>
      </Link>
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
          <button
            style={{ margin: "1rem" }}
            onClick={() => clickedDelete(music._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ViewMusic;
