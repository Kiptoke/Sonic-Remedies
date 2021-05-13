import "../../../css/components/admin/uploadMusic.scss";
import MusicFileForm from "./musicFileForm";
import { Link } from "react-router-dom";

const UploadMusic = () => {
  return (
    <div className="admin-container upload-music">
      <Link to="/admin">
        <button>Return to Admin Home</button>
      </Link>
      <h1>Upload a music file (.mp3)</h1>
      <MusicFileForm />
    </div>
  );
};
export default UploadMusic;
